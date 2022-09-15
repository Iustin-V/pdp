import React from "react";
import { YoutubeEmbed } from "../YoutubeEmbed/YoutubeEmbed";
import {
  BackgroundWrapper,
  ParagraphItalicStyled,
  SectionContainer,
  TitleSection,
  MarginTOPContainer,
} from "../Styles";
import Background from "../images/aboutBackground.png";
import { colors } from "../../generalStyle";

export const AboutSection = () => {
  let Paragraph = [
    "Eu nu am ales să fiu profesor. Când am terminat facultatea, am spus că voi merge să predau limba engleză o vreme, cât să îmi câștig existența până când voi găsi un post de translator într-o firmă celebră. Nu eram pregătită să trec de partea cealaltă a catedrei, acolo unde aflasem că e locul unor persoane severe și inflexibile, care îți cântăreau, cu privirea pe deasupra ochelarilor, orice comportament și îți scădeau nota la orice cuvânt folosit nefericit.",
    "Treptat, fiecare generație de elevi m-a convins că, de fapt, locul de la catedră este al celor care iubesc să învețe pe copii cum să își așeze pasiunea în muncă, libertatea în opțiuni și fericirea în viața de zi cu zi.",
    "Și am găsit cele mai bune moduri de a face ca acestea să devină realitate pentru cât mai mulți părinți, profesori și copii. Am devenit, cu timpul, consilier de dezvoltare personală – Master Practitioner NLP și facilitator „Points of You”. Am studiat metode și tehnici din domeniul neuroștiințelor și ale coaching-ului, le-am aplicat, le-am adaptat fiecărei situații cu care m-am confruntat la școală și acasă.",
    "Le-am lucrat efectiv cu elevi, profesori și părinți din România și Marea Britanie. De la cei mai vulnerabili dintre adolescenții din sistemul de penitenciare din Anglia și copiii care își vedeau banii de alocație dați de statul britanic cheltuiți de părinții lor pe droguri și băutură, până la cei mai inteligenți și ascultători dintre olimpicii noștri. Cu părinți care nu învățaseră de la nimeni nici ce e iubirea și nici cum să o arate copiilor lor. Cu oameni nefericiți care aveau nevoie să se simtă acceptați și iubiți pentru cine sunt ei, și nu pentru ceea ce fac ei.",
    "Acum împart ce știu cu oricine alege să își afle măștile pe care le poartă fără să știe și care îi împiedică să fie fericiți.",
  ];
  const ParagraphAboutSection = Paragraph.map((item) => {
    return <ParagraphItalicStyled>{item}</ParagraphItalicStyled>;
  });

  return (
    <MarginTOPContainer>
      <BackgroundWrapper imgUrl={Background}>
        <SectionContainer>
          <TitleSection color={colors.primary.base}>
            Despre profa de povești
          </TitleSection>
          {ParagraphAboutSection}
          <YoutubeEmbed embedId="C_BkCoJVzBU" />
        </SectionContainer>
      </BackgroundWrapper>
    </MarginTOPContainer>
  );
};
