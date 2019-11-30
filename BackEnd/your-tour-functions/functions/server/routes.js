import * as express from "express";
import * as stripeLoader from "stripe";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();

router.get("api/hello", (req, res, next) => {
  res.json("world");
});

const stripe = new stripeLoader({ STRIPE_SECRET_KEY });

const charge = (token, amt) => {
  return stripe.charges.create({
    amount: amt * 100,
    currency: "usd",
    source: token,
    description: "Statement Description"
  });
};

router.post("/api/donate", async (req, res, next) => {
  try {
    let data = await charge(req.body.token.id, req.body.amount);
    console.log("THIS THE DATA", data);
    console.log("CHARGED");
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

export default router;
