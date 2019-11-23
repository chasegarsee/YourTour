import React, { useState, useEffect } from "react";
import { StyledH1 } from "../../styles/Elements";
import axios from "axios";
import { BASE_URL } from "../../config";
import Checkout from "../../Checkout";

function OneDayPackage(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${BASE_URL}/packages/`);
      setData(result.data);
    };
    fetchData();
  }, []);
  console.log("DIS DA Package DATA", data);
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
  return (
    <div
    //style={{ width: "500px", height: "100vh" }}
    //id={props.id}
    //className={props.className}
    //onDrop={drop}
    //onDragOver={dragOver}
    >
      <StyledH1>One Day Package</StyledH1>
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
