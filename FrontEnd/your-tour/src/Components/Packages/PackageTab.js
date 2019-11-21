import React from "react";
import { NavLink } from "react-router-dom";
import { TabButtonDiv } from "../../styles/Elements";
import { TabButton } from "../../styles/Buttons";
import "./NavLink.css";

function PackageTab(props) {
  // const packageTab = packageTab.find(({ id }) => id === match.params.packageId)
  return (
    <TabButtonDiv>
      {props.packageRoutes.map(({ name, id }) => (
        <div key={id}>
          <TabButton>
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              activeClassName="active"
              to={`/search-packages/${id}`}
            >
              {name}
            </NavLink>
          </TabButton>
        </div>
      ))}
    </TabButtonDiv>
  );
}

export default PackageTab;
