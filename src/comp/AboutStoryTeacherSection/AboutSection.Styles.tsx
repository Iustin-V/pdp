import styled from "styled-components";
import Background from '../images/TimeLine.Background.png'
import {colors, fontSizes} from "../../generalStyle";

export const TitleAboutSection = styled.h1`
  font-family: "KaushanScript";
  font-size: ${fontSizes.heading.base};
  color: ${colors.primary.base};
`

export const PrincipalDiv = styled.div`
  background-color: black;
`;

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


export const LittleImage = styled.image<{src?:string}>`
  background-image: ${(props) => `url(${props.src})`};
`


