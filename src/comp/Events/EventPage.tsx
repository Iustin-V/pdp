import React from "react";

import { StyledPageCourseInfo } from "../CourseInfo/CouseInfo";
import { SectionContainer, TitleSection } from "../Styles";
import { events, StyledEventsPage } from "./Events";
import { colors } from "../../generalStyle";
import { EventCardData } from "../../App";

interface EventPageInterface {
  title: string;
}

export const EventPage = (props: EventPageInterface) => {
 const localvalues= React.useContext(EventCardData);

  return (
    <StyledEventsPage>
      <StyledPageCourseInfo>
        <SectionContainer>
          <TitleSection color={colors.primary.base}>
            {localvalues.title}
          </TitleSection>
        </SectionContainer>
      </StyledPageCourseInfo>
    </StyledEventsPage>
  );
};
