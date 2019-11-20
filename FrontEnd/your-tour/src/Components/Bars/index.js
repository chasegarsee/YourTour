import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getBars } from "../../actions";
import { StyledH1 } from "../../styles/Elements";

function Bars(props) {
  // useEffect(() => {
  //   props.getBars();
  // }, []);

  console.log("PROPS", props.info);
  return (
    <BarDiv>
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
