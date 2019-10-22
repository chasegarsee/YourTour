import React from "react"
import PackageTab from "./PackageTab"
import { Route } from "react-router-dom";
import TwoDayPackage from "./TwoDayPackage";
import OneDayPackage from "./OneDayPackage";
import WeekendPackage from "./WeekendPackage";

function Packages(props, { match }) {
    console.log("AHSDFLJKH???", props.match)

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


    return (
        <div>
            <div style={{ width: "500px", height: "100vh", backgroundColor: "#f3f3f3" }}
                id={props.id}
                className={props.className}
                onDrop={drop}
                onDragOver={dragOver}>
                <PackageTab packageRoutes={packageRoutes} />
                {packageRoutes.map(({ id, component: c, key }) => (
                    <Route path={`/${id}`} component={c} key={key} />
                ))}
                {props.children}
            </div>
        </div>
    )

}

const packageRoutes = [
    {
        path: `/one-day-package`,
        component: OneDayPackage,
        name: "One Day Package",
        key: "onedaypackage",
        id: "one-day-package"
    },
    {
        path: `/two-day-package`,
        component: TwoDayPackage,
        name: "Two Day Package",
        key: "twodaypackage",
        id: "two-day-package"
    },
    {
        path: `/weekend-package`,
        component: WeekendPackage,
        name: "Weekend Package",
        key: "weekendpackage",
        id: "weekend-package"
    }
]

export default Packages
