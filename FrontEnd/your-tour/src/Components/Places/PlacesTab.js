import React from "react";
import { NavLink } from "react-router-dom";
import { TabButtonDiv } from "../../styles/Elements";
import { TabButton } from "../../styles/Buttons";

function PlacesTab(props) {
  return (
    <TabButtonDiv>
      {props.placesRoutes.map(({ name, id }) => (
        <div key={id}>
          <TabButton>
            <NavLink
              style={{ color: "black", textDecoration: "none" }}
              to={`/search-packages/one-day-package/${id}`}
            >
              {name}
            </NavLink>
          </TabButton>
        </div>
      ))}
    </TabButtonDiv>
  );
}

export default PlacesTab;
