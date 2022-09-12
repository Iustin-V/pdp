import styled from "styled-components";
import Background from '../images/TimeLine.Background.png'
import {colors, fontSizes} from "../../generalStyle";

export const TitleAboutSection = styled.h1`
  font-family: "KaushanScript";
  font-size: ${fontSizes.heading.base};
  color: ${colors.primary.base};
`

export const AboutWrapper = styled.div`
          background-image: url(${Background});
          background-position: top;
          background-repeat: no-repeat;
          background-color: white;
          text-align: center;
          padding-top: 5%;
          padding-bottom: 5%;
    `
;

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


