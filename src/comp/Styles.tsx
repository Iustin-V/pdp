import styled from "styled-components";
import bookshelf from "./images/bookshelf.png";
import {colors, fontSizes} from "../generalStyle";

export const StyledWrapper = styled.div`
  overflow-x: hidden;
  font-family: "Lucida Grande", Tahoma, Verdana, Arial, sans-serif;

  background-color: #fafafa;
`;
export const StyledPageWrapper = styled.div`
  height: calc(100vh - 80px);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
export const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;
export const StyledToTopButton = styled.button<{ bottom: string }>`
  height: 50px;
  width: 50px;
  background-color: #002366;
  position: fixed;
  right: 40px;
  //bottom: 40px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 22%;
  overflow: hidden;
  transition: bottom 200ms ease-in-out;
  bottom: ${(props) => props.bottom};
`;
export const StyledImageNew = styled.img`
  filter: invert(100%);
  height: 30px;
`;
export const MainPagePhoto = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${bookshelf});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const MainPageText = styled.p`
  color: whitesmoke;
  width: 600px;
  text-shadow: 1px 1px black;
  font-size: 25px;
  border-left: 6px solid orange;
  padding-left: 50px;
`;
export const MainTitle = styled.p`
  font-size: 45px;
  width: 600px;
  color: orange;
  text-shadow: 2px 2px black;
  font-weight: 700;
  padding-right: 50px;
`;
export const IconWrapper = styled.div<{ top: string }>`
  width: 80vw;
  height: 300px;
  background-color: wheat;
  position: absolute;
  top: ${(props) => props.top};
  border-radius: 50px;
  border:10px solid orange;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TitleSection = styled.h1`
  font-family: "KaushanScript";
  font-size: ${fontSizes.heading.base};
  color: ${colors.primary.base};

  @media (max-width: 768px) {
    font-size: ${fontSizes.heading.small};
  }
`

export const ParagraphItalicStyled = styled.p`
  margin-left: 15%;
  margin-right: 15%;
  text-align: center;
  color: #002366;
  font-family: "Nunito-Italic";
  font-size: ${fontSizes.paragraph.base};
  font-weight: 500;
  font-style: italic;
  line-height: 30px;
  width: initial;
  max-width: initial;
`;

export const AboutWrapper = styled.div<{ imgUrl: string }>`
          background-image: url(${(props) => props.imgUrl});
          background-position: top;
          background-repeat: no-repeat;
          background-color: white;
          text-align: center;
          padding-top: 5%;
          padding-bottom: 5%;
    `
;

