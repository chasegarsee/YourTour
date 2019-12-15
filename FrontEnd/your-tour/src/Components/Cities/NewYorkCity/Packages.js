import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { StyledH1, StyledP } from "../../../styles/Text";
import firebase from "../../../firebase";

const Packages = props => {
  let paths = [
    "MyksmA6ebQRFhuON7Jq7",
    "U5ykXIoc7manAkV8vZ8c",
    "pV52NlSP1R0Wx249LbgY"
  ];
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const useingCollections = async () => {
      for (let i = 0; i < paths.length; i++) {
        if (window.location.pathname == `/${paths[i]}`) {
          console.log("PATHS BISH", paths[i]);

          await firebase
            .firestore()
            .collection("newYorkCity")
            .doc("GX5nBGcDrSkGlEpj4Mkq")
            .collection("oneDayPackage")
            .doc(paths[i])
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

  // const dataArr = useCollections();
  console.log("THE DATA", data);
  // // //dataArr.push(useCollections());
  // console.log("DATAAAAAAAAA", dataArr.attractionOne);

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
