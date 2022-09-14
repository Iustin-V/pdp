import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./comp/Home";
import { StyledWrapper } from "./comp/Styles";
import { Courses } from "./comp/Courses";
import { WeekStorySection } from "./comp/WeekStorySection/WeekStorySection";
import { Navbar } from "./comp/Navbar";
import { ToTopButton } from "./comp/ToTopButton";
import { Footer } from "./comp/Footer";
import { WorkInProgress } from "./comp/WorkInProgress";
import {StyledProgressBar, StyledProgressContainer} from "./comp/Navbar-Style";

function App() {
  const topRef = React.useRef<null | HTMLDivElement>(null);
  const [isTopButton, setTopButton] = React.useState(false);

  const [scrollWidth, setScrollWidth] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const percentScrolled =
          (window.scrollY / (document.body.clientHeight - window.innerHeight)) *
          100;
      if (window.scrollY > window!.visualViewport!.height - 160) {
        setTopButton(true);
      } else {
        if (window.scrollY < window!.visualViewport!.height + 80) {
         setTopButton(false);
        }
      }
      setScrollWidth(percentScrolled);
    });
  }, [window.scrollY]);

  return (
    <StyledWrapper>
      <BrowserRouter>
        <div ref={topRef} />
        <Navbar setTopButton={setTopButton} />
        <StyledProgressContainer>
          <StyledProgressBar width={`${scrollWidth}%`} />
        </StyledProgressContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursuri" element={<WorkInProgress />} />
          <Route
            path="/povestea-saptamanii"
            element={<WeekStorySection separatePage={true} />}
          />
          <Route path="/evenimente" element={<WorkInProgress />} />
          <Route path="/cutia-cu-povesti" element={<WorkInProgress />} />
          <Route path="/vorbeste-cu-profa" element={<WorkInProgress />} />
          <Route path="/blog" element={<WorkInProgress />} />
        </Routes>
        <ToTopButton topRef={topRef} isTopButton={isTopButton} />
        <Footer />
      </BrowserRouter>
    </StyledWrapper>
  );
}

export default App;
