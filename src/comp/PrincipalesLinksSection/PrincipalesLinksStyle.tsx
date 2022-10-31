import { Link } from "react-router-dom";

import styled from "styled-components";

import { colors, fontSizes } from "../../generalStyle";

export const RectangleStyled = styled.div`
  width: 99%;
  opacity: 0;
  background: #f8ecd4;
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: slide-from-bottom 1.5s ease-out forwards 1.6s;
  margin-bottom: -60px;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-radius: 5px;
  border-color: ${colors.secondary.base};
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 32%);

  @media (max-width: 1200px) {
    animation: slide-from-bottom-tablet 1.5s ease-out forwards 1.6s;
    margin-bottom: -45px;
  }

  @media (max-width: 768px) {
    width: calc(100% - 80px);
    margin-bottom: -45px;
    animation: slide-from-bottom-mobile 1.5s ease-out forwards 1.6s;
  }

  @keyframes slide-from-bottom {
    0% {
      max-width: 800px;
      opacity: 0;
      left: 50%;
      transform: translate(-50%, 0%);
    }
    20% {
      opacity: 0;
      left: 50%;
    }
    60% {
      left: 50%;
      transform: translate(-50%, 5%);
    }
    75% {
      left: 50%;
      max-width: 800px;
      transform: translate(-50%, -15%);
    }
    100% {
      left: 50%;
      opacity: 1;
      max-width: 1100px;
      transform: translate(-50%, -65%);
    }
  }

  @keyframes slide-from-bottom-tablet {
    0% {
      max-width: 500px;
      opacity: 0;
      left: 50%;
      transform: translate(-50%, 0%);
    }
    20% {
      left: 50%;
      opacity: 0;
    }
    60% {
      left: 50%;
      transform: translate(-50%, 5%);
    }
    75% {
      left: 50%;
      max-width: 500px;
      transform: translate(-50%, -15%);
    }
    100% {
      opacity: 1;
      left: 50%;
      max-width: 688px;
      transform: translate(-50%, -65%);
    }
  }

  @keyframes slide-from-bottom-mobile {
    0% {
      left: 50%;
      max-width: 500px;
      opacity: 0;
      transform: translate(-50%, 0%);
    }
    20% {
      left: 50%;
      opacity: 0;
    }
    60% {
      left: 50%;
      transform: translate(-50%, 5%);
    }
    75% {
      left: 50%;
      max-width: 500px;
      transform: translate(-50%, -15%);
    }
    100% {
      opacity: 1;
      left: 50%;
      max-width: 688px;
      transform: translate(-50%, -65%);
    }
  }
`;

export const StyledIconLink = styled(Link)`
  padding: 20px;
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  :hover {
    h3 {
      color: #ffa500;
    }
    img {
      opacity: 1;
      transform: scale(1.1);
      transition: 1s ease;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 5px;
  }
  @media (max-width: 350px) {
    width: 100%;
    padding: 0;
  }
`;
export const StyledIcon = styled.img`
  width: auto;
  height: 150px;
  margin-top: -20px;
  opacity: 0.8;
  transition: 1s ease;
  @media (max-width: 1200px) {
    height: 120px;
    margin-top: -10px;
  }
  @media (max-width: 768px) {
    height: 80px;
    margin-top: 0;
  }
`;
export const StyledIconLabel = styled.h3`
animation: font-up 3s;
animation-delay:2s;
color:${colors.primary.base};
font-size:${fontSizes.mobile.heading.base};
margin:0;
text-decoration:none;
font-family:"KaushanScript";
margin-top:-20px;

@media(max-width:1200px){
font-size:${fontSizes.mobile.paragraph.base};
}
@media(max-width:768px){
display:none;
}

@keyframes font-up {
0% {
font-size:1px;
}
{
100%{
font-size:auto;
}
}


`;
