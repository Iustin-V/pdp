import React from "react";
import {
  RectangleStyled,
  StyledIconLink,
  StyledIcon,
  StyledIconLabel,
} from "./PrincipalesLinksStyle";
import storytelling from "../images/icons8-storyfire-500.png";
import idea from "../images/icons8-idea-500.png";
import talkWithTeacher from "../images/icons8-mail-500.png";

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
interface PrincipalesLinks {
  mainLinks: any;
}
export const PrincipalesLinks = (props: PrincipalesLinks) => {
  return (
    <RectangleStyled>
      {props?.mainLinks?.map(
        (item: { url: string; label: string ,image:any}, key: number) => {
          return (
            <StyledIconLink key={key} to={item?.url}>
              {}
              <StyledIcon src={item?.image} alt={"idea"} />
              <StyledIconLabel>{item?.label}</StyledIconLabel>
            </StyledIconLink>
          );
        }
      )}
    </RectangleStyled>
  );
};
