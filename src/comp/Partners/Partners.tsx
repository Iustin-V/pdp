import React from "react";
import {PageContainer, SectionContainer, TitleSection} from "../Styles";
import {colors} from "../../generalStyle";
import OanaNiculescuLogo from '../images/Partners/oananiculescu-logo.png'
import LectiiViraleLogo from '../images/Partners/lectiivirale-logo.png'
import PointsOfYouLogo from '../images/Partners/pointsofyou-logo.png'


import styled from "styled-components";

export const TitleReviewSection = styled.img`
width: 276px;
`
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  
`


export const Partners = () => {
    return (
        <PageContainer>
            <SectionContainer>
                <TitleSection color={colors.primary.base}>
                    Parteneri
                </TitleSection>
                <FlexWrapper>
                <TitleReviewSection src={OanaNiculescuLogo}/>
                <TitleReviewSection src={LectiiViraleLogo}/>
                <TitleReviewSection src={PointsOfYouLogo}/>
                </FlexWrapper>
                </SectionContainer>
        </PageContainer>
    );
};
