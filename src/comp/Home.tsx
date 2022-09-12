import React from "react";

import { StyledPageWrapper, MainContentWrapper } from "./Styles";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MainPage } from "./MainPage/MainPage";
import { ToTopButton } from "./ToTopButton";
import { AboutSection } from "./AboutStoryTeacherSection/AboutSection";
import { TimeLineSection } from "./HowWhyStoryFunctioningSection/TimeLineSection";
import { Experiences } from "./Experiences/Experiences";

export const Home = () => {
  const topRef = React.useRef<null | HTMLDivElement>(null);

  const [isTopButton, setTopButton] = React.useState(false);

  return (
    <>
      <Navbar setTopButton={setTopButton} />
      <StyledPageWrapper ref={topRef}>
        <MainPage />
      </StyledPageWrapper>
      <StyledPageWrapper>
        <MainContentWrapper flexDirection='row'/>
      </StyledPageWrapper>
      <AboutSection />
      <TimeLineSection />
      <StyledPageWrapper>
        <Experiences />
      </StyledPageWrapper>
      <ToTopButton topRef={topRef} isTopButton={isTopButton} />
      <Footer />
    </>
  );
};
