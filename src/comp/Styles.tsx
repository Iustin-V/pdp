import styled from "styled-components";
import {fontSizes} from "../generalStyle";

export const StyledWrapper = styled.div`
  overflow-x: hidden;
  font-family: "Lucida Grande", Tahoma, Verdana, Arial, sans-serif;
  background-color: #fafafa;
`;
export const StyledPageWrapper = styled.div<{ login?: boolean }>`
  height: 750px;
  margin-top: 85px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 600px;
  }
`;
export const MainContentWrapper = styled.div<{
    padding?: string;
    flexDirection: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  font-size: ${fontSizes.desktop.paragraph.large};
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: ${(props) => props.padding};
`;
export const StyledToTopButton = styled.button<{ bottom: string }>`
  height: 50px;
  width: 50px;
  opacity: 70%;
  background-color: #7d7d7d;
  position: fixed;
  right: 40px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 37%;
  overflow: hidden;
  transition: bottom 200ms ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none !important;

  appearance: none;
  bottom: ${(props) => props.bottom};
`;
export const StyledImageNew = styled.img`
  filter: invert(100%);
  height: 30px;
`;
export const MainPagePhoto = styled.div<{ backgroundImage: string }>`
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  transform: background-position 1ms;
  background-attachment: fixed;
  background-size: cover;
  background-image: url(${(props) => props.backgroundImage});
  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;
export const MainPageText = styled.p`
  color: whitesmoke;
  width: 50%;
  text-shadow: 1px 1px black;
  font-size: ${fontSizes.desktop.paragraph.large};
  border: solid orange;
  border-width: 0 0 0 6px;
  padding-left: 50px;
  transform: translateX(70%);
  opacity: 0;
  animation: slide-in-anim 1.5s ease-out forwards;

  @keyframes slide-in-anim {
    20% {
      opacity: 0;
    }
    60% {
      transform: translateX(-10%);
    }
    75% {
      transform: translateX(5%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @media (max-width: 1200px) {
    padding: 50px 0 0 0;
    width: 100%;
    border-width: 6px 0 0 0;
    @media (max-width: 768px) {
      border-width: 3px 0 0 0;
      font-size: ${fontSizes.mobile.paragraph.base};
    }
  }
`;
export const MainTitle = styled.p`
  font-size: ${fontSizes.desktop.heading.small};
  width: 50%;
  color: orange;
  text-shadow: 2px 2px black;
  font-weight: 700;
  padding-right: 50px;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0;
    text-align: center;
    @media (max-width: 768px) {
      font-size: ${fontSizes.mobile.heading.base};
    }
  }
`;

export const PageContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  margin: auto;
  @media (max-width: 1200px) {
    max-width: 800px;
    flex-direction: column;
  }
`;
export const SectionContainer = styled.div`
  width: calc(100% - 80px);
  max-width: 1440px;
  padding: 40px;
  margin: 0 auto;
  position: relative;
`;

export const TitleSection = styled.h1<{ color: string }>`
  font-family: "KaushanScript";
  font-size: ${fontSizes.desktop.heading.base};
  color: ${(props) => props.color};
  text-align: center;
  margin-top: 0;
  @media (max-width: 768px) {
    font-size: ${fontSizes.mobile.heading.base};
  }
`;

export const ParagraphItalicStyled = styled.p`
  text-align: center;
  color: #002366;
  font-family: "Nunito-Italic";
  font-size: ${fontSizes.desktop.paragraph.base};
  font-weight: 500;
  font-style: italic;
  line-height: 3=0px;
  width: initial;
  max-width: initial;

  @media (max-width: 768px) {
    font-size: ${fontSizes.desktop.paragraph.small};
  }
`;

export const BackgroundWrapper = styled.div<{
    imgUrl: string;
    separatePage?: boolean;
}>`
  background-image: url(${(props) => props.imgUrl});
  background-position: top;
  background-repeat: no-repeat;
  background-color: white;
  background-size: 100%;
  text-align: center;
  ${(props) => props.separatePage && "padding-top: 50px;"}
`;

export const MarginTOPContainer = styled.div`
  margin-top: 50px;

  @media (max-width: 1200px) {
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;
export const WrapperCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 30px;
  justify-content: center;
`;

export const Border =styled.hr`
  border: 0;
  clear: both;
  display: block;
  margin: 2.4rem auto;
  text-align: center;
  width: 100%;
  background: rgba(1, 15, 30, 0.1);
  height: 1px;
  overflow: hidden;
  position: relative;
  
  &:after {
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    animation-name: progress;
    background: #002366;
    content: "";
    display: block;
    height: 1px;
    position: absolute;
    width: 80px;
  }

  @keyframes progress {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(1440px);
    }
  }
  
`
