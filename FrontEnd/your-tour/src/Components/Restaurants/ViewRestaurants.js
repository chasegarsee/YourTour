import React, { Component } from "react"
import { connect } from "react-redux";
import { getRestaurants } from "../../actions"
import Restaurants from "./Restaurants"

class ViewRestaruants extends Component {


    componentDidMount() {
        this.props.getRestaurants()
    }


    render() {
        console.log(this.props.restaurantData)

        return (
            <div>
                <div>
                    {this.props.restaurantData.map(r => (
                        <Restaurants key={r.restaurantsId} item={r} />
                    ))}
                </div>
            </div>
        )
    }
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