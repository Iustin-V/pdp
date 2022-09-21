import React from "react";

import { StyledPageWrapper } from "./Styles";
import { MainPage } from "./MainPage/MainPage";
import { AboutSection } from "./AboutStoryTeacherSection/AboutSection";
import { TimeLineSection } from "./TimeLineSection/TimeLineSection";
import { WeekStorySection } from "./WeekStorySection/WeekStorySection";
import { ReviewSection } from "./ReviewSection/ReviewSection";
import { Partners } from "./Partners/Partners";
import { PrincipalesLinks } from "./PrincipalesLinksSection/PrincipalesLinks";

interface HomeProps {
  mainPageData: any;
}
export const Home = (props: HomeProps) => {
  return (
    <>
      <StyledPageWrapper>
        <MainPage firstSection={props?.mainPageData?.firstSection} />
      </StyledPageWrapper>
      <PrincipalesLinks  mainLinks={props?.mainPageData?.mainLinks}/>
      <AboutSection aboutSectionData={props?.mainPageData?.about}/>
      <TimeLineSection />
      <WeekStorySection />
      <ReviewSection />
      <Partners />
    </>
  );
};
