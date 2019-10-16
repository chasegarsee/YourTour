import React from "react"
import { NavLink } from "react-router-dom";
import OneDayPackage from "./OneDayPackage";
import TwoDayPackage from "./TwoDayPackage";

function PackageTab(props) {
    return (
        <div style={{ height: "100px" }}>
            <NavLink to="/one-day-package">One Day Package</NavLink>
            <NavLink to="/two-day-package">Two Day Package</NavLink>
            <NavLink to="/weekend-package">Weekend Package</NavLink>
        </div>
    )
}

export default PackageTab