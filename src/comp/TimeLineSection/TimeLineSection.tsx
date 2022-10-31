import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { PDPContext } from "../../App";
import { colors } from "../../generalStyle";
import { getData } from "../../utils/getData";
import { EditButton } from "../EditButton";
import {
  BackgroundWrapper,
  ParagraphItalicStyled,
  TitleSection,
} from "../Styles";
import Background from "../images/TimeLine.Background.webp";

export const TimeLineSection = () => {
  const contextLocal: {
    editFunction: (data: any, type: string) => boolean;
    allCategories: any[];
  } = React.useContext(PDPContext);

  const [contentText, setContentTexts] = useState({ title: "", content: [] });

  React.useEffect(() => {
    const textData = getData(contextLocal?.allCategories, "TimeLineSelection");
    setContentTexts(textData);
  }, [contextLocal]);

  const timeLine = contentText.content?.map((element, index) => {
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
        iconStyle={{ background: "#f8ecd4", color: "#fff" }}
      >
        <ParagraphItalicStyled>{element}</ParagraphItalicStyled>
      </VerticalTimelineElement>
    );
  });

  return (
    <BackgroundWrapper imgUrl={Background}>
      <TitleSection color={colors.primary.base}>
        {contentText.title}
      </TitleSection>
      <VerticalTimeline lineColor={"#f8ecd4"}>{timeLine}</VerticalTimeline>
      <EditButton
        editFunction={contextLocal?.editFunction}
        sectionText={contentText}
      />
    </BackgroundWrapper>
  );
};
