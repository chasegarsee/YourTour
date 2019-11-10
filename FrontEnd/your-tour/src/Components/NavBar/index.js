import React from "react";
import styled from "styled-components";
import { useAuth0 } from "../Auth0/Auth0";
import { NavButton } from "../../styles/Buttons";
import { StyledH1 } from "../../styles/Elements";

function NavBar(props) {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <NavBarContainer>
      <LogoDiv>
        <PyledP>YT</PyledP>
      </LogoDiv>
      <div>
        <StyledH1>Your Tour</StyledH1>
      </div>
      <div>
        {!isAuthenticated && (
          <NavButton onClick={() => loginWithRedirect({})}>Log In</NavButton>
        )}
        {isAuthenticated && (
          <NavButton onClick={() => logout()}>Log Out</NavButton>
        )}
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
  align-items: center;
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
