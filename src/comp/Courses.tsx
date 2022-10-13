import {Border, ParagraphItalicStyled, SectionContainer, TitleSection, WrapperCard,} from "./Styles";
import {colors} from "../generalStyle";
import {MultiActionAreaCard} from "../Card/MultiActionAreaCard";

import styled from "styled-components";
import React, {useState} from "react";
import {PDPContext} from "../App";
import {getData} from "../utils/getData";

export const StyledPageCourses = styled.div`
  margin-top: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;


export const Courses = () => {
    const contextLocal: object = React.useContext(PDPContext);
    const [contentCourseChildParents, setContentCourseChildParents] = useState({
        title: '',
        subTitle: '',
        content: [{title: '', price: '', time: '', text: [], image: ""}]
    });
    const [refactorTitle, setRefactorTitle] = useState([])
    const [refactorTitleCourseTeacher, setRefactorTitleCourseTeacher] = useState([])

    const [contentCourseTeacher, setContentCourseTeacher] = useState({
        title: '',
        subTitle: '',
        content: [{title: '', price: '', time: '', text: [], image: ""}]
    });
    React.useEffect(() => {
        const textCourseChildParents = getData(contextLocal, "CourseChildParents");
        setContentCourseChildParents(textCourseChildParents);
        setRefactorTitle(textCourseChildParents.title.split('-'))

        const textCourseTeacher = getData(contextLocal, "CourseTeacher");
        setContentCourseTeacher(textCourseTeacher);
        setRefactorTitleCourseTeacher(textCourseTeacher.title.split('-'))

    }, [contextLocal]);


    // const coursesChildren = [
    //     {
    //         title: "Cum să-mi transform visul în realitate?",
    //         time: "20:00",
    //         price: "500 Ron",
    //         image: "https://upcdn.io/W142hJk/raw/demo/4xUx8m5.jpg",
    //
    //     },
    //     {
    //         title: "Cum să ating steaua la care visez",
    //         time: "20:00",
    //         price: "500 Ron",
    //         image: "https://upcdn.io/W142hJk/raw/demo/AFy6Kpq.jpg",
    //     },
    //     {
    //         title: "Cine mă privește din oglindă?",
    //         time: "20:00",
    //         price: "500 Ron",
    //         image: "https://upcdn.io/W142hJk/raw/demo/A6LPuVW.jpg",
    //     },
    // ];
    const coursesTeachers = [
        {
            title: "Cheia fericirii este la tine în buzunar!",
            time: "20:00",
            price: "800 Ron",
            image: "https://upcdn.io/W142hJk/raw/demo/62vWWRM.jpg",
        },
        {
            title: "Ieșirea din matrice",
            time: "20:00",
            price: "800 Ron",
            image: "https://upcdn.io/W142hJk/raw/demo/3LA2gKf.jpg",
        },
        {
            title: "Dicționarul limbii pe care o vorbim în familie",
            time: "20:00",
            price: "800 Ron",
            image: "https://upcdn.io/W142hJk/raw/demo/3T2HGnU.jpg",
        },
    ];

    const showCoursesCardChildParents = contentCourseChildParents.content?.map((item) => {
        return (
            <MultiActionAreaCard
                title={item.title}
                time={item.time}
                price={item.price}
                image={item.image}
            />
        );
    });
    const showCoursesCardParentsTeacher = contentCourseTeacher.content?.map((item) => {
        return (
            <MultiActionAreaCard
                title={item.title}
                time={item.time}
                price={item.price}
                image={item.image}
            />
        );
    });

    return (
        <>
            <StyledPageCourses>
                <SectionContainer>
                    <TitleSection color={colors.primary.base}>
                        {refactorTitle[0]} <br/> -{refactorTitle[1]}-
                    </TitleSection>
                    <ParagraphItalicStyled>
                        {contentCourseChildParents.subTitle[0]}
                    </ParagraphItalicStyled>
                    <WrapperCard>{showCoursesCardChildParents}</WrapperCard>
                </SectionContainer>
            </StyledPageCourses>
            <Border/>
            <StyledPageCourses>
                <SectionContainer>
                    <TitleSection color={colors.primary.base}>
                        {refactorTitleCourseTeacher[0]} <br/> -{refactorTitleCourseTeacher[1]}-
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