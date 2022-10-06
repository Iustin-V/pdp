import React, {useEffect, useState} from "react";
import {TitleSection} from "../Styles";
import {colors} from "../../generalStyle";
import OanaNiculescuLogo from "../images/Partners/oananiculescu-logo.png";
import LectiiViraleLogo from "../images/Partners/lectiivirale-logo.png";
import PointsOfYouLogo from "../images/Partners/pointsofyou-logo.png";

import styled from "styled-components";
import axios from "axios";

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
        // console.log('start')
        // const {data, loading, error} = useFetch("/sections")
        // console.log(data, 'data from fetch')

        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);

        const getData = async () => {
            try {
                const result = await axios("https://api-example2.onrender.com/api/sections")
                console.log(result.data)

            } catch (err) {
                console.log(err)
            }
        }

        useEffect(() => {
            getData()
        });

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
    }
;
