import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

//import STRIPE_PUBLISHABLE from "./constants/stripe";
import PAYMENT_SERVER_URL from "./constants/server";

const CURRENCY = "USD";

const fromDollarToCent = amount => parseInt(amount * 100);

const successPayment = data => {
  alert("Payment Successful. Get Paid, Son", data);
  console.log("Payment Successful. Get Paid, Son", data);
};

const errorPayment = data => {
  alert("Payment Error");
  console.log("Payment Big Oof", data);
};

const onToken = (amount, description) => token =>
  axios
    .post(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);
console.log(onToken);

const Checkout = ({ name, description, amount }) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={fromDollarToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey="pk_test_O8YuHblUd7NESPFeR1CSwhXb00KZuFrTRc"
    zipCode={true}
    email=""
    allowRememberMe
  />
);

export default Checkout;
