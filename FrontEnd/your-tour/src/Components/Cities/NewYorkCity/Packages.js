import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { StyledH1, StyledP } from "../../../styles/Text";
import firebase from "../../../firebase";

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
        if (window.location.pathname == `/${urls[i]}`) {
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
  }, []);

  if (isLoading == true) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "rgb(26, 29, 33)",
          height: "100vh",
          width: "100vw"
        }}
      >
        <Loader type="Triangle" color="blueViolet" height={200} width={200} />{" "}
        <StyledP>Loading...</StyledP>
      </div>
    );
  }

  return (
    <div>
      <h1></h1>
      <StyledP>{data.name}</StyledP>
      <StyledP>{data.attractionOne.name}</StyledP>
    </div>
  );
};

export default Packages;
