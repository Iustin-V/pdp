import { Link } from "react-router-dom";

import styled from "styled-components";

import { colors, fontSizes } from "../generalStyle";

export const StyledFooter = styled.div`
  bottom: 0;
  border-top: 2px solid ${colors.primary.lighter};
  background-color: ${colors.secondary.base};
`;
export const StyledFirstRow = styled.div`
  padding: 20px 40px;
  width: calc(100% - 80px);
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1200px) {
    row-gap: 25px;
  }
  @media (max-width: 768px) {
  flex-direction: column;
    row-gap: 14px;
  }
`;

export const StyledFooterLink = styled(Link)`
  padding: 10px 15px;
  color: ${colors.primary.base};
  text-decoration: none;
  font-size: ${fontSizes.desktop.paragraph.base};
  width: fit-content;

  :hover {
    color: white;
  }
  @media (max-width: 768px) {
    font-size: ${fontSizes.desktop.paragraph.small};
  }
`;

export const StyledFooterSocialMedia = styled.div<{ name?: string }>`
  padding: 10px;
  background-color: ${colors.primary.base};
  border: 1px solid ${colors.primary.base};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.7s ease;

  :hover {
    cursor: pointer;
    background: white;
    border: 1px solid black;
    img {
      filter: ${(props) => {
        switch (props.name) {
          case "twitter":
            return "invert(53%) sepia(61%) saturate(3037%) hue-rotate(176deg) brightness(100%) contrast(91%);";
          case "youtube":
            return "invert(32%) sepia(98%) saturate(7135%) hue-rotate(355deg) brightness(110%) contrast(125%);";
          case "facebook":
            return "invert(49%) sepia(10%) saturate(3784%) hue-rotate(184deg) brightness(74%) contrast(83%);";
          case "instagram":
            return "unset;border-radius: 6px;   background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);";
          case "tiktok":
            return "unset;background-color:#000000;box-shadow:2px 2px #00f2ea,-2px -2px #ff0050;";
        }
      }};
    }
  }
`;
export const StyledSMImage = styled.img`
  height: 30px;
  width: 30px;
  @media (max-width: 768px) {
    height: 24px;
    width: 24px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 100px;
  width: fit-content;
  //border-top: 2px solid ${colors.primary.lighter};

  @media (max-width: 1200px) {
    width: 40%;
    align-items:flex-start;
    margin: 0;
  }
  
   @media (max-width: 768px) {
   align-items:center;
   width: 100%;
   }
   
  a > img {
    filter: grayscale(100%) invert(100%);
  }
`;
export const StyledFooterSocialMediaColumn = styled.div`
  justify-content: right;
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  row-gap: 20px;
  width: fit-content;
  flex-wrap: wrap;
  height: 100%;
  align-items: center;

  @media (max-width: 1200px) {
    width: auto;
  }
  @media (max-width: 768px) {
    justify-content: center;
    column-gap: 15px;
  }
  h2 {
    padding: 15px 0;
  }
`;
export const StyledHeaderText = styled.h2`
  color: ${colors.primary.darker};
  font-size: ${fontSizes.desktop.paragraph.large};
  margin: 0;
  width: 100%;
  padding: 15px 15px;
  @media (max-width: 768px) {
    font-size: ${fontSizes.desktop.paragraph.base};
  }
`;

export const StyledSecondRow = styled.div`
  width: calc(100% - 110px);
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 55px;
  border-top: 2px solid ${colors.primary.lighter};
  gap: 5px;
  img {
    height: 60px;
    width: 250px;
    object-fit: contain;
    @media (max-width: 768px) {
      height: 40px;
      width: 144px;
    }
  }
  img:hover {
    cursor: pointer;
  }
`;

export const StyledFooterText = styled.p`
  display: flex;
  justify-content: flex-start;
  font-size: ${fontSizes.desktop.paragraph.small};
  color: ${colors.primary.base};
`;
