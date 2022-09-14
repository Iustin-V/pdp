import React from "react";

import { StyledPageWrapper } from "./Styles";
import { MainPage } from "./MainPage/MainPage";
import { AboutSection } from "./AboutStoryTeacherSection/AboutSection";
import { TimeLineSection } from "./TimeLineSection/TimeLineSection";
import { WeekStorySection } from "./WeekStorySection/WeekStorySection";
import { ReviewSection } from "./ReviewSection/ReviewSection";

export const Home = () => {
  return (
    <>
      <StyledPageWrapper>
        <MainPage />
      </StyledPageWrapper>
      <AboutSection />
      <TimeLineSection />
      <WeekStorySection />
      <ReviewSection />
    </>
  );
};
