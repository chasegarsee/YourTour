import React, { useState, useEffect } from "react";
import { BASE_URL } from "../config";
import axios from "axios";

import firebase from "../firebase";

const NewYorkCityOneDayPackageForm = props => {
  const [name, setName] = useState("");
  const [attraction, setAttraction] = useState("");
  const [entertainment, setEntertainment] = useState("");
  const [food, setFood] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    firebase
      .firestore()
      .collection("newYorkCity")
      .doc("GX5nBGcDrSkGlEpj4Mkq")
      .collection("oneDayPackage")
      .add({
        name,
        attractionOne: {
          attraction
        },
        entertainmentOne: {
          entertainment
        },
        foodOne: {
          food
        }
      });
    // .then(() => {
    //   setName(""), setAttraction(""), setEntertainment(""), setFood("");
    // });
  }

  return (
    <div>
      <div>
        <h1>Add New Package</h1>
      </div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        ></input>
        <input
          type="text"
          value={attraction}
          onChange={e => setAttraction(e.target.value)}
        ></input>
        <input
          type="text"
          value={entertainment}
          onChange={e => setEntertainment(e.target.value)}
        ></input>
        <input
          type="text"
          value={food}
          onChange={e => setFood(e.target.value)}
        ></input>
        <button onClick={submitHandler}>Add</button>
      </form>
    </div>
  );
};

export default NewYorkCityOneDayPackageForm;
