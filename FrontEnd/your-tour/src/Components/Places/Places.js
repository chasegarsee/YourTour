import React from "react"
import { Route } from "react-router-dom";
import Restaurants from "../Restaurants";
import Bars from "../Bars";
import Attractions from "../Attractions"
import PlacesTab from "./PlacesTab";

function Places(props) {
    // console.log("WHATT?", match.url)
    // const allThePlaces = placesRoutes.find(({ id }) => id === match.params.placeId)

    const drop = e => {
        e.preventDefault()
        const card_id = e.dataTransfer.getData("card_id")

        const card = document.getElementById(card_id)
        card.style.display = "block"
        e.target.appendChild(card)
    }

    const dragOver = e => {
        e.preventDefault()
    }

    // console.log("PRAAHHPPS", props)
    return (

        <div>
            <div style={{ width: "500px", height: "100vh", backgroundColor: "#f3f3f3" }}
                id={props.id}
                className={props.className}
                onDrop={drop}
                onDragOver={dragOver}>
                <PlacesTab placesRoutes={placesRoutes}
                />
                {props.children}
                {placesRoutes.map(({ id, component: c, key }) => (
                    <Route path={`/one-day-package/${id}`} component={c} key={id} />
                ))}
            </div>


        </div>
    )

}


const placesRoutes = [
    {
        path: `/restaurants`,
        component: Restaurants,
        name: "Restaurants",
        key: "restaurants",
        id: "restaurants",

    },
    {
        path: `/bars`,
        component: Bars,
        name: "Bars",
        key: "bars",
        id: "bars"
    },
    {
        path: `/attractions`,
        component: Attractions,
        name: "Attractions",
        key: "attractions",
        id: "attractions"
    }
]

export default Places
