import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { StyledH1, StyledP } from "../../../styles/Text";
import styled from "styled-components";
import firebase from "../../../firebase";
import StripeParent from "../../../STRIPE/StripeParent";

const Packages = props => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let urls = [];
  for (let i = 0; i < props.message.length; i++) {
    urls.push(props.message[i].id);
  }

  useEffect(() => {
    const useingCollections = async () => {
      for (let i = 0; i < urls.length; i++) {
        if (window.location.pathname === `/${urls[i]}`) {
          await firebase
            .firestore()
            .collection("newYorkCity")
            .doc("GX5nBGcDrSkGlEpj4Mkq")
            .collection("oneDayPackage")
            .doc(urls[i])
            .onSnapshot(snapshot => {
              let data = snapshot.data();
              setData(data);
              setIsLoading(false);
            });
        }
      }
    };
    useingCollections();
  }, [urls]);

  if (window.location.pathname.includes("stripe")) {
    return (
      <div>
        <StripeParent data={data} history={props.history} />
      </div>
    );
  }

  if (isLoading === true) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "rgb(26, 29, 33)",
          minHeight: "100vh",
          height: "100%",
          width: "100vw"
        }}
      >
        <Loader type="Triangle" color="blueViolet" height={200} width={200} />{" "}
        <StyledSpan>Loading...</StyledSpan>
      </div>
    );
  }

  return (
    <div>
      <StyledH1>{data.name}</StyledH1>
      <div className="attractions">
        <StyledP>{data.attractionOne.name}</StyledP>
      </div>
      <div className="attractions">
        <StyledP>{data.entertainmentOne.name}</StyledP>
      </div>
      <div className="attractions">
        <StyledP>{data.foodOne.name}</StyledP>
      </div>
    </div>
  );
};

export default Packages;

const StyledSpan = styled.span`
  font-size: 2rem;
  color: greenyellow;
`;
