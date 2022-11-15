import React, { useState } from "react";

import styled from "styled-components";

import { PDPContext } from "../../App";
import { colors } from "../../generalStyle";
import { getData } from "../../utils/getData";
import { CreateButton } from "../CreateButton";
import { EditButton } from "../EditButton";
import {
  AdminButtons,
  SectionContainer,
  TitleSection,
  Tooltip,
} from "../Styles";
import { EventCard } from "./EventCard";

const StyledEventsPage = styled.div`
  margin-top: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
const StyledContent = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  gap: 30px;
`;
const AnimatedContainer = styled.div`
  transform: translateX(70%);
  opacity: 0;
  animation: slide-in-anim-right 1.5s ease-out forwards;

  :nth-child(even) {
    transform: translateX(-70%);

    animation: slide-in-anim-left 1.5s ease-out forwards;
  }

  @keyframes slide-in-anim-right {
    20% {
      opacity: 0;
    }
    60% {
      transform: translateX(-10%);
    }
    75% {
      transform: translateX(5%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes slide-in-anim-left {
    20% {
      opacity: 0;
    }
    60% {
      transform: translateX(10%);
    }
    75% {
      transform: translateX(-5%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
  }
`;

export const Events = () => {
  const contextLocal: {
    editFunction: (data: any, type: string) => boolean;
    allCategories: any[];
  } = React.useContext(PDPContext);
  const [dataSection, setDataSection] = useState({
    content: [{ titleSection: "", text: "", image: "", date: "" }],
    title: "",
  });
  React.useEffect(() => {
    setDataSection(getData(contextLocal?.allCategories, "EventsSection"));
  }, []);
  // @ts-ignore
  const eventCards = dataSection.content?.map((event, key) => {
    return (
      <AnimatedContainer key={key}>
        {localStorage.user._id === "633fc7c57debf1918eb52792"&& (
          <button
            className={"delete-button"}
            onClick={() => {
              contextLocal?.editFunction(
                { data: dataSection, index: key },
                "delete"
              );
            }}
          >
            <Tooltip>Delete this event</Tooltip>X
          </button>
        )}
        <EventCard
          key={key}
          title={event.titleSection}
          text={event.text}
          eventImage={event.image}
          date={event.date}
        />
      </AnimatedContainer>
    );
  });
  return (
    <StyledEventsPage>
      <SectionContainer>
        <AdminButtons>
          <CreateButton
            createFunction={contextLocal?.editFunction}
            sectionText={dataSection}
            createType="createEvent"
          />

          <EditButton
            editFunction={contextLocal?.editFunction}
            sectionText={dataSection}
          />
        </AdminButtons>
        <StyledContent>
          {
            <TitleSection color={colors.primary.base}>
              {dataSection?.title}
            </TitleSection>
          }
          {eventCards}
        </StyledContent>
      </SectionContainer>
    </StyledEventsPage>
  );
};
