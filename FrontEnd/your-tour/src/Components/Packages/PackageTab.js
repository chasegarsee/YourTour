import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { TabButtonDiv } from "../../styles/Elements";
import { TabButton } from "../../styles/Buttons";

function PackageTab(props) {
  // const packageTab = packageTab.find(({ id }) => id === match.params.packageId)
  return (
    <TabButtonDiv>
      {props.packageRoutes.map(({ name, id }) => (
        <div key={id}>
          <TabButton>
            <NavLink style={{ color: "black" }} to={`/${id}`}>
              {name}
            </NavLink>
          </TabButton>
        </div>
      ))}
    </TabButtonDiv>
  );
}

export default PackageTab;
