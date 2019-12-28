import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "./config";
import Loader from "react-loader-spinner";
import { Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "./Components/Auth0/Auth0";
import "./styles/App.css";
import NavBar from "./Components/NavBar";
import styled from "styled-components";
import HomePage from "./Components/HomePage";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import history from "./utils/history";
import StripeParent from "./STRIPE/StripeParent";
import Cities from "./Components/Cities/cities";
import Nashville from "./Components/Cities/Nashville/Nashville";
import NewYork from "./Components/Cities/NewYorkCity/NewYork";
import Boston from "./Components/Cities/Boston/Boston";
import newYorkCityOneDayPackageForm from "./Components/Cities/NewYorkCity/newYorkCityOneDayPackageForm";
import Packages from "./Components/Cities/NewYorkCity/Packages";

// import firebase from "./firebase";

// import CheckoutForm from "./STRIPE/CheckoutForm";

//import Checkout from "./Checkout";

// import PrivateRoute from "./Components/PrivateRoute";

function App(props) {
  // const { loading, user } = useAuth0();
  // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [matchingURL, setMatchingUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const allResults = [];
      const newYork = await axios.get(`${BASE_URL}/new-york-city/`);
      const nashville = await axios.get(`${BASE_URL}/nashville/`);
      const boston = await axios.get(`${BASE_URL}/boston/`);
      allResults.push(newYork, nashville, boston);
      const finalDataModel = allResults.map(i => {
        return i.data;
      });
      setData(finalDataModel);
      console.log(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const { loading } = useAuth0();

  ///////////////////////////////////////////////
  const [message, setMessage] = useState([]);

  const callbackFunction = childData => {
    setMessage(childData);
  };

  console.log("DA MESSAGE", message);

  let URLS = [];

  {
    message.map(m => {
      URLS.push(m.id);
    });
  }

  console.log("URLS", URLS);

  // for (let i = 0; i < message.id.length; i++) {
  //   correctPath = message.id[i];
  // }
  ///////////////////////////////////////////////
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "rgb(26, 29, 33)",
          height: "100%",
          width: "100vw"
        }}
      >
        <Loader type="Triangle" color="blueViolet" height={200} width={200} />{" "}
        <StyledSpan>Loading...</StyledSpan>
      </div>
    );
  }

  if (!loading) {
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
              <Route
                path="/cities"
                render={props => (
                  <Cities
                    {...props}
                    data={data}
                    parentCallback={callbackFunction}
                  />
                )}
              />

              {/* ///// NASHVILLE ROUTES ///// */}
              <Route exact path="/nashville" component={Nashville} />
              {/* ///// NEW YORK CITY ROUTES ///// */}
              <Route
                exact
                path="/new-york-city"
                render={props => (
                  <NewYork {...props} parentCallback={callbackFunction} />
                )}
              />
              <Route
                exact
                path="/new-york-city/add-one-day-package"
                component={newYorkCityOneDayPackageForm}
              />

              <Route
                exact
                path={message.id}
                render={props => (
                  <Packages {...props} data={data} message={message} />
                )}
              />

              {/* ///// BOSTON ROUTES ROUTES ///// */}
              <Route exact path="/boston" component={Boston} />
              <Route path="/search-packages" component={HomePage} />
              <Route
                path="/new-york-city/stripe/MyksmA6ebQRFhuON7Jq7"
                component={StripeParent}
              />
              {/* <PrivateRoute path="/search-packages" component={HomePage} /> */}
            </Switch>
          </StyledDiv>
        </Router>
      </div>
    );
  }
}

export default App;

const StyledDiv = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-evenly;
`;

const StyledSpan = styled.span`
  font-size: 2rem;
  color: greenyellow;
`;
