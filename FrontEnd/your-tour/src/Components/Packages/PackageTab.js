import React from "react"
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap"

function PackageTab(props) {
    return (
        <div style={{
            display: "flex",

            justifyContent: "space-between",
            borderRadius: "7px",
            padding: "5px"
        }}>
            <Button variant="secondary" style={{ borderRadius: "0", padding: "0" }} >
                <NavLink style={{ color: "white" }} to="/one-day-package">One Day Package</NavLink>
            </Button>
            <Button variant="secondary" style={{ borderRadius: "0", padding: "0" }}>
                <NavLink style={{ color: "white" }} to="/two-day-package">Two Day Package</NavLink>
            </Button>
            <Button variant="secondary" style={{ borderRadius: "0", padding: "0", size: "lg" }}>
                <NavLink style={{ color: "white" }} to="/weekend-package">Weekend Package</NavLink>
            </Button>
        </div>
    )
}

export default PackageTab