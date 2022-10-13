import React, {useState} from "react";
import {TitleSection} from "../Styles";
import {colors} from "../../generalStyle";
import OanaNiculescuLogo from "../images/Partners/oananiculescu-logo.png";
import LectiiViraleLogo from "../images/Partners/lectiivirale-logo.png";
import PointsOfYouLogo from "../images/Partners/pointsofyou-logo.png";

import styled from "styled-components";
import {PDPContext} from "../../App";
import {getData} from "../../utils/getData";

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

        const contextLocal: object = React.useContext(PDPContext);
        const [contentText, setContentTexts] = useState({title: ''});

        React.useEffect(() => {
            const textData = getData(contextLocal, "Partners");
            setContentTexts(textData);
        }, [contextLocal]);


        const redirectLink = (link: string) => {
            window.open(link)
        }

        const partnersPhotos = [OanaNiculescuLogo, PointsOfYouLogo, LectiiViraleLogo]
        const partnersLink = ["https://oananiculae.com/", "https://www.points-of-you.ro/", "https://lectii-virtuale.ro/"]

        const LogoSections =
            partnersLink.map((link, index) => {
                return (<LogoSection onClick={() => redirectLink(partnersLink[index])} src={partnersPhotos[index]}/>)
            })


        return (
            <Container>
                <TitleSection color={colors.primary.base}>{contentText.title}</TitleSection>
                <FlexWrapper>
                    {LogoSections}
                </FlexWrapper>
            </Container>
        );
    }
;
