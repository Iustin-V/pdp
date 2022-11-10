import React, { useState } from "react";

import { PDPContext } from "../../App";
import { getData } from "../../utils/getData";
import idea from "../images/icons8-idea-500.webp";
import talkWithTeacher from "../images/icons8-mail-500.webp";
import storytelling from "../images/icons8-storyfire-500.webp";
import {
  RectangleStyled,
  StyledIcon,
  StyledIconLabel,
  StyledIconLink,
} from "./PrincipalesLinksStyle";

export const PrincipalesLinks = () => {
  const contextLocal: {
    editFunction: (data: any, type: string) => boolean;
    allCategories: any[];
  } = React.useContext(PDPContext);
  const [contentText, setContentTexts] = useState([]);

  React.useEffect(() => {
    const mainPage = getData(contextLocal?.allCategories, "MainPage");
    setContentTexts(mainPage.content);
  }, [contextLocal]);

  const ImageArray = [idea, talkWithTeacher, storytelling];

  return (
    <RectangleStyled>
      {contentText?.map(
        (item: { link: string; label: string; alt: string }, key) => {
          console.log(item.link)
          return (
            <StyledIconLink key={key} to={`/${localStorage.locale}${item.link}`}>
              <StyledIcon src={ImageArray[key]} alt={`${item.label} Pic`} />
              <StyledIconLabel>{item.label}</StyledIconLabel>
            </StyledIconLink>
          );
        }
      )}
    </RectangleStyled>
  );
};
