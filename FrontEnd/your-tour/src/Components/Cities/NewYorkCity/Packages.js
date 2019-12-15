import React, { useState, useEffect } from "react";
import { StyledH1, StyledP } from "../../../styles/Text";
import firebase from "../../../firebase";

const Packages = props => {
  let paths = [
    "MyksmA6ebQRFhuON7Jq7",
    "U5ykXIoc7manAkV8vZ8c",
    "pV52NlSP1R0Wx249LbgY"
  ];
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  function useCollections() {
    useEffect(() => {
      for (let i = 0; i < paths.length; i++) {
        if (window.location.pathname == `/${paths[i]}`) {
          console.log("PATHS BISH", paths[i]);

          setIsLoading(true);
          firebase
            .firestore()
            .collection("newYorkCity")
            .doc("GX5nBGcDrSkGlEpj4Mkq")
            .collection("oneDayPackage")
            .doc(paths[i])
            .onSnapshot(snapshot => {
              let data = snapshot.data();
              let attractionOne = snapshot.data().attractionOne;
              let entertainmentOne = snapshot.data().entertainmentOne;
              let foodOne = snapshot.data().foodOne;
              setData(attractionOne, entertainmentOne, foodOne);
              setIsLoading(false);
            });
        }
      }
    }, []);
    return data;
  }

  const dataArr = useCollections();
  console.log("THE DATA", dataArr.name);
  // //dataArr.push(useCollections());
  // console.log("DATAAAAAAAAA", dataArr.attractionOne);

  // let attractionData = [];
  // attractionData.push(dataArr.attractionOne);
  // console.log("ADATA", attractionData);

  return (
    <div>
      <h1>hello</h1>
      <StyledP>{dataArr.name}</StyledP>
    </div>
  );
};

export default Packages;
