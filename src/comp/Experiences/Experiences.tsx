import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MainContentWrapper, SectionContainer } from "../Styles";
import { TitleSection } from "../HowWhyStoryFunctioningSection/TimeLine.Styles";
import { ParagraphStyled } from "../AboutStoryTeacherSection/AboutSection.Styles";

export const Experiences = () => {
  const settings = {
    adaptiveHeight:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <SectionContainer>
      <MainContentWrapper flexDirection="column">
        <TitleSection>Ce spun cei care au vorbit deja cu profa</TitleSection>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
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
