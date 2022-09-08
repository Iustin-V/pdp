import * as React from "react";

import {
  StyledNav,
  StyledNavItem,
  StyledText,
  StyledProgressBar,
  StyledProgressContainer,
  StyledImage,
} from "./Navbar-Style";
import logo from "./images/logo-white.png";

interface navbarProps {
  setTopButton: (value: boolean) => void;
}

export const Navbar = (props: navbarProps) => {
  const [visible, setVisible] = React.useState(true);
  const [scrollWidth, setScrollWidth] = React.useState(0);
  const navbarTexts = [
    "Cutia cu povești",
    "Povestea săptămânii",
    "Cursuri",
    "Evenimente",
    "Vorbește cu profa",
  ];

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const percentScrolled =
        (window.scrollY / (document.body.clientHeight - window.innerHeight)) *
        100;
      // @ts-ignore
      if (window.scrollY > window?.visualViewport?.height - 160) {
        props.setTopButton(true);
        setVisible(false);
      } else {
        // @ts-ignore
        if (window.scrollY < window?.visualViewport?.height + 80) {
          props.setTopButton(false);
          setVisible(true);
        }
      }
      setScrollWidth(percentScrolled);
    });
      console.log('visible',visible)
  }, [window.scrollY]);

  const value = navbarTexts.map((item) => {
    return (
      <StyledNavItem key={item} to={`/${item.toLowerCase() || "#  "}`}>
        <StyledText>{item}</StyledText>
      </StyledNavItem>
    );
  });

  return (
    <>
      <StyledNav height={visible ? "80px" : "0"}>
        <StyledNavItem key="logo" to="/">
          <StyledImage height="60px" src={logo} alt="logo" />
        </StyledNavItem>
        {value}
      </StyledNav>
      <StyledProgressContainer top={visible ? "80px" : ""}>
        <StyledProgressBar width={`${scrollWidth}%`} />
      </StyledProgressContainer>
    </>
  );
};
