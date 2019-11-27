import express from "express";
import stripeLoader from "stripe";
import dotenv from "dotenv";

const router = express.Router();
dotenv.config();

router.get("/api/hello", (req, res) => {
  res.json("World");
});

const stripe = new stripeLoader(process.env.STRIPE_SECRET_KEY);

const charge = (token, amt) => {
  return stripe.charges.create({
    amount: amt * 100,
    currency: "usd",
    source: "tok_visa",
    description: "Statement Description"
  });
};

router.post("/api/day-package/", async (req, res) => {
  try {
    console.log(req.body.token.id);
    let data = await charge(req.body.token.id, req.body.amount);

    console.log("DATTAAA", data);
    res.send("Charged");
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

export default router;
