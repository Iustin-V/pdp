import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.div<{ height: string }>`
  height: ${(props) => props.height};
  position: fixed;
  width: 100vw;
  background-color: #3e3e3e;
  top: 0;
  display: flex;
  justify-content: space-evenly;
  transition: height 200ms ease-in-out;
  overflow: hidden;
`;
export const StyledNavItem = styled(Link)`
  width: fit-content;
  height: 100%;
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 19px;
`;
export const StyledText = styled.p`
  font-weight: 700;
  margin: 0;
`;
export const StyledProgressBar = styled.div<{ width: string }>`
  height: 8px;
  background-color: #002366;
  width: ${(props) => props.width};
`;
export const StyledProgressContainer = styled.div<{ top: string }>`
  //top:${(props) => props.top};
  position: fixed;
  width: 100%;
  height: 8px;
  background: #ccc;
  //transition:top 200ms ease-in-out;
  //de corectat
`;
export const StyledImage = styled.img<{ height?: string; width?: string }>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-attachment: fixed;
`;
