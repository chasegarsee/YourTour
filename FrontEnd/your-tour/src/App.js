import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "./Components/Auth0/Auth0";
import "./App.css";
import Packages from "./Components/Packages/Packages";
import Places from "./Components/Places/Places";
import NavBar from "./Components/NavBar";
import styled from "styled-components";
import HomePage from "./Components/HomePage";
import { StyledH1 } from "./styles/Elements";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import history from "./utils/history";
import PrivateRoute from "./Components/PrivateRoute";

function App(props) {
  const { loading, user } = useAuth0();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

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
            <PrivateRoute path="/home" component={HomePage} />
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

const Header = styled.header`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PackageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const StyledSpan = styled.span`
  font-size: 2rem;
  color: greenyellow;
`;
