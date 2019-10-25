import React from "react";
import "./App.css";
import Packages from "./Components/Packages/Packages";
import Places from "./Components/Places/Places";
import NavBar from "./Components/NavBar";
import styled from "styled-components";

function App(props) {
  return (
    <div className="App">
      <NavBar />
      <PackageContainer>
        <Packages id="board-1" className="board" />
        <Places id="board-2" className="board" />
      </PackageContainer>
    </div>
  );
}

export default App;

const PackageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
