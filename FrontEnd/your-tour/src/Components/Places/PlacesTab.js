import React from "react"
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap"

function PlacesTab(props) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "7px",
            padding: "5px"
        }}>
            <Button variant="secondary" style={{ borderRadius: "0", padding: "0" }} >
                <NavLink style={{ color: "white" }} to="/restaurants/">Restaurants</NavLink>
            </Button>
            <Button variant="secondary" style={{ borderRadius: "0", padding: "0" }}>
                <NavLink style={{ color: "white" }} to="/bars/">Bars</NavLink>
            </Button>
            <Button variant="secondary" style={{ borderRadius: "0", padding: "0", size: "lg" }}>
                <NavLink style={{ color: "white" }} to="/attractions/">Attractions</NavLink>
            </Button>
        </div>
    )
}

export default PlacesTab