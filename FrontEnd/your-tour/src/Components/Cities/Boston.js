import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { BASE_URL } from "../../config";
import styled from "styled-components";
import { StyledH1, StyledH2, StyledP } from "../../styles/Text";

export default function Boston(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const result = await axios.get(`${BASE_URL}/boston/one-day-package`);
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
      <h1>New York City</h1>
      {data.map(p => (
        <StyledCard2 key={p.bostonId}>
          <StyledH1>{p.name}</StyledH1>
          <StyledH2>Name: {p.attractionOne.name}</StyledH2>
        </StyledCard2>
      ))}
    </div>
  );
}

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
