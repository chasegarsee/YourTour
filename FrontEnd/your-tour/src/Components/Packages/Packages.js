import React from "react"
import PackageTab from "./PackageTab"
import { Route } from "react-router-dom";
import TwoDayPackage from "./TwoDayPackage";
import OneDayPackage from "./OneDayPackage";
import WeekendPackage from "./WeekendPackage";

function Packages(props) {

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
            <div style={{ width: "500px", height: "100vh", backgroundColor: "#f3f3f3" }} id={props.id}
                className={props.className}
                onDrop={drop}
                onDragOver={dragOver}>
                <PackageTab />
                {routes.map(({ path, component: c, key }) => (
                    <Route exact path={path} component={c} key={key} />
                ))}
                {props.children}

            </div>


        </div>
    )

}

const routes = [
    {
        path: "/one-day-package",
        component: OneDayPackage,
        key: "onedaypackage"
    },
    {
        path: "/two-day-package",
        component: TwoDayPackage,
        key: "twodaypackage"
    },
    {
        path: "/weekend-package",
        component: WeekendPackage,
        key: "weekendpackage"
    }
]

export default Packages
