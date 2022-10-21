import React from "react";

import { Border, SectionContainer, TitleSection } from "../Styles";
import { colors, fontSizes } from "../../generalStyle";
import { StyledPageEventInfo, StyledParagraph } from "./EventStyle";
import styled from "styled-components";
import { eventTranslates } from "../../Translates/Translates";
import { useNavigate } from "react-router-dom";
import { redirectLink } from "../../utils/redirectLink";

interface EventInfoProps {
  title: string;
  text: string;
  eventImage: string;
  imageAlt: string;
  date: string;
  time?: string;
  website?: string;
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  p {
    max-width: fit-content;
    font-size: ${fontSizes.desktop.paragraph.base};
  }
`;
const StyledBox = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  width: 100%;
  padding: 15px 0;
  row-gap: 20px;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
  }

  p {
    display: block;
  }

  p > span:hover {
     {
      cursor: pointer;
      text-dectimetion: underline;
    }
  }
`;

const StyledBoxHead = styled(StyledParagraph)`
  width: 100%;
  align-items: flex-start;
  font-size: 25px !important;
`;
const PictureWrapper = styled.div`
  width: 100%;

  img {
    object-fit: cover;
    object-position: bottom;
    height: 400px;
    width: 100%;
  }
`;
const BackButton = styled.button`
  width: fit-content;
  background-color: ${colors.primary.base};
  color: white;
  font-size: 16px;
  padding: 10px 25px;
  border-radius: 10px;
  position: absolute;
  border: 2px solid ${colors.primary.lighter};
  left: 40px;
  top: 120px;

  ::before {
    content: "\\00ab";
    position: absolute;
    font-size: 30px;
    opacity: 0;
    top: 16px;
    transform: translateY(-50%);
    left: -20px;
    transition: 0.5s;
  }

  :hover {
    ::before {
      opacity: 1;
      left: 5px;
    }

    border: 2px solid ${colors.primary.base};
    background-color: ${colors.primary.lighter};
  }

  @media (max-width: 1200px) {
    display: none;
    visibility: hidden;
  }
`;
export const EventInfo = (props: EventInfoProps) => {
  let navigate = useNavigate();

  return (
    <StyledPageEventInfo>
      <BackButton onClick={() => navigate(-1)}>{"Back"}</BackButton>
      <SectionContainer maxWidth={"1000"}>
        <TitleSection color={colors.primary.base}>{props.title}</TitleSection>
        <StyledContent>
          <PictureWrapper>
            <img src={props.eventImage} alt={props.imageAlt} />
          </PictureWrapper>
          <StyledParagraph textAlign="center">{props.text}</StyledParagraph>
          <Border />
          <StyledBox>
            <StyledBoxHead>
              {
                // @ts-ignore
                eventTranslates[localStorage.locale || "ro"]
              }
              :
            </StyledBoxHead>
            {props.date && (
              <StyledParagraph>Date: {props.date}</StyledParagraph>
            )}
            {props.time && (
              <StyledParagraph>Time: {props.time}</StyledParagraph>
            )}
            {props.website && (
              <StyledParagraph>
                Website:
                <span onClick={() => redirectLink(props.website)}>
                  {props.website}
                </span>
              </StyledParagraph>
            )}
          </StyledBox>
        </StyledContent>
      </SectionContainer>
    </StyledPageEventInfo>
  );
};
