import React from "react";

import styled from "styled-components";
import { StyledH1, StyledH2, StyledP } from "../../styles/Text";
import { CityButton } from "../../styles/Buttons";
import "../../styles/StripeCheckout.css";
// import Nashville from "./Nashville/Nashville";

function Cities(props) {
  console.log("PROOOPS DATA", props.data);
  const items = props.data.map(i => (
    <div key={i[0].cityId}>
      <StyledCard2>
        <StyledH2 style={{ margin: "10px" }}>{i[0].cityName}</StyledH2>
        <StyledP>{i[0].description}</StyledP>
        <CityButton>
          <a href={i[0].hyperlink}>See Packages</a>
        </CityButton>
      </StyledCard2>
    </div>
  ));

  return (
    <StyledCard>
      <StyledH1 style={{ width: "100vw" }}>Cities</StyledH1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {items}
      </div>
    </StyledCard>
  );
}

export default Cities;

const StyledCard = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StyledCard2 = styled.div`
  width: 400px;
  height: 400px;
  border: solid 1px white;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;
