import React from "react";

import { StyledPageWrapper } from "./Styles";
import { MainPage } from "./MainPage/MainPage";
import { AboutSection } from "./AboutStoryTeacherSection/AboutSection";
import { TimeLineSection } from "./TimeLineSection/TimeLineSection";
import { WeekStorySection } from "./WeekStorySection/WeekStorySection";
import { ReviewSection } from "./ReviewSection/ReviewSection";
import { Partners } from "./Partners/Partners";
import { MainLinks } from "./MainLinksSection/MainLinks";

export const Home = () => {
  return (
    <>
      <StyledPageWrapper>
        <MainPage />
      </StyledPageWrapper>
      <MainLinks />
      <AboutSection />
      <TimeLineSection />
      <WeekStorySection notSeparatePage={true} />
      <ReviewSection />
      <Partners />
    </>
  );
};
