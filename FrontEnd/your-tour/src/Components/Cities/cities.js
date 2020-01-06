import React from "react";

import styled from "styled-components";
import { StyledH1, StyledH2, StyledP } from "../../styles/Text";
import { CityButton } from "../../styles/Buttons";
import "../../styles/StripeCheckout.css";
/* === Night  === */
import bostonNight from "../Assets/Boston_night.jpg";
import nashvilleNight from "../Assets/Nashville_night.jpg";
import newYorkNight from "../Assets/NY__night.jpg";

/* === Sunset === */

import bostonSunset from "../Assets/Boston_sunset.jpg";
import nashvilleSunset from "../Assets/Nashville_sunset.jpg";
import newYorkSunset from "../Assets/NY_sunset.jpg";

/* === Day === */

import boston from "../Assets/Boston.jpg";
import nashville from "../Assets/Nashville.jpg";
import newYork from "../Assets/NY_illustration.jpg";

let d = new Date();
function getTimes(t) {
  let currentTimeOfDay = [];
  if (t >= 15 && t <= 18) {
    let sunset = ["", newYorkSunset, nashvilleSunset, bostonSunset];
    currentTimeOfDay = sunset;
  } else if ((t >= 19 && t <= 23) || (t >= 0 && t <= 4)) {
    let night = ["", newYorkNight, nashvilleNight, bostonNight];
    currentTimeOfDay = night;
  } else if (t >= 5 && t <= 14) {
    let day = ["", newYork, nashville, boston];
    currentTimeOfDay = day;
  }
  return currentTimeOfDay;
}
let cities = getTimes(d.getHours());

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
