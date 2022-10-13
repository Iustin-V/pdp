import styled from "styled-components";

import {SectionContainer, TitleSection} from "../Styles";
import {colors} from "../../generalStyle";
import {EventCard} from "./EventCard";
import React, {useState} from "react";
import {PDPContext} from "../../App";
import {getData} from "../../utils/getData";

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

const events = [
    {
        title: "Cum să-mi transform visul în realitate?",
        text: "A fost odată ca niciodată, că de n-ar fi, nu s-ar povesti! Câtă curiozitate și plăcere încă ne stârnesc cuvintele acestea, ce așteptare nerăbdătoare le urmează pe ele și ne farmecă pe noi? Poveștile ne caută prin suflete și răscolesc amintiri până găsesc cel mai vulnerabil colțișor al inimii și acolo râcâie, mângâie, și în final vindecă. Cum povestim în așa fel încât să vindecăm rănile ascunse acolo, în adânc? Ce cuvinte și imagini folosim, în ce contexte și de…",
        image: "https://upcdn.io/W142hJk/raw/demo/9q6Bkfr.jpg",
        alt: "eventPicture",
        date: "Jan 01.01.2022",
    },
];

export const Events = () => {
    const contextLocal: object = React.useContext(PDPContext);
    const [dataSection, setDataSection] = useState([{
        content: [{titleSection: '', text: '', image: '', alt: '', date: ''}],
        title: ''
    }])
    React.useEffect(() => {
        setDataSection(getData(contextLocal, "EventsSection"))
    }, []);
// @ts-ignore
    const eventCards = dataSection.content?.map((event) => (
        <AnimatedContainer>
            <EventCard
                key={event.title}
                title={event.titleSection}
                text={event.text}
                eventImage={event.image}
                imageAlt={event.alt}
                date={event.date}

            />
        </AnimatedContainer>
    ));

    return (
        <StyledEventsPage>
            <SectionContainer>
                <StyledContent>
                    { // @ts-ignore
                        <TitleSection color={colors.primary.base}>{dataSection.title}</TitleSection>
                    }
                    {eventCards}
                </StyledContent>
            </SectionContainer>
        </StyledEventsPage>
    );
};
