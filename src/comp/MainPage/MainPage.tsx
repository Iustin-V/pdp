import React, { useState } from "react";

import { PDPContext } from "../../App";
import { getData } from "../../utils/getData";
import { EditButton } from "../EditButton";
import {
  MainContentWrapper,
  MainPagePhoto,
  MainPageText,
  MainTitle,
  PageContainer,
} from "../Styles";
import bookshelf from "../images/bookshelf_compressed.webp";

export const MainPage = () => {
  const contextLocal: {
    editFunction: (data: any, type: string) => boolean;
    allCategories: any[];
  } = React.useContext(PDPContext);
  const [sectionText, setSectionTexts] = useState({ title: "", subTitle: [] });

  React.useEffect(() => {
    const mainPage = getData(contextLocal?.allCategories, "MainPage");
    setSectionTexts(mainPage);
  }, [contextLocal]);

  return (
    <>
      <MainPagePhoto backgroundImage={bookshelf}>
        <MainContentWrapper flexDirection="row">
          <PageContainer>
            {<MainTitle>{sectionText.title}</MainTitle>}
            {<MainPageText>{sectionText.subTitle}</MainPageText>}
          </PageContainer>
          <EditButton
            editFunction={contextLocal?.editFunction}
            sectionText={sectionText}
          />
        </MainContentWrapper>
      </MainPagePhoto>
    </>
  );
};
