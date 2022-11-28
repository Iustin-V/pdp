import React, { useState } from "react";

import { PDPContext } from "../../App";
import { colors } from "../../generalStyle";
import { getData } from "../../utils/getData";
import { EditButton } from "../EditButton";
import {
  AdminButtons,
  BackgroundWrapper,
  MarginTOPContainer,
  ParagraphItalicStyled,
  SectionContainer,
  TitleSection,
} from "../Styles";
import { YoutubeEmbed } from "../YoutubeEmbed/YoutubeEmbed";
import Background from "../images/aboutBackground.webp";

export const AboutSection = () => {
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
    const textData = getData(contextLocal?.allCategories, "AboutSection");
    setContentTexts(textData);
  }, [contextLocal]);

  const ParagraphAboutSection = contentText.content?.map((item, key) => {
    return <ParagraphItalicStyled key={key}>{item}</ParagraphItalicStyled>;
  });

  return (
    <MarginTOPContainer>
      <BackgroundWrapper imgUrl={Background}>
        <SectionContainer>
          <AdminButtons>
            <EditButton
                editFunction={contextLocal?.editFunction}
                sectionText={contentText}
            />
          </AdminButtons>
          <TitleSection color={colors.primary.base}>
            {contentText.title}
          </TitleSection>
          {ParagraphAboutSection}
          <YoutubeEmbed embedId={contentText.video} />
        </SectionContainer>
      </BackgroundWrapper>
    </MarginTOPContainer>
  );
};
