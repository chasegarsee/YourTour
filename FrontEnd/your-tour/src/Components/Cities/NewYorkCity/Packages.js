import React from "react";
import { StyledH1 } from "../../../styles/Text";

const Packages = props => {
  console.log("SOME DATA MAYBE?", props);

  if (props.location.pathname === window.location.pathname) {
    return (
      <div>
        <StyledH1>
          {props.message.map(m => (
            <div key={m.id}>
              <StyledH1>{m.name}</StyledH1>
            </div>
          ))}
        </StyledH1>
      </div>
    );
  }
};

export default Packages;
