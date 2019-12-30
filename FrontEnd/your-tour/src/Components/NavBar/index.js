import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "../Auth0/Auth0";
import { NavButton } from "../../styles/Buttons";
import { StyledH1 } from "../../styles/Text";

function NavBar(props) {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  return (
    <div>
      {!isAuthenticated && (
        <NavBarContainer>
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <LogoDiv>
              <StyledP>YT</StyledP>
            </LogoDiv>
            <div>
              <NavButton>
                <Link to="/cities">Cities</Link>
              </NavButton>
            </div>
          </div>

          <div style={{ width: "100%" }}>
            <StyledH1>Your Tour</StyledH1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%"
            }}
          >
            <NavButton onClick={() => loginWithRedirect({})}>Log In</NavButton>
          </div>
        </NavBarContainer>
      )}
      {isAuthenticated && (
        <NavBarContainer>
          <div style={{ display: "flex", alignItems: "center" }}>
            <LogoDiv>
              <StyledImg src={user.picture} alt="Profile" />
            </LogoDiv>
            <NavButton>
              <Link to="/cities">Cities</Link>
            </NavButton>
          </div>
          <div>
            <StyledH1>{`Welcome, ${user.given_name}!`}</StyledH1>
          </div>
          <div>
            <NavButton>
              <Link to="/">Home</Link>
            </NavButton>
            <NavButton onClick={() => logout()}>Log Out</NavButton>
          </div>
        </NavBarContainer>
      )}
    </div>
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
  box-shadow: 0 10px 20px blueviolet;
`;

const LogoDiv = styled.div`
  width: 50px;
  height: 50px;
  margin: 10px;

  animation: pulse 10s infinite;

  @keyframes pulse {
    50% {
      box-shadow: 0 1px 20px blueviolet;
    }
  }
  box-shadow: 0 1px 10px greenyellow;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

const StyledP = styled.p`
  color: white;
  margin: 0;
  font-size: 1.6rem;
`;
