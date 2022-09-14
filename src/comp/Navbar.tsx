import * as React from "react";
import ProgressBar from "react-progressbar-on-scroll";

import {
  StyledNav,
  StyledNavItem,
  StyledText,
  StyledProgressBar,
  StyledProgressContainer,
  StyledImage,
  Container,
  StyledNavItems,
  StyledLogoItem,
  StyledMobileNav,
  BurgerMenu,
  StyledLateralMenu,
  Overlay,
} from "./Navbar-Style";
import logo from "./images/logo.png";
import burgerLogo from "./images/icons8-menu.svg";
import closeIcon from "./images/icons8-close.svg";
import { useState } from "react";

interface navbarProps {
  setTopButton: (value: boolean) => void;
}

export const Navbar = (props: navbarProps) => {
  const [isActive, setIsActive] = useState(false);
  const [logoSrc, setLogoSrc] = useState(burgerLogo);
  const [isTopButton, setTopButton] = React.useState(false);
  const navbarTexts = [
    { name: "Cutia cu povești", slug: "cutia-cu-povesti" },
    { name: "Povestea săptămânii", slug: "povestea-saptamanii" },
    { name: "Cursuri", slug: "cursuri" },
    { name: "Evenimente", slug: "evenimente" },
    { name: "Vorbeste cu profa", slug: "vorbeste-cu-profa" },
  ];

  const [scrollWidth, setScrollWidth] = React.useState(0);

  // React.useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     const percentScrolled =
  //       (window.scrollY / (document.body.clientHeight - window.innerHeight)) *
  //       100;
  //     if (window.scrollY > window!.visualViewport!.height - 160) {
  //       setTopButton(true);
  //     } else {
  //       if (window.scrollY < window!.visualViewport!.height + 80) {
  //         setTopButton(false);
  //       }
  //     }
  //     setScrollWidth(Math.round(percentScrolled));
  //   });
  // }, [window.scrollY]);

  const value = navbarTexts.map((item) => {
    return (
      <StyledNavItem key={item.name} to={`/${item.slug || "#"}`}>
        <StyledText>{item.name}</StyledText>
      </StyledNavItem>
    );
  });

  const Logo = () => {
    return (
      <StyledLogoItem key="" to={`/`}>
        <StyledImage height="70px" src={logo} alt="logo" />
      </StyledLogoItem>
    );
  };

  const handleClose = () => {
    document.body.style.overflow = "auto";
    setLogoSrc(burgerLogo);
    setIsActive(false);
  };
  const handleOpen = () => {
    document.body.style.overflow = "hidden";
    setLogoSrc(closeIcon);
    setIsActive(true);
  };
  const MobileMenu = (props: { isActive: boolean; logoSrc: string }) => {
    return (
      <>
        <BurgerMenu
          onClick={props.logoSrc === burgerLogo ? handleOpen : handleClose}
        >
          <img src={props.logoSrc} alt="burgerMenu" />
        </BurgerMenu>
        <StyledLateralMenu lateralActive={props.isActive}>
          {value}
        </StyledLateralMenu>
      </>
    );
  };

  return (
    <Container isActive={isActive}>
      {isActive && <Overlay />}
      <StyledNav height="80px">
        <Logo />
        <StyledNavItems>{value}</StyledNavItems>
        <StyledMobileNav>
          <MobileMenu isActive={isActive} logoSrc={logoSrc} />
        </StyledMobileNav>
      </StyledNav>
      <ProgressBar color="#002366" height={5} />
      {/*<StyledProgressContainer>*/}
      {/*  <StyledProgressBar width={`${scrollWidth}%`} />*/}
      {/*</StyledProgressContainer>*/}
    </Container>
  );
};
