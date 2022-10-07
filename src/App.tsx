import React, { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import linkGenerate from "./generalFunction";
import { CourseInfo } from "./comp/CourseInfo/CouseInfo";
import Login from "./comp/Login/Login";
import useFetch from "./hooks/useFetch";
import { getData } from "./utils/getData";

export const PDPContext = React.createContext({});

export interface Category {
  content: string[];
  img: string[];
  language: string;
  sectionName: string;
  subTitle: string[];
  video: string[];
  links: string[];
  _id: string;
  __v: number;
}

function App() {
  const topRef = React.useRef<null | HTMLDivElement>(null);
  const [isTopButton, setTopButton] = React.useState(false);
  const [allCategories, setAllCategories] = React.useState([]);
  const [navbarText, setNavbarTexts] = useState([]);

  const { data, loading, error } = useFetch(
    `https://api-example2.onrender.com/api/sections/sectionByLanguage?language=${
      localStorage.locale || "ro"
    }`
  );

  React.useEffect(() => {
    if (data.length !== 0) {
      console.log(data, "data");
      // @ts-ignore
      setAllCategories(data);
      setNavbarTexts(getData(data, "Navbar").subTitle);
    }
  }, [loading]);

  const coursesChildren = [
    {
      title: "Cum să-mi transform visul în realitate?",
      lesson1: [
        { title: "Cine mă privește din oglindă?", hours: 5, minutes: 0 },
        { title: "Cum mă văd cei din jurul meu?", hours: 5, minutes: 0 },
        { title: "Cine are dreptate, eu sau mama?", hours: 5, minutes: 0 },
      ],
    },
    {
      title: "Cum să ating steaua la care visez",
    },
    {
      title: "Cine mă privește din oglindă?",
    },
    {
      title: "Cheia fericirii este la tine în buzunar!",
    },
    {
      title: "Ieșirea din matrice",
    },
    {
      title: "Dicționarul limbii pe care o vorbim în familie",
    },
  ];

  const coursesLinkRoutes = coursesChildren.map((link) => {
    return (
      <Route
        path={`/cursuri/${linkGenerate(link.title)}`}
        element={<CourseInfo title={link.title} />}
      />
    );
  });
  const arrayNavbarLinks = [
    <WorkInProgress />,
    <WeekStorySection />,
    <Courses />,
    <Events />,
    <Contact />,
  ];
  const navbarLinks = navbarText.map((link, index) => {
    console.log(arrayNavbarLinks[index], "dadadam");
    return (
      <Route
        path={`/${linkGenerate(link)}`}
        element={arrayNavbarLinks[index]}
      />
    );
  });

  return (
    <StyledWrapper>
      <PDPContext.Provider value={allCategories}>
        <BrowserRouter>
          <div ref={topRef} />
          <Navbar allCategories={allCategories} setTopButton={setTopButton} />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            {navbarLinks}
            <Route path="/blog" element={<WorkInProgress />} />
            <Route path="/login" element={<Login />} />
            {coursesLinkRoutes}
          </Routes>
          <ToTopButton topRef={topRef} isTopButton={isTopButton} />
          <Footer />
        </BrowserRouter>
      </PDPContext.Provider>
    </StyledWrapper>
  );
}

export default App;
