import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import { StyledH1, StyledH2, StyledP } from "../../styles/Elements";
import axios from "axios";
import { BASE_URL } from "../../config";
import Checkout from "../../Checkout";
import "../../styles/StripeCheckout.css";

function Cities(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const result = await axios.get(`${BASE_URL}/cities/`);
      setData(result.data);
      console.log(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <StyledLoadingDiv>
        <Loader type="Triangle" color="blueViolet" height={200} width={200} />
        <StyledSpan>Loading...</StyledSpan>
      </StyledLoadingDiv>
    );
  }
  return (
    <div>
      <h1>Cities</h1>
      {data.map(c => (
        <div key={c.citiesId}>
          <StyledCard2>
            <StyledH2>City: {c.City}</StyledH2>
          </StyledCard2>
          <div style={{ display: "flex" }}>
            <div style={{ border: "solid 3px red" }}>
              <StyledH2>One Day Package</StyledH2>
              <div>
                <StyledH2>Attractions</StyledH2>
                <StyledH2>{c.OneDayPackage.attractions.name}</StyledH2>
              </div>
              <div>
                <StyledH2>Bars</StyledH2>
                <StyledH2>{c.OneDayPackage.bars.name}</StyledH2>
              </div>
              <div>
                <StyledH2>Restaurants</StyledH2>
                <StyledH2>{c.OneDayPackage.restaurants.name}</StyledH2>
              </div>
            </div>
            <div style={{ border: "solid 3px red" }}>
              <StyledH2>Two Day Package</StyledH2>
              <div>
                <StyledH1>Attractions</StyledH1>
                <StyledH2>{c.TwoDayPackage.attractions.name}</StyledH2>
              </div>
              <div>
                <StyledH2>Bars</StyledH2>
                <StyledH2>{c.TwoDayPackage.bars.name}</StyledH2>
              </div>
              <div>
                <StyledH2>Restaurants</StyledH2>
                <StyledH2>{c.TwoDayPackage.restaurants.name}</StyledH2>
              </div>
            </div>
            <div style={{ border: "solid 3px red" }}>
              <StyledH2>Weekend Package</StyledH2>
              <div>
                <StyledH2>Attractions</StyledH2>
                <StyledH2>{c.WeekendPackage.attractions.name}</StyledH2>
              </div>
              <div>
                <StyledH2>Bars</StyledH2>
                <StyledH2>{c.WeekendPackage.bars.name}</StyledH2>
              </div>
              <div>
                <StyledH2>Restaurants</StyledH2>
                <StyledH2>{c.WeekendPackage.restaurants.name}</StyledH2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cities;

const StyledLoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const StyledSpan = styled.span`
  font-size: 2rem;
  color: greenyellow;
`;

const StyledCard = styled.div`
  border-bottom: solid 1px white;
`;

const StyledCard2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
