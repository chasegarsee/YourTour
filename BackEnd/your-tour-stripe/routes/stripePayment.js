// import stripeLoader from "stripe";

// const stripe = new stripeLoader(process.env.STRIPE_SECRET_KEY);

// const charge = (token, amt) => {
//   return stripe.charges.create({
//     amount: amt * 100,
//     currency: "usd",
//     source: token,
//     description: "Statement Description"
//   });
// };

// router.post("/api/day-package", (req, res) => {
//   try {
//       let data = await charge(req.body.token.id, req.body.amount)
//       console.log("DATTAAA", data)
//       res.send("Charged")
//   } catch (e) {
//     console.log(e);
//     res.status(500);
//   }
// });
