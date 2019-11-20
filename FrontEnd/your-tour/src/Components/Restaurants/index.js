import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getRestaurants } from "../../actions";
import { StyledH1 } from "../../styles/Elements";
import axios from "axios";
import { BASE_URL } from "../../config";
import { RestaurantContext } from "../../contexts/RestaruantContext";

function Restaurants(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${BASE_URL}/restaurants/`);
      setData(result.data);
    };
    fetchData();
  }, []);
  console.log("DIS THE DATA", data);

  // useEffect(() => {
  //   props.getRestaurants();
  // }, []);

  // const dragStart = e => {
  //   const target = e.target;
  //   e.dataTransfer.setData("card_id", target.id);

  //   setTimeout(() => {
  //     target.style.display = "none";
  //   }, 0);
  // };

  // const dragOver = e => {
  //   e.stopPropagation();
  // };

  return (
    <RestaurantDiv>
      <StyledH1>Restaurants</StyledH1>
      <div>
        {data.map(r => (
          <div
            style={{
              margin: "5px",
              backgroundColor: "rgb(26,29,33)",
              color: "white"
            }}
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
      </div>
    </RestaurantDiv>
  );
}

// const mapStateToProps = state => {
//   return {
//     restaurantData: state.restaruants.restaurantData,
//     restaurantDataStart: state.restaruants.getRestaurantsStart,
//     restaurantDataSuccess: state.restaruants.getRestaurantsSuccess,
//     restaurantDataFailure: state.restaruants.getRestaurantsFailure,
//     error: state.error
//   };
// };

// export default connect(
//   mapStateToProps,
//   { getRestaurants }
// )(Restaurants);

export default Restaurants;

const RestaurantDiv = styled.div`
  width: 100%;
  border-radius: 7px;
`;
