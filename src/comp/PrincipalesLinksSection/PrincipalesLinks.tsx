import React, { useState } from "react";

import { PDPContext } from "../../App";
import linkGenerate from "../../generalFunction";
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
  const contentImage = [
    { img: idea, label: "Cursuri" },
    {
      img: talkWithTeacher,
      label: "Vorbește cu profa",
    },
    { img: storytelling, label: "Povestea săptămânii" },
  ];

  return (
    <RectangleStyled>
      {contentImage?.map((item: { img: any; label: string }, key) => {
        return (
          <StyledIconLink key={key} to={`/ro/${linkGenerate(item.label)}`}>
            <StyledIcon src={item.img} alt={`${item.label} Pic`} />
            <StyledIconLabel>{item.label}</StyledIconLabel>
          </StyledIconLink>
        );
      })}
    </RectangleStyled>
  );
};
