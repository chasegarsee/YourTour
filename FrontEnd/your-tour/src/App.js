import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "./Components/Auth0/Auth0";
import "./App.css";
import Packages from "./Components/Packages/Packages";
import Places from "./Components/Places/Places";
import NavBar from "./Components/NavBar";
import styled from "styled-components";
import HomePage from "./Components/HomePage";
import { StyledH1 } from "./styles/Elements";

function App(props) {
  const { loading } = useAuth0();
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {/* <Router> */}
      <NavBar />
      <Header>
        <StyledH1>Please Log In</StyledH1>
      </Header>
      {/* <Switch>
          <Route exact path="/" />
          <Route path="/home" component={HomePage} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;

{
  /* <NavBar />
<PackageContainer>
<Packages id="board-1" className="board" />
<Places id="board-2" className="board" />
</PackageContainer> */
}

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
