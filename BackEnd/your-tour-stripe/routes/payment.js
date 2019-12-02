const stripe = require("../constants/stripe");

// const secondStripe = new stripeLoader(process.env.STRIPE_SECRET_KEY);

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
};

// const charge = (token, amt) => {
//   return secondStripe.charges.create({
//     amount: amt * 100,
//     currency: "usd",
//     source: token,
//     description: "Statement Description"
//   });
// };

const paymentApi = app => {
  app.get("/", (req, res) => {
    res.send({
      message: "Hello Stripe checkout server!",
      timestamp: new Date().toISOString()
    });
  });

  app.post("/", (req, res) => {
    stripe.charges.create(req.body, postStripeCharge(res));
  });

  // app.post("/api/day-package", (req, res) => {
  //   try {
  //     let data = charge(req.body.token, req.body.amount);
  //     console.log("DATTAAA", data);
  //     res.send("Charged");
  //   } catch (e) {
  //     console.log(e);
  //     res.status(500);
  //   }
  // });

  return app;
};

module.exports = paymentApi;
