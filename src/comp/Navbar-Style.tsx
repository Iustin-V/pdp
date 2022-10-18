import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../generalStyle";

export const Overlay = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100vh;
  top: 88px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;

export const Container = styled.div<{ isActive: boolean }>`
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
  height: 100%;
  color: ${colors.primary.base};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 18px;
  padding: 0 15px;
  position: relative;

  :hover {
    background-color: ${colors.secondary.lighter};
    transition: background-color 0.5s;
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
  width: ${(props) => props.width};
  ${(props) =>
    props.construction &&
    "margin-left: 50px; filter: invert(13%) sepia(94%) saturate(1864%) hue-rotate(207deg) brightness(85%) contrast(110%);"}
  background-attachment: fixed;

  @media (max-width: 768px) {
    height: 46px;
    ${(props) => props.construction && "height:100px"}
  }
`;

export const BurgerMenu = styled.button`
  border: none;
  background: transparent;
  img {
    margin-left: 10px;
    height: 28px;
    fill: ${colors.primary.base};
  }
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1200px) {
    flex-direction: row;
  }
`;

export const StyledLateralMenu = styled.div<{ lateralActive: boolean }>`
  position: absolute;
  top: 85px;
  right: ${(props) => (props.lateralActive ? "0" : "-300px")};
  transition: right 3s;
  height: calc(100vh - 85px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 300px;
  background: ${colors.secondary.base};

  a {
    width: calc(100% - 30px);
    height: fit-content;
    padding: 20px 15px;
    text-align: left;
    justify-content: flex-start;
  }
`;
