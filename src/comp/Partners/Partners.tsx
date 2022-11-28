import React, { useState } from "react";

import styled from "styled-components";

import { PDPContext } from "../../App";
import { colors } from "../../generalStyle";
import { getData } from "../../utils/getData";
import { redirectLink } from "../../utils/redirectLink";
import { TitleSection } from "../Styles";
import AVTraduceriLogo from "../images/Partners/avtraduceri.webp";
import LectiiViraleLogo from "../images/Partners/lectiivirale-logo.webp";
import OanaNiculescuLogo from "../images/Partners/oananiculescu-logo.webp";
import PointsOfYouLogo from "../images/Partners/pointsofyou-logo.webp";

export const LogoSection = styled.img`
  height: fit-content;
  cursor: pointer;
  width: 276px;
`;
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
'
`;

export const Container = styled.div`
  max-width: 1440px;
  width: calc(100% - 80px);
  padding: 40px;
  margin: auto;
  @media (max-width: 1200px) {
    max-width: 800px;
    flex-direction: column;
  }
`;

export const Partners = () => {
  const contextLocal: {
    editFunction: (data: any, type: string) => boolean;
    allCategories: any[];
  } = React.useContext(PDPContext);
  const [contentText, setContentTexts] = useState({ title: "" });

  React.useEffect(() => {
    const textData = getData(contextLocal?.allCategories, "Partners");
    setContentTexts(textData);
  }, [contextLocal]);

  const partnersPhotos = [
    OanaNiculescuLogo,
    PointsOfYouLogo,
    LectiiViraleLogo,
    AVTraduceriLogo,
  ];
  const partnersLink = [
    "https://oananiculae.com/",
    "https://www.points-of-you.ro/",
    "https://lectii-virtuale.ro/",
    "https://www.tradus.ro/",
  ];

  const LogoSections = partnersLink.map((link, index) => {
    return (
      <LogoSection
        key={index}
        onClick={() => redirectLink(partnersLink[index])}
        src={partnersPhotos[index]}
        alt={`logo${index}`}
      />
    );
  });

  return (
    <Container>
      <TitleSection color={colors.primary.base}>
        {contentText.title}
      </TitleSection>
      <FlexWrapper>{LogoSections}</FlexWrapper>
    </Container>
  );
};
