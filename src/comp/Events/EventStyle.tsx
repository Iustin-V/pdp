import styled from "styled-components";

import { colors, fontSizes } from "../../generalStyle";

export const StyledEventCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 850px;
  @media (max-width: 768px) {
    align-items: center;
    max-width: calc(100vw - 80px);
  }
`;
export const MediaWrapper = styled.div`
  height: 200px;
  overflow: hidden;
  width: 30%;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
export const StyledMedia = styled.img<{ height?: string }>`
  height: ${(props) => props.height || "200px"};
  object-fit: cover;
  width: 100%;
  animation: image-position 10s infinite;
  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    animation: image-position-mobile 10s infinite;
  }
  @keyframes image-position {
    0% {
      object-position: left;
    }
    50% {
      object-position: right;
    }
    100% {
      object-position: left;
    }
  }
  @keyframes image-position-mobile {
    0% {
      object-position: top;
    }
    50% {
      object-position: bottom;
    }
    100% {
      object-position: top;
    }
  }
`;
export const StyledContent = styled.div`
  display: inherit;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const StyledTitle = styled.p`
  font-family: "Lucida Grande", Tahoma, Verdana, Arial, sans-serif;
  font-size: ${fontSizes.mobile.heading.base};
  margin: 0;
  color: ${colors.primary.base};

  @media (max-width: 768px) {
    font-weight: 700;
    font-size: 18px;
    text-align: center;
  }
`;
export const StyledParagraph = styled.p<{ textAlign?: string }>`
  width: 100%;
  margin: 0;
  flex-direction: column;
  gap: 10px;
  display: flex;
  color: ${colors.primary.base};
  ${(props) => `text-align: ${props.textAlign};
  line-height:1.6rem;`};
  @media (max-width: 768px) {
    font-size: ${fontSizes.mobile.paragraph.small};
    align-items: center;
  }
`;
export const StyledPageEventInfo = styled.div`
  margin-top: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  div > h1 {
    max-width: 900px;
    margin: 0 auto 40px;
  }
`;
export const StyledButton = styled.button`
  background-color: ${colors.primary.base};
  width: fit-content;
  border-radius: 12px;
  border: none;
  color: white;
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  font-size: 14px;
  cursor: pointer;

  :hover {
    background-color: ${colors.primary.lighter};
  }
`;
