import React from "react";

import arrow from "./images/arrow.png";
import bookshelf from "./images/bookshelf.jpg";

import {
  StyledPageWrapper,
  MainContentWrapper,
  StyledToTopButton,
  StyledImageNew,
  MainPagePhoto,
  MainPageText,
  MainTitle,
  IconWrapper,
} from "./Styles";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MainPage } from "./MainPage/MainPage";
import { ToTopButton } from "./ToTopButton";

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
        <MainContentWrapper></MainContentWrapper>
      </StyledPageWrapper>
      <ToTopButton topRef={topRef} isTopButton={isTopButton} />
      <Footer />
    </>
  );
};
