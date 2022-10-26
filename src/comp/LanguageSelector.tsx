import styled from "styled-components";
import React from "react";
import { colors } from "../generalStyle";
import roflag from "./images/ro-flag.png";
import ukflag from "./images/uk-flag.png";
import frflag from "./images/fr-flag.png";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: calc(100% - 5px);
  font-size: 18px;
  font-family: "Nunito-Italic";
  margin-top: 5px;
  font-weight: 700;
  color: ${colors.primary.base};
  :hover {
    border-radius: 15px 15px 0 0;
    background-color: ${colors.secondary.lighter};
    transition: background-color 1s ease;
    cursor: pointer;
    ul {
      visibility: visible;
    }
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    padding:5px;
  }
  ul {
    background-color: ${colors.secondary.base};
    position: absolute;
    top: 80px;
    z-index: 2000;
    margin: 0;
    width: 85px;
    padding: 0;
    list-style: none;
    visibility: hidden;

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
      padding: 5px;
      :hover {
        background-color: ${colors.secondary.lighter};
        cursor: pointer;
      }
    }
  }
`;
const FlagIcon = styled.img`
  height: 25px;
`;
const setCookie = (value: string) => {
  localStorage.setItem("locale", value);
  window.location.href = "/";
};

const CurrentCookie = () => {
  let cookie = localStorage.getItem("locale");
  switch (cookie) {
    case "ro": {
      return (
        <>
          <FlagIcon src={roflag} alt={"roflag"} />
          RO
        </>
      );
    }
    case "en": {
      return (
        <>
          <FlagIcon src={ukflag} alt={"ukflag"}/>
          EN
        </>
      );
    }
    case "fr": {
      return (
        <>
          <FlagIcon src={frflag} alt={"frflag"} />
          FR
        </>
      );
    }
  }
  return <></>;
};

export const LanguageSelector = () => {
  return (
    <StyledDiv>
      <div>
        <CurrentCookie /> &#9660;{" "}
      </div>
      <ul>
        <li onClick={(localStorage.getItem("locale")!=="ro") ? () => setCookie("ro"):undefined}>
          {" "}
          <FlagIcon src={roflag} alt={"roflag"} /> RO{" "}
        </li>
        <li onClick={(localStorage.getItem("locale")!=="en") ? () => setCookie("en"):undefined}>
          {" "}
          <FlagIcon src={ukflag} alt={"ukflag"} /> EN
        </li>
        <li onClick={(localStorage.getItem("locale")!=="fr") ? () => setCookie("fr"):undefined}>
          <FlagIcon src={frflag} alt={"frflag"}/> FR
        </li>
      </ul>
    </StyledDiv>
  );
};
