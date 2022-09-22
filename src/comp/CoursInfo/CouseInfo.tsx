import styled from "styled-components";
import "./Card.style.css";
import {ParagraphItalicStyled, TitleSection} from "../Styles";
import {colors} from "../../generalStyle";
import backgroundImage from '../images/CourseInfo.jpg'
import {VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";
import React from "react";
import {ContactFormBackground} from "../Contact/Contact-Style";

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

export const CourseInfoStyledButton = styled.button`
  margin-right: 100px;
  width: 150px;
  height: 50px;
  cursor: pointer;
  font-size: 20px;
  letter-spacing: 2px;
  background: rgb(248, 236, 212);
  border: 5px solid white;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.4);
  transition: 500ms;
  border-radius: 25px;
  color:#001F61;
  font-family: "KaushanScript";

  &:after {
    content: '';
    position: absolute;
    transform: translateX(-55px) translateY(-40px);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: transparent;
    box-shadow: 0px 0px 50px transparent;
    transition: 500ms;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.4);
  }

  &:focus {
    outline: none;
  }
`;

export const CourseInfo = () => {
    const timelineElements = [
        "\n" + "Care e diferența dintre un vis și un obiectiv?",
        "Cum îmi stabilesc corect un obiectiv?",
        "Cum acceez resursele necesare pentru îndeplinirea obiectivelor?",
        "Am ce mi-am dorit! Ce urmează acum?",
    ];

    const coursesTimeLine = timelineElements.map((element, index) => {
        return (
            <VerticalTimelineElement
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
                    <TitleSection color={colors.primary.base}>
                        Cum să-mi transform visul în realitate?
                    </TitleSection>
                    <VerticalTimeline lineColor={"#f8ecd4"} layout={"1-column-left"}>
                        {coursesTimeLine}
                    </VerticalTimeline>
                    <CourseInfoStyledButton>Cumpără</CourseInfoStyledButton>
                </SectionContainer>

            </StyledPageCourseInfo>
        </ContactFormBackground>
    );
};
