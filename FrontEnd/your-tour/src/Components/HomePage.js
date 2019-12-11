import React from "react";

import styled from "styled-components";

//import Places from "./Places/Places";
//import Checkout from "../Checkout";

function HomePage() {
  return (
    <div>
      <PackageContainer>
        {/* <Places id="board-2" className="board" /> */}
      </PackageContainer>
    </div>
  );
}

export default HomePage;

const PackageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
  height: 100%;
`;
