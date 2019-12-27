import React, { Component } from "react";
//import { Router, Route, Switch } from "react-router-dom";
import { Elements, StripeProvider } from "react-stripe-elements";
import StripeForm from "./StripeForm";

class StripeParent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StripeProvider apiKey="pk_test_xD7MdD7FTPkqMIYlsq5vFvi300kToh9tFv">
        <div className="example" style={{ width: "100%", margin: "0" }}>
          <Elements>
            <StripeForm history={this.props.history} />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default StripeParent;
