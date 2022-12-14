import React, { useState } from "react";

import styled from "styled-components";

import { PDPContext } from "../App";
import { MultiActionAreaCard } from "../Card/MultiActionAreaCard";
import { colors } from "../generalStyle";
import { TextAlignment } from "../utils/TextAlignment";
import { getData } from "../utils/getData";
import { CreateButton } from "./CreateButton";
import { EditButton } from "./EditButton";
import {
  AdminButtons,
  Border,
  LogoutImage,
  ParagraphItalicStyled,
  SectionContainer,
  TitleSection,
  WrapperCard,
} from "./Styles";
import logout from "./images/logout-icon.webp";

export const StyledPageCourses = styled.div<{ first?: boolean }>`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  ${(props) => props.first && "margin-top: 80px;"}
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
  const [logoutButton, setLogoutButton] = React.useState(false);
  React.useEffect(() => {
    const user = localStorage.getItem("user");
    if (user && user.includes('"633fc7c57debf1918eb52792"')) {
      setLogoutButton(true);
    }
  }, [localStorage.getItem("user")]);

  return (
    <>
      {logoutButton && (
        <LogoutImage
          onClick={() => {
            localStorage.setItem("user", "");
            setLogoutButton(false);
            window.location.reload();
          }}
        >
          <p>Logout</p>
          <img src={logout} alt={"logout"} height={30} />
        </LogoutImage>
      )}
      <StyledPageCourses first={true}>
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

          <TitleSection color={colors.primary.base} animated={true}>
            {refactorTitle[0]} <br /> -{refactorTitle[1]}-
          </TitleSection>
          <ParagraphItalicStyled animated={true}>
            {TextAlignment(contentCourseChildParents.subTitle)}
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
          <TitleSection color={colors.primary.base} animated={true}>
            {refactorTitleCourseTeacher[0]} <br /> -
            {refactorTitleCourseTeacher[1]}-
          </TitleSection>
          <ParagraphItalicStyled animated={true}>
            {TextAlignment(contentCourseTeacher.subTitle)}
          </ParagraphItalicStyled>
          <WrapperCard>{showCoursesCardParentsTeacher}</WrapperCard>
        </SectionContainer>
      </StyledPageCourses>
    </>
  );
};
