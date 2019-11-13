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

// TODO: Remember to set token using >> firebase functions:config:set stripe.token="SECRET_STRIPE_TOKEN_HERE"
const stripe = require("stripe")("sk_test_rvy6rdzXDKcwMkpm6JvQxFFO00F5tiWmkp");

function charge(req, res) {
  const body = JSON.parse(req.body);
  const token = body.token.id;
  const amount = body.charge.amount;
  const currency = body.charge.currency;

  // Charge card
  stripe.charges
    .create({
      amount,
      currency,
      description: "Firebase Example",
      source: token
    })
    .then(charge => {
      send(res, 200, {
        message: "Success",
        charge
      });
    })
    .catch(err => {
      console.log(err);
      send(res, 500, {
        error: err.message
      });
    });
}

function send(res, code, body) {
  res.send({
    statusCode: code,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(body)
  });
}

app.use(cors);
app.post("/", (req, res) => {
  // Catch any unexpected errors to prevent crashing
  try {
    charge(req, res);
  } catch (e) {
    console.log(e);
    send(res, 500, {
      error: `The server received an unexpected error. Please try again and contact the site admin if the error persists.`
    });
  }
});

exports.charge = functions.https.onRequest(app);

exports.api = functions.https.onRequest(app);
