import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import { StyledH1, StyledH2, StyledP } from "../../styles/Elements";
import axios from "axios";
import { BASE_URL } from "../../config";
import Checkout from "../../Checkout";
import "../../styles/StripeCheckout.css";

function OneDayPackage(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const result = await axios.get(`${BASE_URL}/packages/`);
      setData(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  // const drop = e => {
  //   e.preventDefault();
  //   const card_id = e.dataTransfer.getData("card_id");

  //   const card = document.getElementById(card_id);
  //   card.style.display = "block";

  //   e.target.appendChild(card);
  // };

  // const dragOver = e => {
  //   e.preventDefault();
  // };
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
      <StyledH1>One Day Package</StyledH1>
      <div style={{ border: "solid 1px white" }}>
        <StyledH2>Attractions</StyledH2>
        {data.map(p => (
          <div key={p.packagesId}>
            <StyledH2>{p.attractions.name}</StyledH2>
            <StyledP>{p.attractions.description}</StyledP>
            <StyledP>{p.attractions.type}</StyledP>
          </div>
        ))}
      </div>
      <div style={{ border: "solid 1px white" }}>
        <StyledH2>Restaurants</StyledH2>
        {data.map(p => (
          <div key={p.packagesId}>
            <StyledH2>{p.restaurants.name}</StyledH2>
            <StyledP>{p.restaurants.description}</StyledP>
            <StyledP>{p.restaurants.genre}</StyledP>
            <a href={p.restaurants.website}>{p.restaurants.website}</a>
          </div>
        ))}
      </div>
      <div style={{ border: "solid 1px white" }}>
        <StyledH2>Restaurants</StyledH2>
        {data.map(p => (
          <div key={p.packagesId}>
            <StyledH2>{p.bars.name}</StyledH2>
            <StyledP>{p.bars.description}</StyledP>
            <a href={p.bars.website}>{p.bars.website}</a>
          </div>
        ))}
      </div>
      <div>
        <Checkout
          name="Your Tour"
          description="One Day Package"
          amount="9.99"
        />
      </div>
    </div>
  );
}

export default OneDayPackage;

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
