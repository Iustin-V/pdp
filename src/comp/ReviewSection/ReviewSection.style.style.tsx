import styled from "styled-components";
import {fontSizes} from "../../generalStyle";


export const TitleReviewSection = styled.h1<{ color: string }>`
  font-family: "KaushanScript";
  font-size: 40px;
  color: ${(props) => props.color};
  text-align: center;
  margin-left: 25%;
  margin-right: 25%;
  border-bottom: 2px solid #234B92FF;
  padding-bottom: 60px;
`

export const QuoteReviewSection = styled.q`
 
  color: #002366;
  font-family: "Nunito-Italic";
  font-size: ${fontSizes.paragraph.small};
  font-weight: 500;
  font-style: italic;
  line-height: 30px;
  width: initial;
  max-width: initial;
`
export const SliderWrapper = styled.div`
  padding-top: 10%;
  padding-bottom: 10%;
  background-color: rgb(248, 236, 212);
`
export const NameReviewer = styled.p`
  font-size: ${fontSizes.paragraph.small};
  font-weight: 500;
  text-align: center;
`

export const InsideSlideWrapper = styled.div`
  margin-left: 15%;
  margin-right: 15%;
  text-align: center;
`