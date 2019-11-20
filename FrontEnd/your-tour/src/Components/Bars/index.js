import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getBars } from "../../actions";
import { StyledH1 } from "../../styles/Elements";

function Bars(props) {
  // useEffect(() => {
  //   props.getBars();
  // }, []);

  const dragStart = e => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = e => {
    e.stopPropagation();
  };

  console.log("PROPS", props.info);
  return (
    <BarDiv
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      <StyledH1>Bars</StyledH1>
      {props.barData.map(b => (
        <div id={b.barId}>
          <h1>{b.name}</h1>
          <p>{b.description}</p>
          <p>{b.address}</p>
        </div>
      ))}
    </BarDiv>
  );
}

const mapStateToProps = state => {
  return {
    barData: state.bars.barData,
    barDataStart: state.bars.getbarsStart,
    barDataSuccess: state.bars.getbarsSuccess,
    barDataFailure: state.bars.getbarsFailure,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getBars }
)(Bars);

const BarDiv = styled.div`
  width: 100%;
  border-radius: 7px;
`;
