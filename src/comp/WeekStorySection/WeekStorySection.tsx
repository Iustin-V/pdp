import React, { useState } from "react";

import { PDPContext } from "../../App";
import { colors } from "../../generalStyle";
import { getData } from "../../utils/getData";
import { EditButton } from "../EditButton";
import {
  BackgroundWrapper,
  ParagraphItalicStyled,
  SectionContainer,
  TitleSection,
} from "../Styles";
import { YoutubeEmbed } from "../YoutubeEmbed/YoutubeEmbed";
import Background from "../images/WeekStorySection.webp";

interface weekStorySectionProps {
  separatePage?: boolean;
}

export const WeekStorySection = (props: weekStorySectionProps) => {
  const contextLocal: {
    editFunction: (data: any, type: string) => boolean;
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
