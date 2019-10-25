import React from "react";

function OneDayPackage(props) {
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
      style={{ width: "500px", height: "100vh" }}
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      <h1>One Day Package</h1>
      {props.children}
    </div>
  );
}

export default OneDayPackage;
