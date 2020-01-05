import React from "react";

import styled from "styled-components";
import { StyledH1, StyledH2, StyledP } from "../../styles/Text";
import { CityButton } from "../../styles/Buttons";
import "../../styles/StripeCheckout.css";
import boston from "../Assets/Boston_night.jpg";
import nashville from "../Assets/Nashville_night.jpg";
import newYork from "../Assets/NY__night.jpg";

// import Nashville from "./Nashville/Nashville";

const cities = ["", newYork, nashville, boston];

function Cities(props) {
  console.log("PROOPS", props.data);

  const items = props.data.map(i => (
    <div key={i[0].cityId} style={{ width: "33%" }}>
      <StyledCard2>
        <StyledImg src={cities[i[0].cityId]} className="images" />
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "0rem 1.5rem"
        }}
      >
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;
