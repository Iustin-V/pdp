import React from "react";


import { MainContentWrapper, SectionContainer } from "../Styles";
import { TitleSection } from "../HowWhyStoryFunctioningSection/TimeLine.Styles";
import { ParagraphStyled } from "../AboutStoryTeacherSection/AboutSection.Styles";

export const Experiences = () => {
  return (
    <SectionContainer>
      <MainContentWrapper flexDirection="column">
        <TitleSection>Ce spun cei care au vorbit deja cu profa</TitleSection>
        <ParagraphStyled>
          e-am lucrat efectiv cu elevi, profesori și părinți din România și
          Marea Britanie. De la cei mai vulnerabili dintre adolescenții din
          sistemul de penitenciare din Anglia și copiii care își vedeau banii de
          alocație dați de statul britanic cheltuiți de părinții lor pe droguri
          și băutură, până la cei mai inteligenți și ascultători dintre
          olimpicii noștri. Cu părinți care nu învățaseră de la nimeni nici ce e
          iubirea și nici cum să o arate copiilor lor. Cu oameni nefericiți care
          aveau nevoie să se simtă acceptați și iubiți pentru cine sunt ei, și
          nu pentru ceea ce fac ei.
        </ParagraphStyled>
      </MainContentWrapper>
    </SectionContainer>
  );
};
