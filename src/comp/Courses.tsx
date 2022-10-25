import {
  Border,
  ParagraphItalicStyled,
  SectionContainer,
  TitleSection,
  WrapperCard,
} from "./Styles";
import { colors } from "../generalStyle";
import { MultiActionAreaCard } from "../Card/MultiActionAreaCard";

import styled from "styled-components";
import React, { useState } from "react";
import { PDPContext } from "../App";
import { getData } from "../utils/getData";
import { EditButton } from "./EditButton";
import { DeleteModal } from "./DeleteModal";

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
    editFunction: (data: any) => boolean;
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
  const [deleteModal, setDeleteModal] = useState({data:{},index:0});
  const [deleteMOdalOpen, setDeleteMOdalOpen] = useState(false);

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
  React.useEffect(() => {
    if(deleteMOdalOpen)
      document.body.style.overflow='hidden'
    else
      document.body.style.overflow='auto'
  }, [deleteMOdalOpen]);

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
          setDeleteModal={setDeleteModal}
          setDeleteMOdalOpen={setDeleteMOdalOpen}
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
          setDeleteModal={setDeleteModal}
          setDeleteMOdalOpen={setDeleteMOdalOpen}

        />
      );
    }
  );

  return (
    <>
      {deleteMOdalOpen && <DeleteModal modalData={deleteModal}  setDeleteMOdalOpen={setDeleteMOdalOpen}/>}
      <StyledPageCourses>
        <SectionContainer>
          <TitleSection color={colors.primary.base}>
            {refactorTitle[0]} <br /> -{refactorTitle[1]}-
          </TitleSection>
          <ParagraphItalicStyled>
            {contentCourseChildParents.subTitle[0]}
          </ParagraphItalicStyled>
          <WrapperCard>{showCoursesCardChildParents}</WrapperCard>
        </SectionContainer>
        <EditButton
          editFunction={contextLocal?.editFunction}
          sectionText={contentCourseChildParents}
        />
      </StyledPageCourses>
      <Border />
      <StyledPageCourses>
        <SectionContainer>
          <TitleSection color={colors.primary.base}>
            {refactorTitleCourseTeacher[0]} <br /> -
            {refactorTitleCourseTeacher[1]}-
          </TitleSection>
          <ParagraphItalicStyled>
            {contentCourseTeacher.subTitle[0]}
          </ParagraphItalicStyled>
          <WrapperCard>{showCoursesCardParentsTeacher}</WrapperCard>
        </SectionContainer>
        <EditButton
          editFunction={contextLocal?.editFunction}
          sectionText={contentCourseTeacher}
        />
      </StyledPageCourses>
    </>
  );
};
