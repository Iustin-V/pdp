import React, { useState } from "react";
import { YoutubeEmbed } from "../YoutubeEmbed/YoutubeEmbed";
import {
  BackgroundWrapper,
  ParagraphItalicStyled,
  SectionContainer,
  TitleSection,
} from "../Styles";
import Background from "../images/WeekStorySection.png";
import { colors } from "../../generalStyle";
import { PDPContext } from "../../App";
import { getData } from "../../utils/getData";
import { EditButton } from "../EditButton";

interface weekStorySectionProps {
  separatePage?: boolean;
}

export const WeekStorySection = (props: weekStorySectionProps) => {
  const contextLocal: {
    editFunction: (data: any) => boolean;
    allCategories: any[];
  } = React.useContext(PDPContext);
  const [contentText, setContentTexts] = useState({
    title: "",
    content: [],
    video: "",
  });

  React.useEffect(() => {
    const textData = getData(contextLocal?.allCategories, "WeekStorySection");
    setContentTexts(textData);
  }, [contextLocal]);

  const ParagraphAboutSection = contentText.content?.map((item, key) => {
    return <ParagraphItalicStyled key={key}>{item}</ParagraphItalicStyled>;
  });

  return (
    <BackgroundWrapper imgUrl={Background} separatePage={props.separatePage}>
      <SectionContainer>
        <TitleSection
          color={props.separatePage ? "#e3b4d4" : colors.primary.base}
        >
          {contentText.title}
        </TitleSection>
        <YoutubeEmbed embedId={contentText.video} />
        {ParagraphAboutSection}
      </SectionContainer>
      <EditButton
        editFunction={contextLocal?.editFunction}
        sectionText={contentText}
      />
    </BackgroundWrapper>
  );
};
