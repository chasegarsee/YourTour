import React, { useState } from "react";
import styled from "styled-components";

import "./forms.css";
import firebase from "../../../firebase";
import { StyledH1 } from "../../../styles/Text";
import { Alert, Button } from "react-bootstrap";

const NewYorkCity1DayPackageForm = props => {
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

  const [packageNameError, setPackageNameError] = useState("");
  const [packageDescriptionError, setPackageDescriptionError] = useState("");

  const [a1NameError, setA1NameError] = useState("");
  const [a1AddressError, setA1AddressError] = useState("");
  const [a1DescriptionError, setA1DescriptionError] = useState("");
  const [a1WebsiteError, setA1WebsiteError] = useState("");

  const [aName0Error, setAName0Error] = useState("");
  const [aAddress0Error, setAAddress0Error] = useState("");
  const [aDescription0Error, setADescription0Error] = useState("");
  const [aWebsite0Error, setAWebsite0Error] = useState("");

  const [e1NameError, setE1NameError] = useState("");
  const [e1AddressError, setE1AddressError] = useState("");
  const [e1DescriptionError, setE1DescriptionError] = useState("");
  const [e1WebsiteError, setE1WebsiteError] = useState("");

  const [f1NameError, setF1NameError] = useState("");
  const [f1AddressError, setF1AddressError] = useState("");
  const [f1DescriptionError, setF1DescriptionError] = useState("");
  const [f1WebsiteError, setF1WebsiteError] = useState("");

  function addPointCategories(e) {
    e.preventDefault();
    let count = 0;
    setAttractions([...attractions, (count = attractions.length)]);
  }

  function formValidation() {
    let packageNameError = "";
    let packageDescriptionError = "";

    let a1NameError = "";
    let a1AddressError = "";
    let a1DescriptionError = "";
    let a1WebsiteError = "";

    let aName0Error = "";
    let aAddress0Error = "";
    let aDescription0Error = "";
    let aWebsite0Error = "";

    let e1NameError = "";
    let e1AddressError = "";
    let e1DescriptionError = "";
    let e1WebsiteError = "";

    let f1NameError = "";
    let f1AddressError = "";
    let f1DescriptionError = "";
    let f1WebsiteError = "";

    if (packageName.length == 0) {
      packageNameError = "Must Provide a Package Name";
    }
    if (packageDescription.length == 0) {
      packageDescriptionError = "Must Provide a Package Description";
    }
    if (a1Name.length == 0) {
      a1NameError = "Must Provide a Name";
    }
    if (a1Address.length == 0) {
      a1AddressError = "Must Provide an Address";
    }
    if (a1Description.length == 0) {
      a1DescriptionError = "Must Provide a Description";
    }
    if (a1Website.length == 0) {
      a1WebsiteError = "Must Provide a Web Address";
    }

    if (!a1Website.includes(".") && a1Website.length > 0) {
      a1WebsiteError = "Must Provide a Valid Web Address";
    }

    if (aName0.length == 0) {
      aName0Error = "Must Provide a Name";
    }
    if (aAddress0.length == 0) {
      aAddress0Error = "Must Provide an Address";
    }
    if (aDescription0.length == 0) {
      aDescription0Error = "Must Provide a Description";
    }
    if (aWebsite0.length == 0) {
      aWebsite0Error = "Must Provide a Web Address";
    }

    if (!aWebsite0.includes(".") && aWebsite0.length > 0) {
      aWebsite0Error = "Must Provide a Valid Web Address";
    }
    if (e1Name.length == 0) {
      e1NameError = "Must Provide a Name";
    }
    if (e1Address.length == 0) {
      e1AddressError = "Must Provide an Address";
    }
    if (e1Description.length == 0) {
      e1DescriptionError = "Must Provide a Description";
    }
    if (e1Website.length == 0) {
      e1WebsiteError = "Must Provide a Web Address";
    }

    if (!e1Website.includes(".") && e1Website.length > 0) {
      e1WebsiteError = "Must Provide a Valid Web Address";
    }

    if (f1Name.length == 0) {
      f1NameError = "Must Provide a Name";
    }
    if (f1Address.length == 0) {
      f1AddressError = "Must Provide an Address";
    }
    if (f1Description.length == 0) {
      f1DescriptionError = "Must Provide a Description";
    }
    if (f1Website.length == 0) {
      f1WebsiteError = "Must Provide a Web Address";
    }

    if (!f1Website.includes(".") && f1Website.length > 0) {
      f1WebsiteError = "Must Provide a Valid Web Address";
    }

    if (packageNameError) {
      setPackageNameError(packageNameError);
    }
    if (packageDescriptionError) {
      setPackageDescriptionError(packageDescriptionError);
    }
    //////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////
    if (a1NameError) {
      setA1NameError(a1NameError);
    }
    if (a1AddressError) {
      setA1AddressError(a1AddressError);
    }
    if (a1DescriptionError) {
      setA1DescriptionError(a1DescriptionError);
    }
    if (a1WebsiteError) {
      setA1WebsiteError(a1WebsiteError);
    }
    //////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////
    if (aName0Error) {
      setAName0Error(aName0Error);
    }
    if (aAddress0Error) {
      setAAddress0Error(aAddress0Error);
    }
    if (aDescription0Error) {
      setADescription0Error(aDescription0Error);
    }
    if (aWebsite0Error) {
      setAWebsite0Error(aWebsite0Error);
    }
    //////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////
    if (e1NameError) {
      setE1NameError(e1NameError);
    }
    if (e1AddressError) {
      setE1AddressError(e1AddressError);
    }
    if (e1DescriptionError) {
      setE1DescriptionError(e1DescriptionError);
    }
    if (e1WebsiteError) {
      setE1WebsiteError(e1WebsiteError);
    }
    //////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////
    if (f1NameError) {
      setF1NameError(f1NameError);
    }
    if (f1AddressError) {
      setF1AddressError(f1AddressError);
    }
    if (f1DescriptionError) {
      setF1DescriptionError(f1DescriptionError);
    }
    if (f1WebsiteError) {
      setF1WebsiteError(f1WebsiteError);
      return false;
    }
    return true;
  }

  function submitHandler(e) {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      console.log(useState);
      firebase
        .firestore()
        .collection("newYorkCity")
        .doc("GX5nBGcDrSkGlEpj4Mkq")
        .collection("oneDayPackage")
        .add({
          packageDescription: packageDescription,
          name: packageName,
          attractionOne: {
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
          entertainmentOne: {
            name: e1Name,
            address: e1Address,
            description: e1Description,
            website: e1Website
          },
          foodOne: {
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

          setPackageNameError("");
          setPackageDescriptionError("");

          setA1NameError("");
          setA1AddressError("");
          setA1DescriptionError("");
          setA1WebsiteError("");

          setAName0Error("");
          setAAddress0Error("");
          setADescription0Error("");
          setAWebsite0Error("");

          setE1NameError("");
          setE1AddressError("");
          setE1DescriptionError("");
          setE1WebsiteError("");

          setF1NameError("");
          setF1AddressError("");
          setF1DescriptionError("");
          setF1WebsiteError("");
        });
      props.history.push("/new-york-city");
    }
  }

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
              <ErrorSpan>{packageNameError}</ErrorSpan>
              <input
                type="text"
                value={packageName}
                onChange={e => setPackageName(e.target.value)}
                placeholder="Package Name"
              />
            </div>
            <div className="form-fields">
              <span>Package Description</span>
              <ErrorSpan>{packageDescriptionError}</ErrorSpan>
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
              <ErrorSpan>{a1NameError}</ErrorSpan>
              <input
                type="text"
                value={a1Name}
                onChange={e => setAName(e.target.value)}
                placeholder="Freedom Tower"
              />
            </div>
            <div className="form-fields">
              <span>Description </span>
              <ErrorSpan>{a1DescriptionError}</ErrorSpan>
              <input
                type="text"
                value={a1Description}
                onChange={e => setADescription(e.target.value)}
                placeholder="1 World Trade Center"
              />
            </div>
            <div className="form-fields">
              <span>Address </span>
              <ErrorSpan>{a1AddressError}</ErrorSpan>
              <input
                type="text"
                value={a1Address}
                onChange={e => setAAddress(e.target.value)}
                placeholder="e.g. 285 Fulton St, New York, NY 10007"
              />
            </div>
            <div className="form-fields">
              <span>Website </span>
              <ErrorSpan>{a1WebsiteError}</ErrorSpan>
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
                <Button onClick={() => setShow(false)} variant="outline-dark">
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
        ) : null}

        {/* ///////////// Attraction Details //////////////           */}
        {/* ///////////// Entertainment Details //////////////        */}
        <div className="entertainment-container forms">
          <span>Entertainment 1</span>
          <div className="form-fields-container">
            <div className="form-fields">
              <span>Name</span>
              <ErrorSpan>{e1NameError}</ErrorSpan>
              <input
                type="text"
                value={e1Name}
                onChange={e => setE1Name(e.target.value)}
                placeholder="Daniel"
              />
            </div>
            <div className="form-fields">
              <span>Description</span>
              <ErrorSpan>{e1DescriptionError}</ErrorSpan>
              <input
                type="text"
                value={e1Description}
                onChange={e => setE1Description(e.target.value)}
                placeholder="Daniel Boulud's elegant French flagship where jackets are required & expense accounts come in handy."
              />
            </div>
            <div className="form-fields">
              <span>Address</span>
              <ErrorSpan>{e1AddressError}</ErrorSpan>
              <input
                type="text"
                value={e1Address}
                onChange={e => setE1Address(e.target.value)}
                placeholder="e.g. 60 E 65th St, New York, NY 10065"
              />
            </div>
            <div className="form-fields">
              <span>Website</span>
              <ErrorSpan>{e1WebsiteError}</ErrorSpan>
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
              <ErrorSpan>{f1NameError}</ErrorSpan>
              <input
                type="text"
                value={f1Name}
                onChange={e => setF1Name(e.target.value)}
                placeholder="Time Square"
              />
            </div>
            <div className="form-fields">
              <span>Description</span>
              <ErrorSpan>{f1DescriptionError}</ErrorSpan>
              <input
                type="text"
                value={f1Description}
                onChange={e => setF1Description(e.target.value)}
                placeholder="The Theater District is the teeming heart of Midtown West."
              />
            </div>
            <div className="form-fields">
              <span>Address</span>
              <ErrorSpan>{f1AddressError}</ErrorSpan>
              <input
                type="text"
                value={f1Address}
                onChange={e => setF1Address(e.target.value)}
                placeholder="e.g. Manhattan, NY 10036"
              />
            </div>
            <div className="form-fields">
              <span>Website</span>
              <ErrorSpan>{f1WebsiteError}</ErrorSpan>
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
        <button onClick={submitHandler}>Add Package</button>
      </form>
    </div>
  );
};

export default NewYorkCity1DayPackageForm;

const ErrorSpan = styled.span`
  color: red;
`;
