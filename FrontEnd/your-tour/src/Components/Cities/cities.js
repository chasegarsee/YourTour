import React from "react";

import styled from "styled-components";
import { StyledH1, StyledH2, StyledP } from "../../styles/Text";
import { CityButton } from "../../styles/Buttons";
import "../../styles/StripeCheckout.css";
// import Nashville from "./Nashville/Nashville";

function Cities(props) {
  console.log(props.data);
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

{
  /* <div style={{ display: "flex" }}>
        <div style={{ border: "solid 1px red" }}>
          <StyledH1>One Day Package</StyledH1>
          <div>
            <StyledH1>Attractions</StyledH1>
            <StyledH2>{i.OneDayPackage.attractions.name}</StyledH2>
            <StyledP>
              Description: {i.OneDayPackage.attractions.description}
            </StyledP>
            <StyledP>Type: {i.OneDayPackage.attractions.type}</StyledP>
          </div>
          <div>
            <StyledH1>Bars</StyledH1>
            <StyledH2>{i.OneDayPackage.bars.name}</StyledH2>
            <StyledP>Description: {i.OneDayPackage.bars.description}</StyledP>
            <a href={i.OneDayPackage.bars.website}>
              Website: {i.OneDayPackage.bars.website}
            </a>
          </div>
          <div>
            <StyledH1>Restaurants</StyledH1>
            <StyledH2>{i.OneDayPackage.restaurants.name}</StyledH2>
            <StyledP>
              Description: {i.OneDayPackage.restaurants.description}
            </StyledP>
            <StyledP>Genre: {i.OneDayPackage.restaurants.genre}</StyledP>
            <a href={i.OneDayPackage.restaurants.website}>
              Website: {i.OneDayPackage.restaurants.website}
            </a>
          </div>
        </div>
        <div style={{ border: "solid 1px red" }}>
          <StyledH1>Two Day Package</StyledH1>
          <div>
            <StyledH1>Attractions</StyledH1>
            <StyledH2>{i.TwoDayPackage.attractions.name}</StyledH2>
            <StyledP>
              Description: {i.TwoDayPackage.attractions.description}
            </StyledP>
            <StyledP>Type: {i.TwoDayPackage.attractions.type}</StyledP>
          </div>
          <div>
            <StyledH1>Bars</StyledH1>
            <StyledH2>{i.TwoDayPackage.bars.name}</StyledH2>
            <StyledP>Description: {i.TwoDayPackage.bars.description}</StyledP>
            <a href={i.TwoDayPackage.bars.website}>
              Website: {i.TwoDayPackage.bars.website}
            </a>
          </div>
          <div>
            <StyledH1>Restaurants</StyledH1>
            <StyledH2>{i.TwoDayPackage.restaurants.name}</StyledH2>
            <StyledP>
              Description: {i.TwoDayPackage.restaurants.description}
            </StyledP>
            <StyledP>Genre: {i.TwoDayPackage.restaurants.genre}</StyledP>
            <a href={i.TwoDayPackage.restaurants.website}>
              Website: {i.TwoDayPackage.restaurants.website}
            </a>
          </div>
        </div>
        <div style={{ border: "solid 1px red" }}>
          <StyledH1>Weekend Package</StyledH1>
          <div>
            <StyledH1>Attractions</StyledH1>
            <StyledH2>{i.WeekendPackage.attractions.name}</StyledH2>
            <StyledP>
              Description: {i.WeekendPackage.attractions.description}
            </StyledP>
            <StyledP>Type: {i.WeekendPackage.attractions.type}</StyledP>
          </div>
          <div>
            <StyledH1>Bars</StyledH1>
            <StyledH2>{i.WeekendPackage.bars.name}</StyledH2>
            <StyledP>Description: {i.WeekendPackage.bars.description}</StyledP>
            <a href={i.WeekendPackage.bars.website}>
              Website: {i.WeekendPackage.bars.website}
            </a>
          </div>
          <div>
            <StyledH1>Restaurants</StyledH1>
            <StyledH2>{i.WeekendPackage.restaurants.name}</StyledH2>
            <StyledP>
              Description: {i.WeekendPackage.restaurants.description}
            </StyledP>
            <StyledP>Genre: {i.WeekendPackage.restaurants.genre}</StyledP>
            <a href={i.WeekendPackage.restaurants.website}>
              Website: {i.WeekendPackage.restaurants.website}
            </a>
          </div>
        </div>
      </div> */
}
