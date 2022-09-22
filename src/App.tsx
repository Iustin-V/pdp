import React from "react";
import axios from "axios";

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
import { Contact } from "./comp/Contact/Contact";
import { Events } from "./comp/Events/Events";
import ScrollToTop from "./ScrollToTop";

export const PDPContext = React.createContext({});

function App() {
  const topRef = React.useRef<null | HTMLDivElement>(null);
  const [isTopButton, setTopButton] = React.useState(false);
  const [allCategories, setAllCategories] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(
        `http://localhost:1337/api/pdps?locale=${
          localStorage.locale || "ro"
        }&populate=deep`
      )
      .then(({ data }) => {
        //@ts-ignore
        setAllCategories(data.data[0]?.attributes);
      })
      .catch((error) => setError(error));
  }, []);

  return (
    <StyledWrapper>
      <PDPContext.Provider value={allCategories}>
        <BrowserRouter>
          <div ref={topRef} />
          <Navbar setTopButton={setTopButton} />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursuri" element={<Courses />} />
            <Route
              path="/povestea-saptamanii"
              element={<WeekStorySection separatePage={true} />}
            />
            <Route path="/evenimente" element={<Events />} />
            <Route path="/cutia-cu-povesti" element={<WorkInProgress />} />
            <Route path="/vorbeste-cu-profa" element={<Contact />} />
            <Route path="/blog" element={<WorkInProgress />} />
          </Routes>
          <ToTopButton topRef={topRef} isTopButton={isTopButton} />
          <Footer />
        </BrowserRouter>
      </PDPContext.Provider>
    </StyledWrapper>
  );
}

export default App;
