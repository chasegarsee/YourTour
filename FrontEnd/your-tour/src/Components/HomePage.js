import React from "react";
import { BrowserRouter as Route } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";
import Packages from "./Packages/Packages";
import Places from "./Places/Places";

function HomePage() {
  return (
    <div>
      <PackageContainer>
        <Packages id="board-1" className="board" />
        <Places id="board-2" className="board" />
        {/* <Route path="/one-day-package" component={Packages} />
        <Route path="/places" component={Places} /> */}
      </PackageContainer>
    </div>
  );
}

export default HomePage;

const PackageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
`;
