const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const app = express();

const serviceAccount = require("/Users/FW_Digital_Media/Documents/git/YourTour/BackEnd/your-tour-functions/your-tour-2a49d-firebase-adminsdk-kelob-5de597f5ed.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-tour-2a49d.firebaseio.com"
});

app.use(cors({ origin: true }));

const db = admin.firestore();

app.get("/restaurants", (req, res) => {
  db.collection("restaurants")
    .get()
    .then(data => {
      let restaurants = [];
      data.forEach(doc => {
        restaurants.push({
          restaurantsId: doc.id,
          ...doc.data()
        });
      });
      return res.json(restaurants);
    })
    .catch(err => console.error(err));
});

app.post("/restaurant", (req, res) => {
  const newRestaurant = {
    address: req.body.address,
    description: req.body.description,
    genre: req.body.genre,
    name: req.body.name,
    website: req.body.website
  };
  db.collection("restaurants")
    .add(newRestaurant)
    .then(doc => {
      res.json({ message: `document ${doc.id} created successfully` });
    })
    .catch(err => {
      res.status(500).json({ error: "Something went Wrong" });
      console.error(err);
    });
});

app.get("/bars", (req, res) => {
  db.collection("bars")
    .get()
    .then(data => {
      let bars = [];
      data.forEach(doc => {
        bars.push({
          barsId: doc.id,
          ...doc.data()
        });
      });
      return res.json(bars);
    })
    .catch(err => console.error(err));
});

app.get("/packages", (req, res) => {
  db.collection("oneDayPackage")
    .get()
    .then(data => {
      let packages = [];
      data.forEach(doc => {
        packages.push({
          packagesId: doc.id,
          ...doc.data()
        });
        console.log("THIS THE DOC", doc);
      });
      return res.json(packages);
    })
    .catch(err => console.error(err));
});

app.post("/package", (req, res) => {
  const newPackage = {
    attractions: {
      description: req.body.attractions.description,
      name: req.body.attractions.name,
      type: req.body.attractions.type
    },
    bars: {
      description: req.body.bars.description,
      name: req.body.bars.name,
      website: req.body.bars.website
    },
    restaurants: {
      description: req.body.restaurants.description,
      name: req.body.restaurants.name,
      genre: req.body.restaurants.genre,
      website: req.body.restaurants.website
    },
    price: req.body.price
  };
  db.collection("oneDayPackage")
    .add(newPackage)
    .then(doc => {
      res.json({ message: `document ${doc.id} created successfully` });
    })
    .catch(err => {
      res.status(500).json({ error: "Something went Wrong" });
      console.error("Something Whent Wrong", err);
    });
});

app.get("/attractions", (req, res) => {
  db.collection("attractions")
    .get()
    .then(data => {
      let attractions = [];
      data.forEach(doc => {
        attractions.push({
          attractionsId: doc.id,
          ...doc.data()
        });
      });
      return res.json(attractions);
    })
    .catch(err => console.error(err));
});

app.post("/attractions", (req, res) => {
  const newAttraction = {
    name: req.body.name,
    address: req.body.address,
    description: req.body.description
  };
  db.collection("attractions")
    .add(newAttraction)
    .then(doc => {
      res.json({ message: `document ${doc.id} created successfully` });
    })
    .catch(err => {
      res.status(500).json({ error: "BIG OOF" });
      console.error(err);
    });
});

/// //// /// //// /// STRIPE /// //// /// //// ///
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const currency = functions.config().stripe.currency || "USD";

// [START chargecustomer]
// Charge the Stripe customer whenever an amount is created in Cloud Firestore
exports.createStripeCharge = functions.firestore
  .document("stripe_customers/{userId}/charges/{id}")
  .onCreate(async (snap, context) => {
    const val = snap.data();
    try {
      // Look up the Stripe customer id written in createStripeCustomer
      const snapshot = await admin
        .firestore()
        .collection(`stripe_customers`)
        .doc(context.params.userId)
        .get();
      const snapval = snapshot.data();
      const customer = snapval.customer_id;
      // Create a charge using the pushId as the idempotency key
      // protecting against double charges
      const amount = val.amount;
      const idempotencyKey = context.params.id;
      const charge = { amount, currency, customer };
      if (val.source !== null) {
        charge.source = val.source;
      }
      const response = await stripe.charges.create(charge, {
        idempotency_key: idempotencyKey
      });
      // If the result is successful, write it back to the database
      return snap.ref.set(response, { merge: true });
    } catch (error) {
      // We want to capture errors and render them in a user-friendly way, while
      // still logging an exception with StackDriver
      console.log(error);
      await snap.ref.set({ error: userFacingMessage(error) }, { merge: true });
      return reportError(error, { user: context.params.userId });
    }
  });
// [END chargecustomer]]

// When a user is created, register them with Stripe
exports.createStripeCustomer = functions.auth.user().onCreate(async user => {
  const customer = await stripe.customers.create({ email: user.email });
  return admin
    .firestore()
    .collection("stripe_customers")
    .doc(user.uid)
    .set({ customer_id: customer.id });
});

// Add a payment source (card) for a user by writing a stripe payment source token to Cloud Firestore
exports.addPaymentSource = functions.firestore
  .document("/stripe_customers/{userId}/tokens/{pushId}")
  .onCreate(async (snap, context) => {
    const source = snap.data();
    const token = source.token;
    if (source === null) {
      return null;
    }
    try {
      const snapshot = await admin
        .firestore()
        .collection("stripe_customers")
        .doc(context.params.userId)
        .get();
      const customer = snapshot.data().customer_id;
      const response = await stripe.customers.createSource(customer, {
        source: token
      });
      return admin
        .firestore()
        .collection("stripe_customers")
        .doc(context.params.userId)
        .collection("sources")
        .doc(response.fingerprint)
        .set(response, { merge: true });
    } catch (error) {
      await snap.ref.set({ error: userFacingMessage(error) }, { merge: true });
      return reportError(error, { user: context.params.userId });
    }
  });

// When a user deletes their account, clean up after them
exports.cleanupUser = functions.auth.user().onDelete(async user => {
  const snapshot = await admin
    .firestore()
    .collection("stripe_customers")
    .doc(user.uid)
    .get();
  const customer = snapshot.data();
  await stripe.customers.del(customer.customer_id);
  return admin
    .firestore()
    .collection("stripe_customers")
    .doc(user.uid)
    .delete();
});

// To keep on top of errors, we should raise a verbose error report with Stackdriver rather
// than simply relying on console.error. This will calculate users affected + send you email
// alerts, if you've opted into receiving them.
// [START reporterror]
function reportError(err, context = {}) {
  // This is the name of the StackDriver log stream that will receive the log
  // entry. This name can be any valid log stream name, but must contain "err"
  // in order for the error to be picked up by StackDriver Error Reporting.
  const logName = "errors";
  const log = logging.log(logName);

  // https://cloud.google.com/logging/docs/api/ref_v2beta1/rest/v2beta1/MonitoredResource
  const metadata = {
    resource: {
      type: "cloud_function",
      labels: { function_name: process.env.FUNCTION_NAME }
    }
  };
}

exports.api = functions.https.onRequest(app);
