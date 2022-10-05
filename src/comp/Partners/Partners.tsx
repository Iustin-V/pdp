import React, { useEffect, useState } from "react";
import { TitleSection } from "../Styles";
import { colors } from "../../generalStyle";
import OanaNiculescuLogo from "../images/Partners/oananiculescu-logo.png";
import LectiiViraleLogo from "../images/Partners/lectiivirale-logo.png";
import PointsOfYouLogo from "../images/Partners/pointsofyou-logo.png";
import http from "../../http";

import styled from "styled-components";
import useFetch from "../../hooks/useFetch";

export const LogoSection = styled.img`
  width: 276px;
`;
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
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

    const {data, loading, error} = useFetch("/sections/getBySectionName?name=Prezentation Page2")
    console.log(data)

    function redirectPartnerOana() {
        window.location.href = "https://oananiculae.com/";
    }

    function redirectPointsOfYou() {
        window.location.href = "https://www.points-of-you.ro/";
    }

    function redirectLectiiVirale() {
        window.location.href = "https://lectii-virtuale.ro/";
    }

    return (
        <Container>
            <TitleSection color={colors.primary.base}>Parteneri</TitleSection>
            <FlexWrapper>
                <LogoSection onClick={redirectPartnerOana} src={OanaNiculescuLogo}/>
                <LogoSection onClick={redirectLectiiVirale} src={LectiiViraleLogo}/>
                <LogoSection onClick={redirectPointsOfYou} src={PointsOfYouLogo}/>
            </FlexWrapper>
        </Container>
    );
};
