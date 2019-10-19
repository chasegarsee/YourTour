import React from "react"
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap"
import { TabButtonDiv } from "../../styles/Elements"

function PackageTab(props) {
    return (
        <TabButtonDiv>
            {props.packageRoutes.map(({ name, id }) => (
                <div key={id}>
                    <Button variant="secondary" style={{ borderRadius: "0", padding: "0" }} >
                        <NavLink style={{ color: "white" }} to={`${id}`}>{name}</NavLink>
                    </Button>
                </div>
            ))}
        </TabButtonDiv>
    )
}

export default PackageTab