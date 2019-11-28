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
              <StyledH1>One Day Package</StyledH1>
              <div>
                <StyledH1>Attractions</StyledH1>
                <StyledH2>{c.OneDayPackage.attractions.name}</StyledH2>
                <StyledP>
                  Description: {c.OneDayPackage.attractions.description}
                </StyledP>
                <StyledP>Type: {c.OneDayPackage.attractions.type}</StyledP>
              </div>
              <div>
                <StyledH1>Bars</StyledH1>
                <StyledH2>{c.OneDayPackage.bars.name}</StyledH2>
                <StyledP>
                  Description: {c.OneDayPackage.bars.description}
                </StyledP>
                <a href={c.OneDayPackage.bars.website}>
                  Website: {c.OneDayPackage.bars.website}
                </a>
              </div>
              <div>
                <StyledH1>Restaurants</StyledH1>
                <StyledH2>{c.OneDayPackage.restaurants.name}</StyledH2>
                <StyledP>
                  Description: {c.OneDayPackage.restaurants.description}
                </StyledP>
                <StyledP>Genre: {c.OneDayPackage.restaurants.genre}</StyledP>
                <a href={c.OneDayPackage.restaurants.website}>
                  Website: {c.OneDayPackage.restaurants.website}
                </a>
              </div>
            </div>
            <div style={{ border: "solid 3px red" }}>
              <StyledH1>Two Day Package</StyledH1>
              <div>
                <StyledH1>Attractions</StyledH1>
                <StyledH2>{c.TwoDayPackage.attractions.name}</StyledH2>
                <StyledP>
                  Description: {c.TwoDayPackage.attractions.description}
                </StyledP>
                <StyledP>Type: {c.TwoDayPackage.attractions.type}</StyledP>
              </div>
              <div>
                <StyledH1>Bars</StyledH1>
                <StyledH2>{c.TwoDayPackage.bars.name}</StyledH2>
                <StyledP>
                  Description: {c.TwoDayPackage.bars.description}
                </StyledP>
                <a href={c.TwoDayPackage.bars.website}>
                  Website: {c.TwoDayPackage.bars.website}
                </a>
              </div>
              <div>
                <StyledH1>Restaurants</StyledH1>
                <StyledH2>{c.TwoDayPackage.restaurants.name}</StyledH2>
                <StyledP>
                  Description: {c.TwoDayPackage.restaurants.description}
                </StyledP>
                <StyledP>Genre: {c.TwoDayPackage.restaurants.genre}</StyledP>
                <a href={c.TwoDayPackage.restaurants.website}>
                  Website: {c.TwoDayPackage.restaurants.website}
                </a>
              </div>
            </div>
            <div style={{ border: "solid 3px red" }}>
              <StyledH1>Weekend Package</StyledH1>
              <div>
                <StyledH1>Attractions</StyledH1>
                <StyledH2>{c.WeekendPackage.attractions.name}</StyledH2>
                <StyledP>
                  Description: {c.WeekendPackage.attractions.description}
                </StyledP>
                <StyledP>Type: {c.WeekendPackage.attractions.type}</StyledP>
              </div>
              <div>
                <StyledH1>Bars</StyledH1>
                <StyledH2>{c.WeekendPackage.bars.name}</StyledH2>
                <StyledP>
                  Description: {c.WeekendPackage.bars.description}
                </StyledP>
                <a href={c.WeekendPackage.bars.website}>
                  Website: {c.WeekendPackage.bars.website}
                </a>
              </div>
              <div>
                <StyledH1>Restaurants</StyledH1>
                <StyledH2>{c.WeekendPackage.restaurants.name}</StyledH2>
                <StyledP>
                  Description: {c.WeekendPackage.restaurants.description}
                </StyledP>
                <StyledP>Genre: {c.WeekendPackage.restaurants.genre}</StyledP>
                <a href={c.WeekendPackage.restaurants.website}>
                  Website: {c.WeekendPackage.restaurants.website}
                </a>
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
