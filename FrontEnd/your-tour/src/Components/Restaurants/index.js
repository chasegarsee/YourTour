import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getRestaurants } from "../../actions";
import { StyledH1 } from "../../styles/Elements";

function Restaurants(props) {
  useEffect(() => {
    props.getRestaurants();
  }, []);

  const dragStart = e => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = e => {
    e.stopPropagation();
  };

  return (
    <RestaurantDiv
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      <StyledH1>Restaurants</StyledH1>
      {props.restaurantData.map(r => (
        <div
          id={r.restaurantsId}
          className="card"
          draggable="true"
          key={r.restaurantsId}
        >
          <h1>{r.name}</h1>
          <p>{r.genre}</p>
          <p>{r.description}</p>
          <p>{r.address}</p>
        </div>
      ))}
    </RestaurantDiv>
  );
}

const mapStateToProps = state => {
  return {
    restaurantData: state.restaruants.restaurantData,
    restaurantDataStart: state.restaruants.getRestaurantsStart,
    restaurantDataSuccess: state.restaruants.getRestaurantsSuccess,
    restaurantDataFailure: state.restaruants.getRestaurantsFailure,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getRestaurants }
)(Restaurants);

const RestaurantDiv = styled.div`
  width: 100%;
  border-radius: 7px;
`;
