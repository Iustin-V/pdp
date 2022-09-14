import {
  StyledFooter,
  StyledFooterText,
  StyledFirstRow,
  StyledFooterLink,
  StyledFooterLinksColumn,
  StyledFooterSocialMedia,
  StyledSMImage,
  StyledFooterSocialMediaColumn,
  StyledHeaderText,
  StyledSecondRow,
} from "./Footer-Style";
import facebookIcon from "./images/social-media/icons8-facebook.svg";
import youtubeIcon from "./images/social-media/icons8-youtube.svg";
import instagramIcon from "./images/social-media/icons8-instagram.svg";
import tiktokIcon from "./images/social-media/icons8-tiktok.svg";
import twitterIcon from "./images/social-media/icons8-twitter.svg";
import whiteLogo from "./images/logo-white.png";
import { StyledImage, StyledLogoItem, StyledText } from "./Navbar-Style";
import * as React from "react";

interface footerLink {
  slug: string;
  label: string;
}

interface socialMedia {
  name: string;
  iconSrc: string;
  link: string;
}

export const Footer = () => {
  const footerLinks: footerLink[] = [
    { slug: "/", label: "Acasa" },
    { slug: "/blog", label: "Blog" },
    {
      slug: "/cursuri",
      label: "Cursuri",
    },
    { slug: "/cutia-cu-povesti", label: "Cutia cu povesti" },
    { slug: "/povestea-saptamanii", label: "Povestea saptamanii" },
    { slug: "/vorbeste-cu-profa", label: "Vorbeste cu profa" },
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
      link: "https://www.tiktok.com/@profadepovesti",
    },
    {
      name: "twitter",
      iconSrc: twitterIcon,
      link: "https://twitter.com/ITeachStories?t=KTFzvM7w2Inociouib0Ieg&s=09",
    },
  ];

  const FooterLinkColumn = footerLinks.map((link) => {
    return (
      <StyledFooterLink key={link.label} to={link.slug}>
        <StyledText>{link.label}</StyledText>
      </StyledFooterLink>
    );
  });

  const FooterSocialMediaColumn = socialMediaLinks.map((socialMedia) => {
    return (
      <StyledFooterSocialMedia key={socialMedia.name} to={socialMedia.link}>
        <StyledSMImage src={socialMedia.iconSrc} alt={socialMedia.name} />
      </StyledFooterSocialMedia>
    );
  });

  const FooterLogo = () => {
    return (
      <StyledLogoItem key="" to={`/`}>
        <StyledImage height="80px" src={whiteLogo} alt="logo" />
      </StyledLogoItem>
    );
  };

  return (
    <StyledFooter>
      <StyledFirstRow>
        <StyledFooterLinksColumn>
          <StyledHeaderText>Link-uri utile: </StyledHeaderText>
          {FooterLinkColumn}
        </StyledFooterLinksColumn>
        <StyledFooterSocialMediaColumn>
          <StyledHeaderText>Urmărește: </StyledHeaderText>
          {FooterSocialMediaColumn}
        </StyledFooterSocialMediaColumn>
      </StyledFirstRow>
      <StyledSecondRow>
        <FooterLogo />
        <StyledFooterText>2022 © Profa De Povesti</StyledFooterText>
      </StyledSecondRow>
    </StyledFooter>
  );
};
