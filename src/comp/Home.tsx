import React from "react";

import { AboutSection } from "./AboutStoryTeacherSection/AboutSection";
import { MainPage } from "./MainPage/MainPage";
import { Partners } from "./Partners/Partners";
import { PrincipalesLinks } from "./PrincipalesLinksSection/PrincipalesLinks";
import { ReviewSection } from "./ReviewSection/ReviewSection";
import { StyledHomeWrapper, StyledPageWrapper } from "./Styles";
import { TimeLineSection } from "./TimeLineSection/TimeLineSection";
import { WeekStorySection } from "./WeekStorySection/WeekStorySection";

export const Home = () => {
  return (
    <StyledHomeWrapper>
      <StyledPageWrapper>
        <MainPage />
      </StyledPageWrapper>
      <PrincipalesLinks />
      <AboutSection />
      <TimeLineSection />
      <WeekStorySection />
      <ReviewSection />
      <Partners />
    </StyledHomeWrapper>
  );
};
