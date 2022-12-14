import { Link } from "react-router-dom";

import styled from "styled-components";

import { buttonTranslates } from "../../Translates/Translates";
import linkGenerate from "../../generalFunction";
import { Divider } from "../Divider";
import {
  MediaWrapper,
  StyledButton,
  StyledContent,
  StyledEventCardContainer,
  StyledMedia,
  StyledParagraph,
  StyledTitle,
} from "./EventStyle";

interface EventCardProps {
  title: string;
  text: string;
  eventImage: string;
  date: string;
}
const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  justify-content: center;
  width: 70%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const StyledElipsisParagraph = styled(StyledParagraph)`
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const EventCard = (props: EventCardProps) => {
  return (
    <>
      <Divider date={props.date} />
      <StyledEventCardContainer>
        <StyledTitle>{props.title}</StyledTitle>
        <StyledContent>
          <MediaWrapper>
            <StyledMedia src={props.eventImage} alt={props.title} />
          </MediaWrapper>
          <StyledFlexContainer>
            <StyledElipsisParagraph>{props.text}</StyledElipsisParagraph>
            <Link
              style={{ textDecoration: "none" }}
              to={linkGenerate(props.title)}
            >
              <StyledButton>
                {
                  // @ts-ignore
                  buttonTranslates[localStorage?.locale || "ro"]
                }
              </StyledButton>
            </Link>
          </StyledFlexContainer>
        </StyledContent>
      </StyledEventCardContainer>
    </>
  );
};
