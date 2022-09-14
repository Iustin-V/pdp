import styled from "styled-components";
import { fontSizes } from "../../generalStyle";

export const TitleReviewSection = styled.h1<{ color: string }>`
  font-family: "KaushanScript";
  font-size: ${fontSizes.desktop.heading.small};
  color: ${(props) => props.color};
  text-align: center;
  width:fit-content;
  margin:0 auto 25px;
  border-bottom: 2px solid #234b92ff;
  padding-bottom: 25px;
  @media (max-width: 768px) {
    font-size: ${fontSizes.mobile.heading.small};
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
export const NameReviewer = styled.p`
  font-size: ${fontSizes.desktop.paragraph.small};
  font-weight: 500;
  text-align: center;
`;

export const InsideSlideWrapper = styled.div`
  margin-left: 15%;
  margin-right: 15%;
  text-align: center;
`;
