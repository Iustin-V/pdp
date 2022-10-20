import styled from "styled-components";

import { colors, fontSizes } from "../../generalStyle";
import { Divider } from "../Divider";
import linkGenerate from "../../generalFunction";
import { Link } from "react-router-dom";
import {
  StyledButton,
  StyledContent,
  StyledEventCardContainer,
  StyledMedia,
  StyledParagraph,
  StyledTitle,
} from "./EventStyle";
import { buttonTranslates } from "../../Translates/Translates";

interface EventCardProps {
  title: string;
  text: string;
  eventImage: string;
  imageAlt: string;
  date: string;
}
const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  justify-content: center;
`;
const StyledElipsisParagraph = styled(StyledParagraph)`
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  

`;
export const EventCard = (props: EventCardProps) => {
  console.log("eventprops", props);
  return (
    <>
      <Divider date={props.date} />
      <StyledEventCardContainer>
        <StyledTitle>{props.title}</StyledTitle>
        <StyledContent>
          <StyledMedia src={props.eventImage} alt={props.imageAlt} />
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
