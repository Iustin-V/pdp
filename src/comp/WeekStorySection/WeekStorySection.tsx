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

  let Paragraph = [
    "A fost odată un fir de orz. Creștea frumos, drept și sănătos la adăpostul mai mulor spice de orz mai mari și mai viguroase. Boabele lui aurii abia formate erau înconjurate de mustăți deseși semeț îndreptate către cer. „Tare mai sunt grozav!” gândi el uitându-se împrejur. „Sunt cel mai minunat spic de orz din lan!” Proetenoase și jucăușe, firele din vecinătatea lui se unduiau în bătaia vântului cald de vară. „Eu sunt mult prea puternic să mă las dus de o pală neînsemnată de vânt!” își spuse spicul nostru. Și privi neînduplecat spre celelalte spice de orz care se aplecau într-o parte și în alta, revenind apoi drepte după ce adierea se potolea. Într-o zi, vântul cel obișnuit nu mai veni. Apăru în schimb o furtună furioasă iscată din seninul cerului pe care abia se zăreau câțiva nori. Spicele se culcară pe dată la pământ, obișnuite, flexibile și calme. Spicul cel mândru se opuse furtunii din toate puterile și curând obosi. Se rupse cu un pocnet surd și zbură dus de furtuna care se potoli ca prin farmec. În urma lui, lanul de orz auriu se legăna în soarele care strălucea din nou, pârguind boabele cele hrănitoare care urmau să își ducă la capăt menirea pentru care veniseră pe pământ. Tu cum treci de momentele furtunoase din viața ta? Calm precum spicele supraviețuitoare sau mândru ca spicul cel inflexibil? Și, mai ales, îți cunoști limita până la care te poți îndoi fără să îți pierzi abilitatea de a reveni la postura dreaptă?\n",
  ];
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
    </BackgroundWrapper>
  );
};
