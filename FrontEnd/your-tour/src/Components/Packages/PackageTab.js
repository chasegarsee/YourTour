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
            {props.packageRoutes.map(({ name, id }) => (
                <div key={id}>
                    <Button variant="secondary" style={{ borderRadius: "0", padding: "0" }} >
                        <NavLink style={{ color: "white" }} to={`${id}`}>{name}</NavLink>
                    </Button>
                </div>
            ))}
        </div>
    )
}

export default PackageTab