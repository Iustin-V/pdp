import {BackgroundWrapper, ParagraphItalicStyled, SectionContainer, TitleSection,} from "../Styles";
import {SubtitleSection} from "./StoryBoxStyle";
import {colors} from "../../generalStyle";
import React from "react";
import storyboxBG from "../images/aboutBackground.png";

interface sectionDetails {
    title: string,
    subTitle: string,
    sectionContent: string[]

}


export const WhatHowAndWhySection = (props: sectionDetails) => {
    let Paragraph = props.sectionContent;
    const ParagraphAboutSection = Paragraph.map((item, key) => {
        return <ParagraphItalicStyled key={key}>{item}</ParagraphItalicStyled>;
    });
    return (
        <BackgroundWrapper imgUrl={storyboxBG}>
            <SectionContainer>
                <TitleSection color={colors.primary.base}>
                    {props.title}
                </TitleSection>
                <SubtitleSection>{props.subTitle[0]}</SubtitleSection>
                {ParagraphAboutSection}
            </SectionContainer>
        </BackgroundWrapper>
    );
};
