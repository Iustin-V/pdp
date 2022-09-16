import React from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./comp/Home";
import {StyledWrapper} from "./comp/Styles";
import {Courses} from "./comp/Courses";
import {WeekStorySection} from "./comp/WeekStorySection/WeekStorySection";
import {Navbar} from "./comp/Navbar";
import {ToTopButton} from "./comp/ToTopButton";
import {Footer} from "./comp/Footer";
import {WorkInProgress} from "./comp/WorkInProgress";
import linkGenerate from "./generalFunction";
import {CourseInfo} from "./comp/CoursInfo/CouseInfo";

function App() {
  const topRef = React.useRef<null | HTMLDivElement>(null);
  const [isTopButton, setTopButton] = React.useState(false);


  const coursesChildren = [
    {
      title: "Cum să-mi transform visul în realitate?",
      lesson1: [
        {title: 'Cine mă privește din oglindă?', hours: 5, minutes: 0},
        {title: 'Cum mă văd cei din jurul meu?', hours: 5, minutes: 0},
        {title: 'Cine are dreptate, eu sau mama?', hours: 5, minutes: 0},
      ]
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
    return <Route path={`/cursuri/${linkGenerate(link.title)}`} element={<CourseInfo/>}/>
  })


  return (
      <StyledWrapper>
        <BrowserRouter>
          <div ref={topRef}/>
          <Navbar setTopButton={setTopButton}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cursuri" element={<Courses/>}/>
            <Route
                path="/povestea-saptamanii"
                element={<WeekStorySection separatePage={true}/>}
            />
            <Route path="/evenimente" element={<WorkInProgress/>}/>
            <Route path="/cutia-cu-povesti" element={<WorkInProgress/>}/>
            <Route path="/vorbeste-cu-profa" element={<WorkInProgress />} />
            <Route path="/blog" element={<WorkInProgress/>}/>
            {coursesLinkRoutes}
          </Routes>
          <ToTopButton topRef={topRef} isTopButton={isTopButton}/>
          <Footer/>
        </BrowserRouter>
      </StyledWrapper>
  );
}

export default App;
