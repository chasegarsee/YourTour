import React from "react";
import styled from "styled-components";
import Packages from "./Packages/Packages";
import Places from "./Places/Places";
import OneDayPackage from "./Packages/OneDayPackage";

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
