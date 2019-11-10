import React from "react";
import { StyledH1 } from "../../styles/Elements";

function TwoDayPackage(props) {
  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");

    const card = document.getElementById(card_id);
    card.style.display = "block";

    e.target.appendChild(card);
  };

  const dragOver = e => {
    e.preventDefault();
  };
  return (
    <div
      style={{}}
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      <StyledH1>Two Day Package</StyledH1>
      {props.children}
    </div>
  );
}

export default TwoDayPackage;
