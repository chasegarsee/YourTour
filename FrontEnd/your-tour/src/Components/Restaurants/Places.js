// import React, { useEffect } from "react"
// import { connect } from "react-redux";
// import { getRestaurants } from "../../actions"
// import Restaurants from "./Restaurants"

// function Places(props) {

//     useEffect(() => { props.getRestaurants() }, [])

//     const drop = e => {
//         e.preventDefault()
//         const card_id = e.dataTransfer.getData("card_id")

//         const card = document.getElementById(card_id)
//         card.style.display = "block"

//         e.target.appendChild(card)
//     }

//     const dragOver = e => {
//         e.preventDefault()
//     }

//     return (
//         <div style={{ backgroundColor: "grey", height: "100vh", width: "500px" }}>

//             <h1>Restaurants</h1>
//             <div id={props.id}
//                 className={props.className}
//                 onDrop={drop}
//                 onDragOver={dragOver}>
//                 {props.restaurantData.map(r => (
//                     <Restaurants
//                         id={r.restaurantsId}
//                         className="card"
//                         draggable="true"
//                         key={r.restaurantsId}
//                         item={r}>

//                         {props.children}
//                     </Restaurants>
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
// )(Places)