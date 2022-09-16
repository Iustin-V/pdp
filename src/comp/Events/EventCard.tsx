import styled from "styled-components";

import { colors } from "../../generalStyle";
import { Divider } from "../Divider";

const StyledEventCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 850px;
`;
const StyledMedia = styled.img`
  height: 200px;
`;
const StyledContent = styled.div`
  display: inherit;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  gap: 50px;
`;
const StyledTitle = styled.p`
  font-family: "Lucida Grande", Tahoma, Verdana, Arial, sans-serif;
  font-size: 30px;
  margin: 0;
  color: ${colors.primary.base};
`;
const StyledParagraph = styled.p`
  width: 500px;
  margin: 0;
  flex-direction: column;
  gap: 10px;
  display: flex;
  color: #002366;

`;
const StyledButton = styled.button`
  background-color: #002366;
  width: 150px;
  border-radius: 12px;
  border: none;
  color: white;
  padding: 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  font-size: 14px;
  cursor: pointer;
`;
interface EventCardProps {
  title: string;
  text: string;
  eventImage: string;
  imageAlt: string;
  date: string;
}
export const EventCard = (props: EventCardProps) => {
  return (
    <>
      <Divider date={props.date} />
      <StyledEventCardContainer>
        <StyledTitle>{props.title}</StyledTitle>
        <StyledContent>
          <StyledMedia src={props.eventImage} alt={props.imageAlt} />
          <StyledParagraph>
            {props.text}
            <StyledButton>Afla mai mult</StyledButton>
          </StyledParagraph>
        </StyledContent>
      </StyledEventCardContainer>
    </>
  );
};
