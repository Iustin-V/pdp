import * as React from "react";
import { useState } from "react";

import {
  BurgerMenu,
  Container,
  Overlay,
  StyledImage,
  StyledLateralMenu,
  StyledLogoItem,
  StyledMobileNav,
  StyledNav,
  StyledNavItem,
  StyledNavItems,
  StyledText,
  ItemsWrapper,
} from "./Navbar-Style";
import logo from "./images/logo.png";
import burgerLogo from "./images/icons8-menu.svg";
import closeIcon from "./images/icons8-close.svg";
import { ProgressBar } from "./ProgressBar";
import { colors } from "../generalStyle";
import { LanguageSelector } from "./LanguageSelector";
import linkGenerate from "../generalFunction";
import { Category, PDPContext } from "../App";
import { getData } from "../utils/getData";

interface navbarProps {
  setTopButton: (value: boolean) => void;
  allCategories: Category[];
}

export const Navbar = (props: navbarProps) => {
  const contextLocal = React.useContext(PDPContext);

  const [isActive, setIsActive] = useState(false);
  const [logoSrc, setLogoSrc] = useState(burgerLogo);
  const [navbarText, setNavbarTexts] = useState([]);

  React.useEffect(() => {
    const navbar = getData(contextLocal, "Navbar");
    setNavbarTexts(navbar.subTitle);
  }, [contextLocal]);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window!.visualViewport!.height - 160) {
        props.setTopButton(true);
      } else {
        if (window.scrollY < window!.visualViewport!.height + 80) {
          props.setTopButton(false);
        }
      }
    });
  }, [window.scrollY]);

  const value =
    navbarText &&
    navbarText.map((item, key) => {
      return (
        <StyledNavItem
          onClick={() => {
            handleClose();
          }}
          key={item}
          to={`/${linkGenerate(item) || "#"}`}
        >
          <StyledText>{item}</StyledText>
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
      {isActive && <Overlay onClick={handleClose} />}
      <StyledNav height="80px">
        <Logo />
        <ItemsWrapper>
          <StyledNavItems>{value}</StyledNavItems>
          <LanguageSelector />

          <StyledMobileNav>
            <MobileMenu isActive={isActive} logoSrc={logoSrc} />
          </StyledMobileNav>
        </ItemsWrapper>
      </StyledNav>
      <ProgressBar color={colors.primary.base} height={5} />
    </Container>
  );
};
