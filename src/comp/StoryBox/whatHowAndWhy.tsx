import React from "react";

import { colors } from "../../generalStyle";
import {
  BackgroundWrapper,
  ParagraphItalicStyled,
  SectionContainer,
  TitleSection,
} from "../Styles";
import storyboxBG from "../images/aboutBackground.webp";
import { SubtitleSection } from "./StoryBoxStyle";

interface sectionDetails {
  title: string;
  subTitle: string;
  sectionContent: string[];
}

export const WhatHowAndWhySection = (props: sectionDetails) => {
  let Paragraph = props.sectionContent;
  const ParagraphAboutSection = Paragraph.map((item, key) => {
    return <ParagraphItalicStyled key={key}>{item}</ParagraphItalicStyled>;
  });
  return (
    <BackgroundWrapper imgUrl={storyboxBG}>
      <SectionContainer>
        <TitleSection color={colors.primary.base}>{props.title}</TitleSection>
        <SubtitleSection>{props.subTitle[0]}</SubtitleSection>
        {ParagraphAboutSection}
      </SectionContainer>
    </BackgroundWrapper>
  );
};
