import React, { useState } from "react";
// import { BASE_URL } from "../../../config";
// import axios from "axios";
import "./forms.css";
import firebase from "../../../firebase";
import { StyledH1 } from "../../../styles/Text";
import { Alert, Button } from "react-bootstrap";

const NewYorkCity1DayPackageForm = props => {
  // const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(true);
  const [attractions, setAttractions] = useState([]);
  const [packageName, setPackageName] = useState("");
  const [packageDescription, setPackageDescription] = useState("");

  const [a1Name, setAName] = useState("");
  const [a1Address, setAAddress] = useState("");
  const [a1Description, setADescription] = useState("");
  const [a1Website, setAWebsite] = useState("");

  const [aName0, setAName0] = useState("");
  const [aAddress0, setAAddress0] = useState("");
  const [aDescription0, setADescription0] = useState("");
  const [aWebsite0, setAWebsite0] = useState("");

  const [e1Name, setE1Name] = useState("");
  const [e1Address, setE1Address] = useState("");
  const [e1Description, setE1Description] = useState("");
  const [e1Website, setE1Website] = useState("");

  const [f1Name, setF1Name] = useState("");
  const [f1Address, setF1Address] = useState("");
  const [f1Description, setF1Description] = useState("");
  const [f1Website, setF1Website] = useState("");

  function addPointCategories(e) {
    e.preventDefault();
    let count = 0;
    setAttractions([...attractions, (count = attractions.length)]);
  }

  // console.log(
  //   "ATTRS",
  //   attractions.map(i => i)
  // );

  function submitHandler(e) {
    e.preventDefault();

    firebase
      .firestore()
      .collection("newYorkCity")
      .doc("GX5nBGcDrSkGlEpj4Mkq")
      .collection("oneDayPackage")
      .add({
        packageDescription: packageDescription,
        name: packageName,
        attraction1: {
          name: a1Name,
          address: a1Address,
          description: a1Description,
          website: a1Website
        },
        attractionTwo: {
          name: aName0,
          address: aAddress0,
          description: aDescription0,
          website: aWebsite0
        },
        entertainment1: {
          name: e1Name,
          address: e1Address,
          description: e1Description,
          website: e1Website
        },
        food1: {
          name: f1Name,
          address: f1Address,
          description: f1Description,
          website: f1Website
        }
      })
      .then(() => {
        setPackageName("");
        setPackageDescription("");

        setAName("");
        setAAddress("");
        setADescription("");
        setAWebsite("");

        setAName0("");
        setAAddress0("");
        setADescription0("");
        setAWebsite0("");

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
  console.log(attractions.length);

  return (
    <div className="form-container">
      <div>
        <StyledH1>Add New Package</StyledH1>
      </div>
      {/* <form onSubmit={submitHandler}> */}
      <form>
        {/* ///////////// Package Details //////////////           */}
        <div className="forms">
          <div className="form-fields-container">
            <div className="form-fields">
              <span>Package Name</span>
              <input
                type="text"
                value={packageName}
                onChange={e => setPackageName(e.target.value)}
                placeholder="Package Name"
              ></input>
            </div>
            <div className="form-fields">
              <span>Package Description</span>
              <input
                type="text"
                value={packageDescription}
                onChange={e => setPackageDescription(e.target.value)}
                placeholder="Package Description"
              ></input>
            </div>
          </div>
        </div>

        {/* ///////////// Package Details //////////////           */}
        {/* ///////////// Attraction Details //////////////        */}
        <div className="attraction-container forms">
          <span>Attraction 1</span>
          <div className="form-fields-container">
            <div className="form-fields">
              <span>Name </span>
              <input
                type="text"
                value={a1Name}
                onChange={e => setAName(e.target.value)}
                placeholder="Freedom Tower"
              />
            </div>
            <div className="form-fields">
              <span>Description </span>
              <input
                type="text"
                value={a1Description}
                onChange={e => setADescription(e.target.value)}
                placeholder="1 World Trade Center"
              />
            </div>
            <div className="form-fields">
              <span>Address </span>
              <input
                type="text"
                value={a1Address}
                onChange={e => setAAddress(e.target.value)}
                placeholder="e.g. 285 Fulton St, New York, NY 10007"
              />
            </div>
            <div className="form-fields">
              <span>Website </span>
              <input
                type="text"
                value={a1Website}
                onChange={e => setAWebsite(e.target.value)}
                placeholder="e.g. https://www.wtc.com/about/buildings/1-world-trade-center"
              />
            </div>
          </div>
        </div>

        {attractions.map(i =>
          i < 2 ? (
            <div
              key={Math.random()}
              className="attraction-container"
              className="forms"
            >
              <span>{`Attraction ${i + 2}`}</span>
              <div className="form-fields-container">
                <div className="form-fields">
                  <span>Name </span>
                  <input
                    type="text"
                    value={aName0}
                    onChange={e => setAName0(e.target.value)}
                    placeholder="Freedom Tower"
                  />
                </div>
                <div className="form-fields">
                  <span>Description </span>
                  <input
                    type="text"
                    value={a1Description}
                    onChange={e => setADescription(e.target.value)}
                    placeholder="1 World Trade Center"
                  />
                </div>
                <div className="form-fields">
                  <span>Address </span>
                  <input
                    type="text"
                    value={a1Address}
                    onChange={e => setAAddress(e.target.value)}
                    placeholder="e.g. 285 Fulton St, New York, NY 10007"
                  />
                </div>
                <div className="form-fields">
                  <span>Website </span>
                  <input
                    type="text"
                    value={a1Website}
                    onClick={e => setAWebsite(e.target.value)}
                    placeholder="e.g. https://www.wtc.com/about/buildings/1-world-trade-center"
                  />
                </div>
              </div>
            </div>
          ) : (
            <Alert show={show} variant="danger">
              <Alert.Heading>Oops</Alert.Heading>
              <p>
                Looks like you have reached the maximum amount of attractions
                for this package type. if you would like to add additional
                attractions, please select the Two Day, or Weekend Package
              </p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button onClick={() => setShow(false)} variant="outline-danger">
                  X
                </Button>
              </div>
            </Alert>
          )
        )}
        {attractions.length <= 2 ? (
          <div>
            <button onClick={e => addPointCategories(e)}>
              Add Another Attraction
            </button>
          </div>
        ) : (
          <div></div>
        )}

        {/* ///////////// Attraction Details //////////////           */}
        {/* ///////////// Entertainment Details //////////////        */}
        <div className="entertainment-container forms">
          <span>Entertainment 1</span>
          <div className="form-fields-container">
            <div className="form-fields">
              <span>Name</span>
              <input
                type="text"
                value={e1Name}
                onChange={e => setE1Name(e.target.value)}
                placeholder="Daniel"
              />
            </div>
            <div className="form-fields">
              <span>Description</span>
              <input
                type="text"
                value={e1Description}
                onChange={e => setE1Description(e.target.value)}
                placeholder="Daniel Boulud's elegant French flagship where jackets are required & expense accounts come in handy."
              />
            </div>
            <div className="form-fields">
              <span>Address</span>
              <input
                type="text"
                value={e1Address}
                onChange={e => setE1Address(e.target.value)}
                placeholder="e.g. 60 E 65th St, New York, NY 10065"
              />
            </div>
            <div className="form-fields">
              <span>Website</span>
              <input
                type="text"
                value={e1Website}
                onChange={e => setE1Website(e.target.value)}
                placeholder="e.g. danielnyc.com"
              />
            </div>
          </div>
        </div>
        {/* ///////////// Entertainment Details //////////////           */}
        {/* ///////////// Food Details ///////////////////////           */}
        <div className="food-container forms">
          <span>Restaurant 1</span>
          <div className="form-fields-container">
            <div className="form-fields">
              <span>Name</span>
              <input
                type="text"
                value={f1Name}
                onChange={e => setF1Name(e.target.value)}
                placeholder="Time Square"
              />
            </div>
            <div className="form-fields">
              <span>Description</span>
              <input
                type="text"
                value={f1Description}
                onChange={e => setF1Description(e.target.value)}
                placeholder="The Theater District is the teeming heart of Midtown West."
              />
            </div>
            <div className="form-fields">
              <span>Address</span>
              <input
                type="text"
                value={f1Address}
                onChange={e => setF1Address(e.target.value)}
                placeholder="e.g. Manhattan, NY 10036"
              />
            </div>
            <div className="form-fields">
              <span>Website</span>
              <input
                type="text"
                value={f1Website}
                onChange={e => setF1Website(e.target.value)}
                placeholder="e.g. https://www.timessquarenyc.org/"
              />
            </div>
          </div>
        </div>
        {/* ///////////// Food Details ///////////////////           */}
        <button onClick={submitHandler}>Add</button>
      </form>
    </div>
  );
};

export default NewYorkCity1DayPackageForm;

// {attractions.map(i => (
//   <div
//     key={Math.random()}
//     className="attraction-container"
//     className="forms"
//   >
//     <span>{`Attraction ${i + 2}`}</span>
//     <div className="form-fields-container">
//       <div className="form-fields">
//         <span>Name </span>
//         <input
//           type="text"
//           value={aName0}
//           onChange={e => setAName0(e.target.value)}
//           placeholder="Freedom Tower"
//         />
//       </div>
//       <div className="form-fields">
//         <span>Description </span>
//         <input
//           type="text"
//           value={a1Description}
//           onChange={e => setADescription(e.target.value)}
//           placeholder="1 World Trade Center"
//         />
//       </div>
//       <div className="form-fields">
//         <span>Address </span>
//         <input
//           type="text"
//           value={a1Address}
//           onChange={e => setAAddress(e.target.value)}
//           placeholder="e.g. 285 Fulton St, New York, NY 10007"
//         />
//       </div>
//       <div className="form-fields">
//         <span>Website </span>
//         <input
//           type="text"
//           value={a1Website}
//           onClick={e => setAWebsite(e.target.value)}
//           placeholder="e.g. https://www.wtc.com/about/buildings/1-world-trade-center"
//         />
//       </div>
//     </div>
//   </div>
// ))}
