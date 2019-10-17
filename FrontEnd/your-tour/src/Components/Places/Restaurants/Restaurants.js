// import React from "react"
// import styled from "styled-components"

// function Restaurants(props) {

//     const dragStart = e => {
//         const target = e.target
//         e.dataTransfer.setData("card_id", target.id)

//         setTimeout(() => {
//             target.style.display = "none"
//         }, 0)
//     }

//     const dragOver = e => {
//         e.stopPropagation()
//     }


//     console.log("RESTAURANTS PROPS", props)
//     return (
//         <RestaurantDiv
//             id={props.id}
//             className={props.className}
//             draggable={props.draggable}
//             onDragStart={dragStart}
//             onDragOver={dragOver}>
//             <h1>YOOOOOO</h1>
//             <h1>{props.info.name}</h1>
//             <p>{props.info.genre}</p>
//             <p>{props.info.description}</p>
//             <p>{props.info.address}</p>
//         </RestaurantDiv >
//     )
// }


// export default Restaurants

// const RestaurantDiv = styled.div`
// border: solid 1px red;
// width: 100%;
// border-radius: 7px;
// `

