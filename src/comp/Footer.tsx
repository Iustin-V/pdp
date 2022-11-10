import * as React from "react";
import { useState } from "react";

import { PDPContext } from "../App";
import { getData } from "../utils/getData";
import {
  LogoContainer,
  StyledFirstRow,
  StyledFooter,
  StyledFooterSocialMedia,
  StyledFooterSocialMediaColumn,
  StyledFooterText,
  StyledSMImage,
  StyledSecondRow,
} from "./Footer-Style";
import { StyledImage, StyledLogoItem } from "./Navbar-Style";
import redEclipse from "./images/RedEclipse.webp";
import enlogo from "./images/en-logo.webp";
import frlogo from "./images/fr-logo.webp";
import logo from "./images/logo.webp";
import facebookIcon from "./images/social-media/icons8-facebook.svg";
import instagramIcon from "./images/social-media/icons8-instagram.svg";
import tiktokIcon from "./images/social-media/icons8-tiktok.svg";
import twitterIcon from "./images/social-media/icons8-twitter.svg";
import youtubeIcon from "./images/social-media/icons8-youtube.svg";

interface socialMedia {
  name: string;
  iconSrc: string;
  link: string;
}

export const Footer = () => {
  const contextLocal: {
    editFunction: (data: any, type: string) => boolean;
    allCategories: any[];
  } = React.useContext(PDPContext);
  const [contentMediaLinks, setContentMediaLinks] = useState({ title: "" });

  React.useEffect(() => {
    const dataMedia = getData(contextLocal?.allCategories, "FooterSocialLinks");
    setContentMediaLinks(dataMedia);
  }, [contextLocal]);

  const socialMediaIcon = [
    youtubeIcon,
    facebookIcon,
    instagramIcon,
    tiktokIcon,
    twitterIcon,
  ];

  const socialMediaLinks: socialMedia[] = [
    {
      name: "youtube",
      iconSrc: youtubeIcon,
      link: "https://www.youtube.com/channel/UC9lqTVh9fYo3L35XeLuBlPw",
    },

    {
      name: "facebook",
      iconSrc: facebookIcon,
      link: "https://www.facebook.com/people/Profa-de-pove%C8%99ti/100083035877348/",
    },
    {
      name: "instagram",
      iconSrc: instagramIcon,
      link: "https://www.instagram.com/profadepovesti/",
    },
    {
      name: "tiktok",
      iconSrc: tiktokIcon,
      link: "https://www.tiktok.com/@thestoryteacher",
    },
    {
      name: "twitter",
      iconSrc: twitterIcon,
      link: "https://twitter.com/ITeachStories?t=KTFzvM7w2Inociouib0Ieg&s=09",
    },
  ];

  const redirectLink = (link: string) => {
    window.open(link);
  };

  const FooterSocialMediaColumn = socialMediaLinks.map((socialMedia, index) => {
    return (
      <StyledFooterSocialMedia
        name={socialMedia.name}
        key={socialMedia.name}
        onClick={() => redirectLink(socialMedia.link)}
      >
        <StyledSMImage src={socialMediaIcon[index]} alt={socialMedia.name} />
      </StyledFooterSocialMedia>
    );
  });

  const FooterLogo = () => {
    return (
      <StyledLogoItem key="" to={`/${localStorage.locale}`}>
        <StyledImage
          height="80px"
          src={localStorage?.locale === "en" ? enlogo : localStorage?.locale === "fr"? frlogo: logo}
          alt="logo"
        />
      </StyledLogoItem>
    );
  };

  return (
    <StyledFooter>
      <StyledFirstRow>
        <LogoContainer>
          <FooterLogo />
          <StyledFooterText>2022 © Profa De Povesti</StyledFooterText>
        </LogoContainer>
        <StyledFooterSocialMediaColumn>
          {FooterSocialMediaColumn}
        </StyledFooterSocialMediaColumn>
      </StyledFirstRow>
      <StyledSecondRow>
        <img src={redEclipse} alt="RedEclipseLogo" onClick={()=>redirectLink("www.redeclipse.ro")}/>
      </StyledSecondRow>
    </StyledFooter>
  );
};
