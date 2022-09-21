import React from "react";

import { StyledPageWrapper } from "./Styles";
import { MainPage } from "./MainPage/MainPage";
import { AboutSection } from "./AboutStoryTeacherSection/AboutSection";
import { TimeLineSection } from "./TimeLineSection/TimeLineSection";
import { WeekStorySection } from "./WeekStorySection/WeekStorySection";
import { ReviewSection } from "./ReviewSection/ReviewSection";
import { Partners } from "./Partners/Partners";
import { PrincipalesLinks } from "./PrincipalesLinksSection/PrincipalesLinks";

export const Home = () => {
  return (
    <>
      <StyledPageWrapper>
        <MainPage />
      </StyledPageWrapper>
      <PrincipalesLinks />
      <AboutSection />
      <TimeLineSection />
      <WeekStorySection />
      <ReviewSection />
      <Partners />
    </>
  );
};
