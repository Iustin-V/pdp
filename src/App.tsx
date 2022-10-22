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
import { StoryBoxPage } from "./comp/StoryBox/StoryBox";
import { EventInfo } from "./comp/Events/EventInfo";
import Loading from "./comp/Loading/Loading";
import { UnknownRoute } from "./UnknownRoute";
import { EditModal } from "./comp/EditModal/EditModal";

export const PDPContext = React.createContext({});

export interface Category {
  content: string[];
  img: string[];
  language: string;
  sectionName: string;
  subTitle: string[];
  video: string[];
  links: string[];
  contain: string[];
  title: string;
  _id: string;
  __v: number;
}

function App() {
  const topRef = React.useRef<null | HTMLDivElement>(null);
  const [isTopButton, setTopButton] = React.useState(false);
  const [allCategories, setAllCategories] = React.useState([]);
  const [navbarText, setNavbarTexts] = useState([]);
  const [modalData, setModalData] = useState([]);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [allLinkCourses, setLinkCourses] = useState([
    { title: "", price: "", time: "", text: [], image: "" },
  ]);
  const [allEvents, setAllEvents] = useState([
    {
      titleSection: "",
      text: "",
      image: "",
      alt: "",
      date: "",
      time: "",
      website: "",
    },
  ]);
  const [linkPathCourses, setLinkPathCourses] = useState("");
  const [linkPathEvents, setLinkPathEvents] = useState("");

  const { data, loading, error } = useFetch(
    `https://pdp-api.onrender.com/api/sections/sectionByLanguage?language=${
      localStorage.locale || "ro"
    }`
  );
  const editFunction = (data: any) => {
    setModalData(data);
    setEditModal(true);
  };
  React.useEffect(() => {
    if (data.length !== 0) {
      setAllCategories(data);
      setNavbarTexts(getData(data, "Navbar").content);
      const allData = getData(data, "CourseChildParents").content.concat(
        getData(data, "CourseTeacher").content
      );
      setLinkCourses(allData);

      const eventData = getData(data, "EventsSection").content;
      setAllEvents(eventData);
    }
    switch (localStorage.locale) {
      case "ro":
        setLinkPathCourses("cursuri");
        setLinkPathEvents("evenimente");
        break;
      case "en":
        setLinkPathCourses("courses");
        setLinkPathEvents("events");
        break;
      case "fr":
        setLinkPathCourses("cours");
        setLinkPathEvents("evenements");
        break;
    }
  }, [loading]);

  const eventsLinkRoutes = allEvents.map((link) => {
    return (
      <Route
        path={`/${linkPathEvents}/${linkGenerate(link.titleSection)}`}
        element={
          <EventInfo
            title={link?.titleSection}
            eventImage={link?.image}
            text={link?.text}
            date={link?.date}
            time={link?.time}
            website={link?.website}
            imageAlt={link?.alt}
          />
        }
      />
    );
  });

  const coursesLinkRoutes = allLinkCourses.map((link) => {
    return (
      <Route
        path={`/${linkPathCourses}/${linkGenerate(link.title)}`}
        element={<CourseInfo title={link.title} text={link.text} />}
      />
    );
  });
  const arrayNavbarLinks = [
    <StoryBoxPage />,
    <WeekStorySection />,
    <Courses />,
    <Events />,
    <Contact />,
  ];
  const navbarLinks = navbarText.map((link, index) => {
    return (
      <Route
        path={`/${linkGenerate(link)}`}
        element={arrayNavbarLinks[index]}
      />
    );
  });

  return (
    <StyledWrapper>
      {data.length === 0 ? (
        <Loading />
      ) : (
        <>
          {editModal && (
            <EditModal
              modalData={modalData}
              editModal={editModal}
              setEditModal={setEditModal}
            />
          )}
          <PDPContext.Provider
            value={{
              allCategories,
              //@ts-ignore
              editFunction,
            }}
          >
            <BrowserRouter>
              <div ref={topRef} />
              <Navbar
                allCategories={allCategories}
                setTopButton={setTopButton}
              />
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                {navbarLinks}
                <Route path="/blog" element={<WorkInProgress />} />
                <Route path="/login" element={<Login />} />

                {coursesLinkRoutes}
                {eventsLinkRoutes}

                <Route path="*" element={<UnknownRoute />} />
              </Routes>
              <ToTopButton topRef={topRef} isTopButton={isTopButton} />
              <Footer />
            </BrowserRouter>
          </PDPContext.Provider>
        </>
      )}
    </StyledWrapper>
  );
}

export default App;
