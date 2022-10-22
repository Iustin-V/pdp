import {
  MainContentWrapper,
  MainPagePhoto,
  MainPageText,
  MainTitle,
  PageContainer,
} from "../Styles";

import bookshelf from "../images/bookshelf_compressed.png";
import React, { useState } from "react";
import { PDPContext } from "../../App";
import { getData } from "../../utils/getData";
import { EditButton } from "../EditButton";

export const MainPage = () => {
  const contextLocal = React.useContext(PDPContext);
  const [sectionText, setSectionTexts] = useState([]);

  React.useEffect(() => {
    const mainPage = getData(contextLocal, "MainPage");
    setSectionTexts(mainPage);
  }, [contextLocal]);

  return (
    <>
      <MainPagePhoto backgroundImage={bookshelf}>
        <MainContentWrapper flexDirection="row">
          <PageContainer>
            {
              // @ts-ignore
              <MainTitle>{sectionText.title}</MainTitle>
            }
            {
              // @ts-ignore
              <MainPageText>{sectionText.subTitle}</MainPageText>
            }
          </PageContainer>
        </MainContentWrapper>
      </MainPagePhoto>
    </>
  );
};
