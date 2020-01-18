import React from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { StyledH1, StyledH2 } from "../styles/Text";
import { CityButton } from "../styles/Buttons";
// import { thisTypeAnnotation } from "@babel/types";

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

      await fetch("http://localhost:9900/api/day-package/", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ token, amount })
      });
    } catch (e) {
      throw e;
    }

    let lastURLSegment = window.location.href.substr(
      window.location.href.lastIndexOf("/") + 1
    );
    this.props.history.push(`/${lastURLSegment}`);
  };

  createOptions = () => {
    return {
      style: {
        base: {
          color: "white",
          backgroundColor: "#1f303b",
          width: "100%",
          fontSize: "1.6rem",
          fontWeight: "100",
          letterSpacing: "0.025em",
          "::placeholder": {
            color: "white"
          }
        },
        invalid: {
          color: "red"
        }
      }
    };
  };

  render() {
    return (
      <div>
        <StyledH1>Stripe Checkout</StyledH1>
        <form
          onSubmit={this.handleSubmit}
          style={{ width: "1000px", height: "1000px" }}
        >
          <StyledH2>Name</StyledH2>
          <input
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <StyledH2>Amount</StyledH2>
          <input
            type="text"
            value={this.state.amount}
            onChange={e => this.setState({ amount: e.target.value })}
          />
          <StyledH2>Card Information</StyledH2>

          <CardElement {...this.createOptions()} />

          <CityButton style={{ margin: "2%" }} className="btn">
            Purhcase Package
          </CityButton>
        </form>
      </div>
    );
  }
}

export default injectStripe(StripeForm);
