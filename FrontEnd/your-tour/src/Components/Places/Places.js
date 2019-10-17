import React from "react"
import { Route } from "react-router-dom";
import Restaurants from "../Restaurants/Restaurants";
import Bars from "./Bars/Bars";
import Attractions from "./Attractions/Attractions";
import PlacesTab from "./PlacesTab";

function Places(props) {

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

    console.log("PRAAHHPPS", props)
    return (

        <div>
            <div style={{ width: "500px", height: "100vh", backgroundColor: "#f3f3f3" }} id={props.id}
                className={props.className}
                onDrop={drop}
                onDragOver={dragOver}>
                <PlacesTab
                />
                {props.children}
                {routes.map(({ path, component: c, key }) => (
                    <Route exact path={path} component={c} key={key} />
                ))}
            </div>


        </div>
    )

}

const routes = [
    {
        path: `/restaurants`,
        component: Restaurants,
        key: "restaurants",

    },
    {
        path: `/bars`,
        component: Bars,
        key: "bars"
    },
    {
        path: `/attractions`,
        component: Attractions,
        key: "attractions"
    }
]

export default Places
