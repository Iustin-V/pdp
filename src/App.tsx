import React from "react";
import axios from "axios";

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
import { EventPage } from "./comp/Events/EventPage";

const globalCardData = {
  title: "",
  text: "",
  eventImage: "",
  imageAlt: "",
  date: "",
};
export const PDPContext = React.createContext({});
export const EventCardData = React.createContext(globalCardData);
export const dispatchEventCardData = React.createContext({});

const GlobalStateProvider = ({ children }: any) => {
  const [state, dispatch] = React.useReducer(
    (state: any, newValue: any) => ({ ...state, ...newValue }),
    globalCardData
  );
  return (
    <EventCardData.Provider value={state}>
      <dispatchEventCardData.Provider value={dispatch}>
        {children}
      </dispatchEventCardData.Provider>
    </EventCardData.Provider>
  );
};
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
  const eventRoutes = coursesChildren.map((link) => {
    return (
      <Route
        path={`/evenimente/${linkGenerate(link.title)}`}
        element={<EventPage title={"asasa"} />}
      />
    );
  });

  return (
    <StyledWrapper>
      <GlobalStateProvider>
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
              {eventRoutes}
              <Route path="/cutia-cu-povesti" element={<WorkInProgress />} />
              <Route path="/vorbeste-cu-profa" element={<Contact />} />
              <Route path="/blog" element={<WorkInProgress />} />
              {coursesLinkRoutes}
            </Routes>
            <ToTopButton topRef={topRef} isTopButton={isTopButton} />
            <Footer />
          </BrowserRouter>
        </PDPContext.Provider>
      </GlobalStateProvider>
    </StyledWrapper>
  );
}

export default App;
