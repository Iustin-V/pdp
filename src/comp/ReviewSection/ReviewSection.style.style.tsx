import styled from "styled-components";
import {colors, fontSizes} from "../../generalStyle";

export const TitleReviewSection = styled.h1<{ color: string }>`
  font-family: "KaushanScript";
  font-size: ${fontSizes.desktop.heading.small};
  color: ${(props) => props.color};
  text-align: center;
  margin:0;
  @media (max-width: 768px) {
    font-size: ${fontSizes.mobile.heading.base};
  }
`;

export const QuoteReviewSection = styled.q`
  color: #002366;
  font-family: "Nunito-Italic";
  font-size: ${fontSizes.desktop.paragraph.small};
  font-weight: 500;
  font-style: italic;
  line-height: 30px;
  width: initial;
  max-width: initial;
`;
export const StyledReviewSection = styled.div`
  background-color: rgb(248, 236, 212);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const InfoReviewer = styled.p`
  font-size: ${fontSizes.desktop.paragraph.small};
  font-weight: 500;
  text-align: center;
`;

export const InsideSlideWrapper = styled.div`
  margin-left: 15%;
  margin-right: 15%;
  text-align: center;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const StyledReviewIcon=styled.img`
height:100px;
`

export const StyledTitleContainer=styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
margin:0 auto 25px;
border:solid;
border-width:0 0 1px 0;
border-color:${colors.primary.base};
width:fit-content;

 @media(max-width:1200px){
 flex-direction:column;
 padding-bottom:10px;
 }
`
export const StyledRoundedImage=styled.img`
  border-radius: 50%;
  height:150px !important;
  width:150px !important;
  margin: auto;
`
