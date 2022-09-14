import * as React from "react";

import {
  StyledNav,
  StyledNavItem,
  StyledText,
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
import { ProgressBar } from "./ProgressBar";
import {colors} from "../generalStyle";

interface navbarProps {
  setTopButton: (value: boolean) => void;
}

export const Navbar = (props: navbarProps) => {
  const [isActive, setIsActive] = useState(false);
  const [logoSrc, setLogoSrc] = useState(burgerLogo);
  const navbarTexts = [
    { name: "Cutia cu povești", slug: "cutia-cu-povesti" },
    { name: "Povestea săptămânii", slug: "povestea-saptamanii" },
    { name: "Cursuri", slug: "cursuri" },
    { name: "Evenimente", slug: "evenimente" },
    { name: "Vorbeste cu profa", slug: "vorbeste-cu-profa" },
  ];

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window!.visualViewport!.height - 160) {
        props.setTopButton(true);
        console.log(window.scrollY)
      } else {
        if (window.scrollY < window!.visualViewport!.height + 80) {
          props.setTopButton(false);
        }
      }
    });
  }, [window.scrollY]);


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
      <ProgressBar color={colors.primary.base} height={5} />
    </Container>
  );
};
