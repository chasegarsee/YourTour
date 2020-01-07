import React, { useState, useEffect } from "react";

import Loader from "react-loader-spinner";
import "./nyc.scss";

import styled from "styled-components";
import { StyledH1, StyledH2, StyledP } from "../../../styles/Text";
import firebase from "../../../firebase";

const NewYork = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  function useCollections() {
    useEffect(() => {
      //unsubscribe callback
      setIsLoading(true);
      firebase
        .firestore()
        .collection("newYorkCity")
        .doc("GX5nBGcDrSkGlEpj4Mkq")
        .collection("oneDayPackage")
        .onSnapshot(snapshot => {
          console.log("OH SNAPSHOT", snapshot);
          const newData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setData(newData);
          setIsLoading(false);
          console.log(newData);
        });
    }, []);
    return data;
  }

  const dataArr = useCollections();
  const sendData = () => {
    props.parentCallback(data);
  };
  sendData();

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
      <StyledH1>New York City</StyledH1>
      <div style={{ display: "flex" }}>
        {dataArr.map(p => (
          <StyledCard2 key={p.id}>
            <StyledH1 style={{ margin: "2%" }}>{p.name}</StyledH1>
            <StyledH2 style={{ margin: "2%" }}>{p.packageDescription}</StyledH2>

            <a className="btn" href={`/new-york-city/stripe/${p.id}`}>
              Purchase Package
            </a>
          </StyledCard2>
        ))}
      </div>

      <a className="btn" href="/new-york-city/add-one-day-package">
        <i className="fas fa-plus"></i>
      </a>
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

const StyledCard2 = styled.div`
  margin: 10px;
  width: 100%;
  height: 100%px;
  box-shadow: 11px 10px 10px 1px #00000055;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px;
`;
