import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../generalStyle";

export const Overlay = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100vh;
  top: 85px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden;
  visibility: hidden;
`;

export const Container = styled.div`
  position: fixed;
  width: 100%;
  background-color: ${colors.secondary.base};
  top: 0;
  z-index: 998;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledNav = styled.div<{ height: string }>`
  height: ${(props) => props.height};
  padding: 0 40px;
  width: calc(100% - 80px);
  display: flex;
  max-width: 1440px;
  justify-content: space-between;
  overflow: hidden;
`;

export const StyledNavItems = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const StyledMobileNav = styled.div`
  display: none;
  height: 100%;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledLogoItem = styled(Link)`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledNavItem = styled(Link)`
  width: fit-content;
  height: 75px;
  margin-top: 5px;
  color: ${colors.primary.base};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 18px;
  padding: 0 15px;
  position: relative;
  border-radius: 15px 15px 0 0;
  :hover {
    background-color: ${colors.secondary.lighter};
    transition: background-color 1s;
  }
  @media (max-width: 1200px) {
    border-radius: 15px 0 0 15px;
    margin-left: 5px;
  }
  @media (min-width: 1200px) {
    &::before {
      content: " ";
      width: 0%;
    }

    &:hover::before {
      content: " ";
      position: absolute;
      bottom: 27px;
      width: 80%;

      height: 2px;
      background: ${colors.primary.base};
      transition: all 1.5s;
    }
  }
`;
export const StyledText = styled.p`
  font-weight: 700;
  margin: 0;
`;
export const StyledProgressBar = styled.div<{ width: string }>`
  height: 8px;
  background-color: ${colors.primary.base};
  width: ${(props) => props.width};
`;
export const StyledProgressContainer = styled.div`
  width: 100%;
  height: 8px;
  background: ${colors.secondary.lighter};
`;
export const StyledImage = styled.img<{
  height?: string;
  width?: string;
  construction?: boolean;
}>`
  height: ${(props) => props.height};
  width: ${(props) => props.width || "250px"};
 
  ${(props) =>
    props.construction &&
    "margin-left: 50px; filter: invert(13%) sepia(94%) saturate(1864%) hue-rotate(207deg) brightness(85%) contrast(110%);"}
  background-attachment: fixed;

  @media (max-width: 768px) {
    height: 46px;
    width:144px;
    ${(props) => props.construction && "height:100px"}
  }
`;

export const BurgerMenu = styled.div`
  border: none;
  background: transparent;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  width: 30px;
  transform: rotatey(180deg);
  span {
    background: ${colors.primary.base};
    border-radius: 10px;
    height: 5px;
    margin: 3px 0;
    transition: 0.9s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }
  span:nth-of-type(1) {
    width: 50%;
  }

  span:nth-of-type(2) {
    width: 100%;
  }

  span:nth-of-type(3) {
    width: 75%;
  }
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1200px) {
    flex-direction: row;
  }
`;

export const StyledLateralMenu = styled.div`
  position: absolute;
  top: 85px;
  right: -100%;
  transition: 0.7s;
  height: calc(100vh - 85px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  background: ${colors.secondary.base};

  a {
    width: calc(100% - 30px);
    height: fit-content;
    padding: 20px 15px;
    text-align: left;
    justify-content: flex-start;
  }
 
 @media(min-width:768px){
 
   height: fit-content;
 }
`;
