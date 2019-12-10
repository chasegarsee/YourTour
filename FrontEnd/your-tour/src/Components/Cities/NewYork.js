import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { BASE_URL } from "../../config";
import styled from "styled-components";
import { StyledH1, StyledH2, StyledP } from "../../styles/Text";
import firebase from "../../firebase";

function useTimes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //unsubscribe callback
    // setIsLoading(true);
    firebase
      .firestore()
      .collection("newYorkCity")
      .doc("GX5nBGcDrSkGlEpj4Mkq")
      .collection("oneDayPackage")
      .onSnapshot(snapshot => {
        const newData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setData(newData);
        console.log(newData);
      });
  }, []);
  return data;
}

const NewYork = props => {
  const data = useTimes();
  const [isLoading, setIsLoading] = useState(false);

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
      <div style={{ display: "flex" }}>
        {data.map(p => (
          <StyledCard2 key={p.id}>
            <StyledH1>{p.name}</StyledH1>
            <StyledH2>{p.packageDescription}</StyledH2>
          </StyledCard2>
        ))}
      </div>
      <button>
        <a href="/new-york-city/add-one-day-package">
          <i className="fas fa-plus"></i>
        </a>
      </button>
    </div>
  );
};

export default NewYork;

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
  width: 400px;
  height: 400px;
  border: solid 1px white;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px;
`;
