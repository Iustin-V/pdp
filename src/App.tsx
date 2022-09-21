import React from "react";
import axios from "axios";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./comp/Home";
import { StyledPageWrapper, StyledWrapper } from "./comp/Styles";
import { Courses } from "./comp/Courses";
import { WeekStorySection } from "./comp/WeekStorySection/WeekStorySection";
import { Navbar } from "./comp/Navbar";
import { ToTopButton } from "./comp/ToTopButton";
import { Footer } from "./comp/Footer";
import { WorkInProgress } from "./comp/WorkInProgress";
import { Contact } from "./comp/Contact/Contact";
import { Events } from "./comp/Events/Events";
export const PDPContext = React.createContext({});

function App() {
  const topRef = React.useRef<null | HTMLDivElement>(null);
  const [isTopButton, setTopButton] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [allCategories, setAllCategories] = React.useState([]);
  const [navbarData, setNavbarData] = React.useState({});
  const [mainPageData, setMainPageData] = React.useState({});

  const setCookieFunction = (value: any) => {
    localStorage.setItem("locale", value);
    window.location.reload();

    console.log("language cookie", value);
  };
  //usecontext
  //usereducer
  React.useEffect(() => {
    axios
      .get(
        `http://localhost:1337/api/engs?locale=${
          localStorage.locale || "en"
        }&populate=deep`
      )
      .then(({ data }) => {
        // @ts-ignore
        setAllCategories(data.data[0]?.attributes);
        // @ts-ignore
        setNavbarData(data.data[0]?.attributes?.navigation);
        // @ts-ignore
        setMainPageData(data.data[0]?.attributes?.mainPage);
      })
      .catch((error) => setError(error));
  }, []);

  // @ts-ignore
  console.log(allCategories[0]?.attributes);
  console.log("navbarData", navbarData);
  console.log("mainPageData", mainPageData);
  return (
    <StyledWrapper>
      <PDPContext.Provider value={allCategories}>
        <BrowserRouter>
          <div ref={topRef} />
          <StyledPageWrapper>
            <button onClick={() => setCookieFunction("en")}>en</button>
            <button onClick={() => setCookieFunction("ro-RO")}>ro</button>
            <button onClick={() => setCookieFunction("fr")}>fr</button>
          </StyledPageWrapper>
          <Navbar navbarData={navbarData} setTopButton={setTopButton} />

          <Routes>
            <Route path="/" element={<Home mainPageData={mainPageData} />} />
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
