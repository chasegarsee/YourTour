import React from "react";
import styled from "styled-components";
import { NavButton } from "../../styles/Buttons";

function NavBar(props) {
  return (
    <NavBarContainer>
      <LogoDiv>
        <PyledP>YT</PyledP>
      </LogoDiv>
      <div>
        <StyledH1>Your Tour</StyledH1>
      </div>
      <div>
        <NavButton>Log In</NavButton>
      </div>
    </NavBarContainer>
  );
}

export default NavBar;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(26, 29, 33);
  padding: 5px;
  /* background: linear-gradient(to right, #fc28a8, #03edf9) !important; */
  border-bottom: 3px solid blueviolet;
`;

const LogoDiv = styled.div`
  width: 50px;
  height: 50px;
  border: solid 2px white;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PyledP = styled.p`
  color: white;
  margin: 0;
  font-size: 1.6rem;
`;

const StyledH1 = styled.h1`
  color: white;
  margin: 0;
`;
