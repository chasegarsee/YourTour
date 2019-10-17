// import React, { useEffect } from "react"
// import { connect } from "react-redux";
// import { getRestaurants } from "../../actions"
// import Restaurants from "./Restaurants";


// function ViewRestaruants(props) {

//     useEffect(() => { props.getRestaurants() }, [])

//     console.log("PROOOOPS", props)

//     return (
//         <div style={{ backgroundColor: "grey", height: "100vh" }}>

//             <h1>Restaurants</h1>
//             <div>
//                 {props.restaurantData.map(r => (
//                     <Restaurants
//                         id={r.restaurantsId}
//                         className="card"
//                         draggable="true"
//                         key={r.restaurantsId}
//                         info={r} />
//                 ))}
//             </div>
//         </div>
//     )
// }


// const mapStateToProps = state => {
//     return {
//         restaurantData: state.restaruants.restaurantData,
//         restaurantDataStart: state.restaruants.getRestaurantsStart,
//         restaurantDataSuccess: state.restaruants.getRestaurantsSuccess,
//         restaurantDataFailure: state.restaruants.getRestaurantsFailure,
//         error: state.error
//     }
// }

// export default connect(
//     mapStateToProps, { getRestaurants }
// )(ViewRestaruants)