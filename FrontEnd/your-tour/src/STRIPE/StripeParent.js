import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";

class StripeParent extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_xD7MdD7FTPkqMIYlsq5vFvi300kToh9tFv">
        <div className="example">
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default StripeParent;
