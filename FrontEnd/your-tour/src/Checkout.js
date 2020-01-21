import React, { useState } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import "./styles/StripeCheckout.css";

import STRIPE_PUBLISHABLE from "./constants/stripe";
import PAYMENT_SERVER_URL from "./constants/server";

const CURRENCY = "USD";

const fromDollarToCent = amount => parseInt(amount * 100);

const successPayment = data => {
  console.log("Payment Successful.", data);
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

const Checkout = ({ name, description, amount }) => (
  <StripeCheckout
    success={successPayment}
    failure={errorPayment}
    className="stripe-checkout"
    name={name}
    image="https://i.ibb.co/ScyvNbX/Screen-Shot-2019-11-23-at-4-02-32-PM.png"
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
