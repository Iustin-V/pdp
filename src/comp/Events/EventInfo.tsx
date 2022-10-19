import React from "react";

import { SectionContainer, TitleSection } from "../Styles";
import { colors } from "../../generalStyle";
import {
  StyledMedia,
  StyledPageEventInfo,
  StyledParagraph,
} from "./EventStyle";
import styled from "styled-components";
import { eventTranslates } from "../../Translates/Translates";
import linkGenerate from "../../generalFunction";
import { Link } from "react-router-dom";

interface EventInfoProps {
  title: string;
  text: string;
  eventImage: string;
  imageAlt: string;
  date: string;
  ora?: string;
  site?: string;
}
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  gap: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const StyledBox = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  align-items: flex-start;
`;

const StyledBoxHeader = styled(StyledParagraph)`
  top: -39px;
  width: fit-content;
  position: relative;
  left: -115px;
  border: 5px solid blue;
  background: white;
`;
const StyledBoxHead = styled(StyledParagraph)`
  margin-bottom: 25px;
  padding: 0 0 15px;
  align-items: flex-start;
`;
const PictureWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  object-position: 50% 50%;
`;
const BackButton = styled.button`
  width: fit-content;
  height: 100px;
  background-color: ${colors.primary.base};
  color: white;
  font-size: 26px;
  padding: 20px;
  border-radius: 15px;
  position: absolute;
  left: 40px;
  top: 120px;
  :hover {
    opacity: 80%;
  }
`;
export const EventInfo = (props: EventInfoProps) => {
  return (
    <StyledPageEventInfo>
      <Link style={{ textDecoration: "none" }} to={'/'}>
        <BackButton>{"< Back"}</BackButton>
      </Link>
      <SectionContainer maxWidth={"1000"}>
        <TitleSection color={colors.primary.base}>{props.title}</TitleSection>
        <StyledContent>
          <PictureWrapper>
            <StyledMedia
              src={props.eventImage}
              alt={props.imageAlt}
              height={"800px"}
            />
          </PictureWrapper>
          <StyledParagraph>{props.text}</StyledParagraph>
          <StyledBox>
            <StyledBoxHead>
              {
                // @ts-ignore
                eventTranslates[localStorage.locale || "ro"]
              }
            </StyledBoxHead>
            <StyledParagraph>Date: {props.date}</StyledParagraph>
            <StyledParagraph>Time: 20:00{props.ora}</StyledParagraph>
            <StyledParagraph>
              Website: www.muieGarda.ro{props.site}
            </StyledParagraph>
          </StyledBox>
        </StyledContent>
      </SectionContainer>
    </StyledPageEventInfo>
  );
};
