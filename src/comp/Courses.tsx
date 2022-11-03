import React, { useState } from "react";

import styled from "styled-components";

import { PDPContext } from "../App";
import { MultiActionAreaCard } from "../Card/MultiActionAreaCard";
import { colors } from "../generalStyle";
import { getData } from "../utils/getData";
import { CreateButton } from "./CreateButton";
import { EditButton } from "./EditButton";
import {
  AdminButtons,
  Border,
  ParagraphItalicStyled,
  SectionContainer,
  TitleSection,
  WrapperCard,
} from "./Styles";

export const StyledPageCourses = styled.div`
  margin-top: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Courses = () => {
  const contextLocal: {
    editFunction: (data: any, type: string) => boolean;
    allCategories: any[];
  } = React.useContext(PDPContext);
  const [contentCourseChildParents, setContentCourseChildParents] = useState({
    title: "",
    subTitle: "",
    content: [{ title: "", price: "", time: "", text: [], image: "" }],
  });
  const [refactorTitle, setRefactorTitle] = useState([]);
  const [refactorTitleCourseTeacher, setRefactorTitleCourseTeacher] = useState(
    []
  );

  const [contentCourseTeacher, setContentCourseTeacher] = useState({
    title: "",
    subTitle: "",
    content: [{ title: "", price: "", time: "", text: [], image: "" }],
  });
  React.useEffect(() => {
    const textCourseChildParents = getData(
      contextLocal?.allCategories,
      "CourseChildParents"
    );
    setContentCourseChildParents(textCourseChildParents);
    setRefactorTitle(textCourseChildParents.title.split("-"));

    const textCourseTeacher = getData(
      contextLocal?.allCategories,
      "CourseTeacher"
    );
    setContentCourseTeacher(textCourseTeacher);
    setRefactorTitleCourseTeacher(textCourseTeacher.title.split("-"));
  }, [contextLocal]);
  // React.useEffect(() => {
  //   if (deleteMOdalOpen || isCreateModalVisible)
  //     document.body.style.overflow = "hidden";
  //   else document.body.style.overflow = "auto";
  // }, [deleteMOdalOpen, isCreateModalVisible]);

  const showCoursesCardChildParents = contentCourseChildParents.content?.map(
    (item, index: number) => {
      return (
        <MultiActionAreaCard
          key={index}
          title={item.title}
          time={item.time}
          price={item.price}
          image={item.image}
          item={item}
          index={index}
          content={contentCourseChildParents}
        />
      );
    }
  );
  const showCoursesCardParentsTeacher = contentCourseTeacher.content?.map(
    (item, index: number) => {
      return (
        <MultiActionAreaCard
          key={index}
          title={item.title}
          time={item.time}
          price={item.price}
          image={item.image}
          item={item}
          index={index}
          content={contentCourseTeacher}
        />
      );
    }
  );
  console.log("coursesdata", contentCourseChildParents);

  return (
    <>
      <StyledPageCourses>
        <SectionContainer>
          <AdminButtons>
            <CreateButton
              createFunction={contextLocal?.editFunction}
              sectionText={contentCourseChildParents}
              createType="createCourse"
            />

            <EditButton
              editFunction={contextLocal?.editFunction}
              sectionText={contentCourseChildParents}
            />
          </AdminButtons>

          <TitleSection color={colors.primary.base}>
            {refactorTitle[0]} <br /> -{refactorTitle[1]}-
          </TitleSection>
          <ParagraphItalicStyled>
            {contentCourseChildParents.subTitle[0]}
          </ParagraphItalicStyled>
          <WrapperCard>{showCoursesCardChildParents}</WrapperCard>
        </SectionContainer>
      </StyledPageCourses>
      <Border />
      <StyledPageCourses>
        <SectionContainer>
          <AdminButtons>
            <CreateButton
              createFunction={contextLocal?.editFunction}
              sectionText={contentCourseTeacher}
              createType="createCourse"
            />
            <EditButton
              editFunction={contextLocal?.editFunction}
              sectionText={contentCourseTeacher}
            />
          </AdminButtons>
          <TitleSection color={colors.primary.base}>
            {refactorTitleCourseTeacher[0]} <br /> -
            {refactorTitleCourseTeacher[1]}-
          </TitleSection>
          <ParagraphItalicStyled>
            {contentCourseTeacher.subTitle[0]}
          </ParagraphItalicStyled>
          <WrapperCard>{showCoursesCardParentsTeacher}</WrapperCard>
        </SectionContainer>
      </StyledPageCourses>
    </>
  );
};
