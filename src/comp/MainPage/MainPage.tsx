import {
  MainContentWrapper,
  MainPagePhoto,
  MainPageText,
  MainTitle,
  PageContainer,
} from "../Styles";
import React from "react";

export const MainPage = () => {
  return (
    <>
      <MainPagePhoto>
        <MainContentWrapper flexDirection="row">
          <PageContainer>
            <MainTitle>Cadoul tau e mai frumos cand spune o poveste</MainTitle>
            <MainPageText>
              „Să-ți spun o poveste!”, și dintr-o dată, totul în jur pare că nu
              mai are importanță, zgomotele se estompează, imaginile din fundal
              devin neclare, rămâne doar curiozitatea pentru întâmplările pe
              care urmează să le aflu.
            </MainPageText>
          </PageContainer>
        </MainContentWrapper>
      </MainPagePhoto>
    </>
  );
};
