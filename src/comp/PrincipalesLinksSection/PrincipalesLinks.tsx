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
  const contextLocal: {
    editFunction: (data: any) => boolean;
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
          return (
            <StyledIconLink key={key} to={item.link}>
              <StyledIcon src={ImageArray[key]} alt={`${item.label} Pic`} />
              <StyledIconLabel>{item.label}</StyledIconLabel>
            </StyledIconLink>
          );
        }
      )}
    </RectangleStyled>
  );
};
