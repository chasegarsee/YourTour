import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "./Components/Auth0/Auth0";
import "./styles/App.css";
import NavBar from "./Components/NavBar";
import styled from "styled-components";
import HomePage from "./Components/HomePage";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import history from "./utils/history";
import StripeParent from "./STRIPE/StripeParent";
import Cities from "./Components/Cities/cities";
import Nashville from "./Components/Cities/Nashville/Nashville";
import NewYork from "./Components/Cities/NewYorkCity/NewYork";
import Boston from "./Components/Cities/Boston/Boston";
import newYorkCityOneDayPackageForm from "./Components/Cities/NewYorkCity/newYorkCityOneDayPackageForm";

import firebase from "./firebase";

// import CheckoutForm from "./STRIPE/CheckoutForm";

//import Checkout from "./Checkout";

// import PrivateRoute from "./Components/PrivateRoute";

function App(props) {
  // const { loading, user } = useAuth0();
  // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const { loading } = useAuth0();

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "rgb(26, 29, 33)",
          height: "100vh",
          width: "100vw"
        }}
      >
        <Loader type="Triangle" color="blueViolet" height={200} width={200} />{" "}
        <StyledSpan>Loading...</StyledSpan>
      </div>
    );
  }

  return (
    <div className="App">
      <Router history={history}>
        <NavBar />
        <StyledDiv>
          {/* <Packages id="board-1" className="board" />
          <Places id="board-2" className="board" /> */}
          {/* <code>{JSON.stringify(user, null, 2)}</code> */}
          <Switch>
            <Route exact path="/" />
            <Route path="/cities" component={Cities} />

            <Route exact path="/nashville" component={Nashville} />
            <Route exact path="/new-york-city" component={NewYork} />
            <Route
              exact
              path="/new-york-city/add-one-day-package"
              component={newYorkCityOneDayPackageForm}
            />
            <Route exact path="/boston" component={Boston} />

            <Route path="/search-packages" component={HomePage} />
            <Route path="/stripe" component={StripeParent} />
            {/* <PrivateRoute path="/search-packages" component={HomePage} /> */}
          </Switch>
        </StyledDiv>
      </Router>
    </div>
  );
}

export default App;

const StyledDiv = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-evenly;
`;

// const Header = styled.header`
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const PackageContainer = styled.div`
//   display: flex;
//   justify-content: space-evenly;
// `;

const StyledSpan = styled.span`
  font-size: 2rem;
  color: greenyellow;
`;
