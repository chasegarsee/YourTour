import React, { useState, useEffect } from "react"
import { connect } from "react-redux";
import { getRestaurants } from "../../actions"
import Restaurants from "./Restaurants"

function ViewRestaruants(props) {


    useEffect(() => { props.getRestaurants() })

    const dragStart = e => {
        const target = e.target
        e.dataTransfer.setData("card_id", target.id)

        setTimeout(() => {
            target.style.display = "none"
        }, 0)
    }

    const dragOver = e => {
        e.stopPropagation()
    }

    return (
        <div style={{ backgroundColor: "grey", boxSizing: "border-box", height: "100vh" }}>

            <h1>Restaurants</h1>
            <div>
                {props.restaurantData.map(r => (
                    <Restaurants
                        id="card-1"
                        className="card"
                        draggable="true"
                        key={r.restaurantsId}
                        item={r} />
                ))}
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        restaurantData: state.restaruants.restaurantData,
        restaurantDataStart: state.restaruants.getRestaurantsStart,
        restaurantDataSuccess: state.restaruants.getRestaurantsSuccess,
        restaurantDataFailure: state.restaruants.getRestaurantsFailure,
        error: state.error
    }
}

export default connect(
    mapStateToProps, { getRestaurants }
)(ViewRestaruants)