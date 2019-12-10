import React, { useState, useEffect } from "react";
import { BASE_URL } from "../config";
import axios from "axios";

import firebase from "../firebase";

const NewYorkCityOneDayPackageForm = props => {
  const [packageName, setPackageName] = useState("");
  const [packageDescription, setPackageDescription] = useState("");

  const [a1Name, setA1Name] = useState("");
  const [a1Address, setA1Address] = useState("");
  const [a1Description, setA1Description] = useState("");
  const [a1Website, setA1Website] = useState("");

  const [e1Name, setE1Name] = useState("");
  const [e1Address, setE1Address] = useState("");
  const [e1Description, setE1Description] = useState("");
  const [e1Website, setE1Website] = useState("");

  const [f1Name, setF1Name] = useState("");
  const [f1Address, setF1Address] = useState("");
  const [f1Description, setF1Description] = useState("");
  const [f1Website, setF1Website] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    firebase
      .firestore()
      .collection("newYorkCity")
      .doc("GX5nBGcDrSkGlEpj4Mkq")
      .collection("oneDayPackage")
      .add({
        packageDescription,
        name: packageName,
        attractionOne: {
          name: a1Address
        },
        entertainmentOne: {
          name: e1Name
        },
        foodOne: {
          name: f1Name
        }
      })
      .then(() => {
        setPackageName("");
        setPackageDescription("");

        setA1Name("");
        setA1Address("");
        setA1Description("");
        setA1Website("");

        setE1Name("");
        setE1Address("");
        setE1Description("");
        setE1Website("");

        setF1Name("");
        setF1Address("");
        setF1Description("");
        setF1Website("");
      });
  }

  return (
    <div>
      <div>
        <h1>Add New Package</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div>
          {/* ///////////// Package Details //////////////           */}
          <input
            type="text"
            value={packageName}
            onChange={e => setPackageName(e.target.value)}
            placeholder="Package Name"
          ></input>
          <input
            type="text"
            value={packageDescription}
            onChange={e => setPackageDescription(e.target.value)}
            placeholder="Package Description"
          ></input>
          {/* ///////////// Package Details //////////////           */}
          {/* ///////////// Attraction Details //////////////           */}
        </div>
        <div>
          <input
            type="text"
            value={a1Name}
            onChange={e => setA1Name(e.target.value)}
            placeholder="Freedom Tower"
          />
          <input
            type="text"
            value={a1Description}
            onChange={e => setA1Description(e.target.value)}
            placeholder="One World Trade Center"
          />
          <input
            type="text"
            value={a1Address}
            onChange={e => setA1Address(e.target.value)}
            placeholder="e.g. 285 Fulton St, New York, NY 10007"
          />
          <input
            type="text"
            value={a1Website}
            onChange={e => setA1Website(e.target.value)}
            placeholder="e.g. https://www.wtc.com/about/buildings/1-world-trade-center"
          />
        </div>
        {/* ///////////// Attraction Details //////////////           */}
        {/* ///////////// Entertainment Details //////////////           */}
        <div>
          <input
            type="text"
            value={e1Name}
            onChange={e => setE1Name(e.target.value)}
            placeholder="Daniel"
          />
          <input
            type="text"
            value={e1Description}
            onChange={e => setE1Description(e.target.value)}
            placeholder="Daniel Boulud's elegant French flagship where jackets are required & expense accounts come in handy."
          />
          <input
            type="text"
            value={e1Address}
            onChange={e => setE1Address(e.target.value)}
            placeholder="e.g. 60 E 65th St, New York, NY 10065"
          />
          <input
            type="text"
            value={e1Website}
            onChange={e => setE1Website(e.target.value)}
            placeholder="e.g. danielnyc.com"
          />
        </div>
        {/* ///////////// Entertainment Details //////////////           */}
        <div>
          <input
            type="text"
            value={f1Name}
            onChange={e => setF1Name(e.target.value)}
            placeholder="Time Square"
          />
          <input
            type="text"
            value={f1Description}
            onChange={e => setF1Description(e.target.value)}
            placeholder="The Theater District is the teeming heart of Midtown West."
          />
          <input
            type="text"
            value={f1Address}
            onChange={e => setF1Address(e.target.value)}
            placeholder="e.g. Manhattan, NY 10036"
          />
          <input
            type="text"
            value={f1Website}
            onChange={e => setF1Website(e.target.value)}
            placeholder="e.g. https://www.timessquarenyc.org/"
          />
        </div>
        <button onClick={submitHandler}>Add</button>
      </form>
    </div>
  );
};

export default NewYorkCityOneDayPackageForm;
