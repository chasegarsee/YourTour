import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getAttractions } from "../../actions";
import { StyledH1 } from "../../styles/Elements";

function Attractions(props) {
  useEffect(() => {
    props.getAttractions();
  }, []);

  console.log("PROOOOPS", props);
  return (
    <div>
      <StyledH1>Attractions</StyledH1>
      {props.attractionData.map(a => (
        <div
          id={a.attractionsId}
          className="card"
          draggable="true"
          key={a.attractionsId}
        >
          <h1>{a.name}</h1>
          <p>{a.description}</p>
          <p>{a.address}</p>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    attractionData: state.attractions.attractionData,
    attractionDataStart: state.attractions.getAttractionsStart,
    attractionDataSuccess: state.attractions.getAttractionsSuccess,
    attractionDataFailure: state.attractions.getAttractionsFailure,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getAttractions }
)(Attractions);
