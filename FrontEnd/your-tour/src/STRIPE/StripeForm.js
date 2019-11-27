import React from "react";
import {
  CardElement,
  injectStripe,
  ReactStripeElements
} from "react-stripe-elements";
import { thisTypeAnnotation } from "@babel/types";

class StripeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    try {
      let { token } = await this.props.stripe.createToken({
        name: this.state.name
      });
      let amount = this.state.amount;

      await fetch("http://localhost:8800/api/day-package", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ token, amount })
      });
    } catch (e) {
      throw e;
    }
    console.log("test");
  };

  render() {
    return (
      <div>
        <h1>Stripe Checkout</h1>
        <form onSubmit={this.handleSubmit}>
          <h2>Name</h2>
          <input
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <h2>Amount</h2>
          <input
            type="text"
            value={this.state.amount}
            onChange={e => this.setState({ amount: e.target.value })}
          />
          <h2>Card Information</h2>
          <CardElement />
          <button>Charge me!</button>
        </form>
      </div>
    );
  }
}

export default injectStripe(StripeForm);
