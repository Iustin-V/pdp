import React, { useState } from "react";
import {
  RectangleStyled,
  StyledIcon,
  StyledIconLabel,
  StyledIconLink,
} from "./PrincipalesLinksStyle";
import storytelling from "../images/icons8-storyfire-500.png";
import idea from "../images/icons8-idea-500.png";
import talkWithTeacher from "../images/icons8-mail-500.png";
import { getData } from "../../utils/getData";
import { PDPContext } from "../../App";

export const PrincipalesLinks = () => {
  const contextLocal = React.useContext(PDPContext);
  const [contentText, setContentTexts] = useState([]);

  React.useEffect(() => {
    const mainPage = getData(contextLocal, "MainPage");
    setContentTexts(mainPage.content);
  }, [contextLocal]);
  console.log(contentText, "da");

  const PrincipalesLinksArray = [
    {
      icon: idea,
      alt: "cursuri",
      label: "Cursuri",
      link: "/cursuri",
    },
    {
      icon: talkWithTeacher,
      alt: "talkWithTeacher",
      label: "Vorbeste cu profa",
      link: "/vorbeste-cu-profa",
    },
    {
      icon: storytelling,
      alt: "storytelling",
      label: "Povestea saptamanii",
      link: "/povestea-saptamanii",
    },
  ];

  return (
    <RectangleStyled>
      {contentText?.map(
        (
          item: { link: string; icon: string; label: string; alt: string },
          key
        ) => {
            console.log(item.icon,'dada')
          return (
            <StyledIconLink key={key} to={item.link}>
              <StyledIcon src=  {`../images/${item.icon}`}           alt={"idea"} />
              <StyledIconLabel>{item.label}</StyledIconLabel>
            </StyledIconLink>
          );
        }
      )}
    </RectangleStyled>
  );
};
