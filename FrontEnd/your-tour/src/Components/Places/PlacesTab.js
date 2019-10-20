import React from "react"
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap"
import { TabButtonDiv } from "../../styles/Elements"

function PlacesTab(props) {


    return (
        <TabButtonDiv>
            {props.placesRoutes.map(({ name, id }) => (
                <div key={id}>
                    <Button variant="secondary" style={{ borderRadius: "0", padding: "0" }} >
                        <NavLink style={{ color: "white" }} to={`/one-day-package/${id}`}>{name}</NavLink>
                    </Button>
                </div>
            ))}
        </TabButtonDiv>
    )
}

export default PlacesTab