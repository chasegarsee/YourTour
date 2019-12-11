import React from "react";
import { StyledH1 } from "../../../styles/Text";

const Packages = props => {
  console.log("SOME DATA MAYBE?", props.data);

  return (
    <div>
      <StyledH1>This the Packages</StyledH1>
    </div>
  );
};

export default Packages;
