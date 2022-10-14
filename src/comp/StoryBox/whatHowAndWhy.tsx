import {
  BackgroundWrapper,
  ParagraphItalicStyled,
  SectionContainer,
  TitleSection,
} from "../Styles";
import { SubtitleSection } from "./StoryBoxStyle";
import { colors } from "../../generalStyle";
import React from "react";
import storyboxBG from "../images/aboutBackground.png";

export const WhatHowAndWhySection = () => {
  let Paragraph = [
    "A fost odată ca niciodată, că de n-ar fi, nu s-ar povesti! Câtă curiozitate și plăcere încă ne stârnesc cuvintele acestea, ce așteptare nerăbdătoare le urmează pe ele și ne farmecă pe noi? Poveștile ne caută prin suflete și răscolesc amintiri până găsesc cel mai vulnerabil colțișor al inimii și acolo râcâie, mângâie, și în final vindecă. Ce părți din noi pot ele vindeca? Și cum funcționează acest mecanism subtil, aproape vrăjit, de alinare pe care îl declanșează poveștile în ascultător?\n",
    "Poveștile deschid poarta de intrare în tărâmul florilor, al animalelor, al cerului senin și înstelat, și astfel îi transformă pe ascultători în îndrăgostiți care vor veni mereu la întâlnirea cu ele și atmosfera lor minunată.\n",
    "De ce toate acestea? Pentru că poveștile sunt un portal către o lume ideală, în care ne dorim cu toții să trăim. Pentru că ne identificăm cu eroii, călătorim imaginar în realitatea paralelă a istorisirii, găsim corespondența dintre situațiile reale din viața noastră și întâmplările relatate de povestitor și, însoțind personajul în rezolvarea problemei, aflăm astfel și o posibilitate de ieșire din propria noastră dilemă.\n",
    "Vocea povestitorului ne duce într-o stare de relaxare profundă în care ne îndreptăm atenția către interiorul nostru, către propriile gânduri și emoții. Metaforele, simboluri sau cuvinte, vorbesc limba subconștientului nostru care este plin cu resurse inepuizabile de soluții pentru problemele cu care ne confruntăm. Și astfel, din izvorul nesecat de experiențe, amintiri și competențe, răzbat la suprafață, fără să ne dăm seama cum, răspunsuri pe care le căutăm altminteri multă vreme și care nu vin din logica gândirii.\n",
    "Simplificând până la limită, se poate spune că poveștile sunt varianta scurtă a romanelor. Poveștile Profei de povești sunt varianta concentrată a măștilor a sute de copii, părinți și profesori trăite într-o continuă căutare a tihnei pe care ți-o oferă sentimentul că ești acceptat și iubit fără să fii judecat pentru cine ești și nu pentru ce faci.\n",
    "De asemenea, ele sunt și poveștile măștilor mele pe care am învățat să le recunosc, să mi le desprind în cele din urmă de pe față, savurând și sărbătorind fiecare clipă în care sunt eu însămi. Ceea ce îți doresc și ție!\n",
  ];
  const ParagraphAboutSection = Paragraph.map((item, key) => {
    return <ParagraphItalicStyled key={key}>{item}</ParagraphItalicStyled>;
  });
  return (
    <BackgroundWrapper imgUrl={storyboxBG}>
      <SectionContainer>
        <TitleSection color={colors.primary.base}>
          Cutia cu povesti
        </TitleSection>
        <SubtitleSection>Ce, cum și de ce vindecă poveștile</SubtitleSection>
        {ParagraphAboutSection}
      </SectionContainer>
    </BackgroundWrapper>
  );
};
