import styled from "styled-components";
import Background from '../images/TimeLine.Background.png'
import {colors, fontSizes} from "../../generalStyle";

export const TitleSection = styled.h1`
  font-family: "KaushanScript";
  font-size: ${fontSizes.heading.base};
  color: ${colors.primary.base};

  @media (max-width: 768px) {
    font-size: ${fontSizes.heading.small};
  }
`


export const AboutWrapper = styled.div`
          background-image: url(${Background});
          background-position: top;
          background-repeat: no-repeat;
          background-color: white;
          text-align: center;
          padding-top: 5%;
          padding-bottom: 5%;
          height: 100vh;
    `
;

export const ParagraphStyled = styled.p`
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



