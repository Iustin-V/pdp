import React from "react";
import {PageContainer, SectionContainer, TitleSection} from "../Styles";
import {colors} from "../../generalStyle";
import OanaNiculescuLogo from '../images/Partners/oananiculescu-logo.png'
import LectiiViraleLogo from '../images/Partners/lectiivirale-logo.png'
import PointsOfYouLogo from '../images/Partners/pointsofyou-logo.png'


import styled from "styled-components";

export const LogoSection = styled.img`
width: 276px;
`
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;'
`

export const Container = styled.div`
  max-width: 1440px;
  width: calc(100% - 80px);
  padding:40px;
  margin: auto;
  @media (max-width: 1200px) {
    max-width: 800px;
    flex-direction: column;
  }
`


export const Partners = () => {
    return (
            <Container>
                <TitleSection color={colors.primary.base}>
                    Parteneri
                </TitleSection>
                <FlexWrapper>
                <LogoSection src={OanaNiculescuLogo}/>
                <LogoSection src={LectiiViraleLogo}/>
                <LogoSection src={PointsOfYouLogo}/>
                </FlexWrapper>
                </Container>
    );
};
