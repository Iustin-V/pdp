import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import styled from "styled-components";

import { PDPContext } from "../../App";
import { courseButtonTranslates } from "../../Translates/Translates";
import linkGenerate from "../../generalFunction";
import { colors } from "../../generalStyle";
import { getData } from "../../utils/getData";
import { ContactFormBackground } from "../Contact/Contact-Style";
import { ParagraphItalicStyled, TitleSection } from "../Styles";
import backgroundImage from "../images/CourseInfo.webp";
import teacherIcon from "../images/teacher-icon.webp";

export const StyledPageCourseInfo = styled.div`
  margin-top: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const SectionContainer = styled.div`
  width: calc(100% - 80px);
  max-width: 800px;
  padding: 40px;
  margin: 0 auto;
  position: relative;
`;

export const IndexSection = styled.h2`
  color: #002366;
  margin-top: 6px;
`;

export const ImageCourseInfo = styled.img`
  position: absolute;
  right: 0;
  top: 96px;
  transform: translateY(-100%);
  z-index: 2;
  height: 140px;
  @media (max-width: 1160px) {
    height: 120px;
    top: 64px;
  }
  @media (max-width: 770px) {
    height: 95px;
    top: 64px;
  }
`;

export const CourseInfoStyledButton = styled.button`
  margin-right: 100px;
  width: 150px;
  height: 50px;
  cursor: pointer;
  font-size: 20px;
  letter-spacing: 2px;
  background: rgb(248, 236, 212);
  border: 5px solid white;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.4);
  transition: 500ms;
  border-radius: 15px;
  color: #001f61;
  font-family: "KaushanScript";

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);
  }
`;

interface coursesInfo {
  title: string;
  array?: [];
  text?: Array<string>;
}

export const CourseInfo = (props: coursesInfo) => {
  const contextLocal: {
    editFunction: (data: any, type: string) => boolean;
    allCategories: any[];
  } = React.useContext(PDPContext);
  const [talkWithTeacher, setLinkTalkWithTeacher] = useState({ content: [] });

  React.useEffect(() => {
    const textData = getData(contextLocal?.allCategories, "Navbar");
    textData &&
      textData.content &&
      // @ts-ignore
      setLinkTalkWithTeacher(linkGenerate(textData.content[4]));
  }, [contextLocal]);

  const setCourse = (title: string) => {
    localStorage.setItem("course", title);
  };

  const coursesTimeLine = props.text?.map((element, index) => {
    return (
      <VerticalTimelineElement
        key={index}
        className={`vertical-timeline-element--${
          index % 2 === 0 ? "work" : "education"
        }`}
        contentStyle={{
          background: index % 2 === 0 ? "#f8ecd4" : "",
          color: colors.primary.base,
        }}
        contentArrowStyle={{
          borderRight: `7px solid ${
            index % 2 === 0 ? "" : "#f8ecd4"
          } ${"#f8ecd4"}`,
        }}
        icon={<IndexSection>{index + 1}</IndexSection>}
        iconStyle={{
          background: "#f8ecd4",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <ParagraphItalicStyled>{element}</ParagraphItalicStyled>
      </VerticalTimelineElement>
    );
  });

  return (
    <ContactFormBackground backgroundImage={backgroundImage}>
      <StyledPageCourseInfo>
        <SectionContainer>
          <TitleSection color={colors.primary.base}>{props.title}</TitleSection>

          <VerticalTimeline lineColor={"#f8ecd4"} layout={"1-column-left"}>
            <ImageCourseInfo src={teacherIcon} alt="teacherIcon" />
            {coursesTimeLine}
          </VerticalTimeline>
          <Link to={`/${talkWithTeacher}`}>
            <CourseInfoStyledButton
              onClick={() => {
                setCourse(props.title);
              }}
            >
              {
                // @ts-ignore
                courseButtonTranslates[localStorage?.locale || "ro"]
              }
            </CourseInfoStyledButton>
          </Link>
        </SectionContainer>
      </StyledPageCourseInfo>
    </ContactFormBackground>
  );
};
