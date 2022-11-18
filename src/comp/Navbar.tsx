import * as React from "react";
import { useState } from "react";

import { Category, PDPContext } from "../App";
import linkGenerate from "../generalFunction";
import { colors } from "../generalStyle";
import { getData } from "../utils/getData";
import { LanguageSelector } from "./LanguageSelector";
import {
  BurgerMenu,
  Container,
  ItemsWrapper,
  StyledImage,
  StyledLateralMenu,
  StyledLogoItem,
  StyledMobileNav,
  StyledNav,
  StyledNavItem,
  StyledNavItems,
  StyledText,
} from "./Navbar-Style";
import { ProgressBar } from "./ProgressBar";
import en_logo from "./images/en-logo.webp";
import fr_logo from "./images/fr-logo.webp";
import logo from "./images/logo.webp";

interface navbarProps {
  setTopButton: (value: boolean) => void;
  allCategories: Category[];
}

export const Navbar = (props: navbarProps) => {
  const contextLocal: {
    editFunction: (data: any, type: string) => boolean;
    allCategories: any[];
  } = React.useContext(PDPContext);

  const [navbarText, setNavbarTexts] = useState([]);
  const [activeMenu, setActiveMenu] = useState(false);
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
  React.useEffect(() => {
    if (activeMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeMenu]);

  const value =
    navbarText &&
    navbarText.map((item) => {
      return (
        <StyledNavItem
          onClick={() => {
            setActiveMenu(false);
          }}
          key={item}
          to={`${localStorage.locale}/${linkGenerate(item) || "#"}`}
        >
          <StyledText>{item}</StyledText>
        </StyledNavItem>
      );
    });

  const Logo = () => {
    return (
      <StyledLogoItem
        key=""
        to={`/${localStorage.locale}`}
        onClick={() => {
          setActiveMenu(false);
        }}
      >
        <StyledImage
          height="70px"
          width="218px"
          src={
            localStorage?.locale === "en"
              ? en_logo
              : localStorage?.locale === "fr"
              ? fr_logo
              : logo
          }
          alt="logo"
        />
      </StyledLogoItem>
    );
  };

  const MobileMenu = () => {
    return (
      <>
        {!activeMenu && (
          <BurgerMenu id={"menubutton"} onClick={() => setActiveMenu(true)}>
            <span></span>
            <span></span>
            <span></span>
          </BurgerMenu>
        )}
        {activeMenu && (
          <>
            <BurgerMenu
              id={"menubutton"}
              className={"menubuttonopened"}
              onClick={() => setActiveMenu(false)}
            >
              <span></span>
              <span></span>
              <span></span>
            </BurgerMenu>
            <StyledLateralMenu id={"lateralmenu"} className={"opened"}>
              {value}
            </StyledLateralMenu>
          </>
        )}
      </>
    );
  };

  return (
    <Container>
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
