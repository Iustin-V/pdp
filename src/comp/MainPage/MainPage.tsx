import {
  MainContentWrapper,
  MainPagePhoto,
  MainPageText,
  MainTitle,
  PageContainer,
} from "../Styles";

import bookshelf from "../images/bookshelf_compressed.png";
import React from "react";

interface MainPageProps {
  firstSection: any;
}
export const MainPage = (props: MainPageProps) => {
  return (
    <>
      <MainPagePhoto backgroundImage={bookshelf}>
        <MainContentWrapper flexDirection="row">
          <PageContainer>
            <MainTitle>{props?.firstSection?.title}</MainTitle>
            <MainPageText>{props?.firstSection?.description}</MainPageText>
          </PageContainer>
        </MainContentWrapper>
      </MainPagePhoto>
    </>
  );
};
