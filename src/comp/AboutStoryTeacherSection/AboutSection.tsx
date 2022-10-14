import React, { useState } from "react";
import { YoutubeEmbed } from "../YoutubeEmbed/YoutubeEmbed";
// @ts-ignore
import {
  BackgroundWrapper,
  MarginTOPContainer,
  ParagraphItalicStyled,
  SectionContainer,
  TitleSection,
} from "../Styles";
import Background from "../images/aboutBackground.png";
import { colors } from "../../generalStyle";
import { PDPContext } from "../../App";
import { getData } from "../../utils/getData";
import { EditButton } from "../EditButton";

export const AboutSection = () => {
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
    const textData = getData(contextLocal?.allCategories, "AboutSection");
    setContentTexts(textData);
  }, [contextLocal]);

  const ParagraphAboutSection = contentText?.content?.map((item, key) => {
    return <ParagraphItalicStyled key={key}>{item}</ParagraphItalicStyled>;
  });

  return (
    <MarginTOPContainer>
      <BackgroundWrapper imgUrl={Background}>
        <SectionContainer>
          <TitleSection color={colors.primary.base}>
            {contentText?.title}
          </TitleSection>
          {ParagraphAboutSection}
          <YoutubeEmbed embedId={contentText?.video} />
        </SectionContainer>
        <EditButton
          editFunction={contextLocal?.editFunction}
          sectionText={contentText}
        />
      </BackgroundWrapper>
    </MarginTOPContainer>
  );
};
