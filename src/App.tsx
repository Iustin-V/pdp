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
import {
  StyledProgressBar,
  StyledProgressContainer,
} from "./comp/Navbar-Style";

function App() {
  const topRef = React.useRef<null | HTMLDivElement>(null);
  const [isTopButton, setTopButton] = React.useState(false);

  return (
    <StyledWrapper>
      <BrowserRouter>
        <div ref={topRef} />
        <Navbar setTopButton={setTopButton} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursuri" element={<Courses />} />
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
