import {
  EditButton,
  MainContentWrapper,
  MainPagePhoto,
  MainPageText,
  MainTitle,
  PageContainer,
} from "../Styles";

import bookshelf from "../images/bookshelf_compressed.png";
import React from "react";
import { PDPContext } from "../../App";

export const MainPage = () => {
  const contextLocal = React.useContext(PDPContext);

  return (
    <>
      <MainPagePhoto backgroundImage={bookshelf}>
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
          <EditButton onClick={() => contextLocal?.editFunction("asdsd")}>
            EDIT
          </EditButton>
        </MainContentWrapper>
      </MainPagePhoto>
    </>
  );
};
