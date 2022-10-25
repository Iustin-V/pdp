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
  const contextLocal: {
    editFunction: (data: any) => boolean;
    allCategories: any[];
  } = React.useContext(PDPContext);

  const [navbarText, setNavbarTexts] = useState([]);

  React.useEffect(() => {
    const navbar = getData(contextLocal?.allCategories, "Navbar");
    setNavbarTexts(navbar.content);
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
    navbarText.map((item) => {
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
        <StyledImage height="70px" width="218px" src={logo} alt="logo" />
      </StyledLogoItem>
    );
  };

  const handleClose = () => {
    document.body.style.overflow = "auto";
    document?.getElementById("lateralmenu")?.classList.remove("opened");
    document
      ?.getElementById("menubutton")
      ?.classList.remove("menubuttonopened");
    document?.getElementById("overlay")?.classList.remove("visible");
  };
  const handleOpen = () => {
    document.body.classList.toggle("overflow");
    document?.getElementById("lateralmenu")?.classList.toggle("opened");
    document
      ?.getElementById("menubutton")
      ?.classList.toggle("menubuttonopened");
    document?.getElementById("overlay")?.classList.toggle("visible");
  };
  const MobileMenu = () => {
    return (
      <>
        <BurgerMenu id={"menubutton"} onClick={handleOpen}>
          <span></span>
          <span></span>
          <span></span>
        </BurgerMenu>
        <StyledLateralMenu id={"lateralmenu"}>{value}</StyledLateralMenu>
      </>
    );
  };

  return (
    <Container>
      <Overlay id="overlay" onClick={handleClose} />
      <StyledNav height="80px">
        <Logo />
        <ItemsWrapper>
          <StyledNavItems>{value}</StyledNavItems>
          <LanguageSelector />

          <StyledMobileNav>
            <MobileMenu />
          </StyledMobileNav>
        </ItemsWrapper>
      </StyledNav>
      <ProgressBar color={colors.primary.base} height={5} />
    </Container>
  );
};
