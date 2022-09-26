import React from "react";
import styled from "styled-components";

import { colors, fontSizes } from "../../generalStyle";
import { Divider } from "../Divider";
import linkGenerate from "../../generalFunction";
import { Link } from "react-router-dom";
import { useGlobalState } from "../UseEventState";
import { dispatchEventCardData } from "../../App";

const StyledEventCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 850px;
  @media (max-width: 768px) {
    align-items: center;
    max-width: calc(100vw - 80px);
  }
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
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const StyledTitle = styled.p`
  font-family: "Lucida Grande", Tahoma, Verdana, Arial, sans-serif;
  font-size: ${fontSizes.mobile.heading.base};
  margin: 0;
  color: ${colors.primary.base};

  @media (max-width: 768px) {
    font-weight: 700;
    font-size: 18px;
    text-align: center;
  }
`;
const StyledParagraph = styled.p`
  width: 100%;
  margin: 0;
  flex-direction: column;
  gap: 10px;
  display: flex;
  color: #002366;
  @media (max-width: 768px) {
    font-size: ${fontSizes.mobile.paragraph.small};
    align-items: center;
    
  }
  }
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
            <Link
              style={{ textDecoration: "none" }}
              to={linkGenerate(props.title)}
            >
              <StyledButton
                onClick={
                  /*// @ts-ignore*/
                  dispatchEventCardData({
                    title: props.title,
                    date: props.date,
                    image: props.eventImage,
                    imageAlt: props.imageAlt,
                  })
                }
              >
                Afla mai mult
              </StyledButton>
            </Link>
          </StyledParagraph>
        </StyledContent>
      </StyledEventCardContainer>
    </>
  );
};
