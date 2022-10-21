import styled from "styled-components";
import React from "react";
import { colors } from "../generalStyle";

const StyledDropdown = styled.select`
  display: block;
  font-size: 18px;
  font-family: "Nunito-Italic";
  padding: 5px 10px;
  border: none;
  height: 75px;
  margin-top: 5px;
  background: transparent;
  outline: none;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${colors.primary.base};
  :hover {
    border-radius: 15px 15px 0 0;
    background-color: ${colors.secondary.lighter};
    transition: background-color 1s ease;
  }

  @media (max-width: 1200px) {
    font-size: 14px;
  }
`;
const setCookie = (value: string) => {
  localStorage.setItem("locale", value);
  window.location.href = "/";
};
export const LanguageSelector = () => {
  return (
    <>
      <StyledDropdown
        id="lang"
        name="lang"
        placeholder={localStorage.locale}
        defaultValue={localStorage.locale}
        onChange={(e) => setCookie(e.target.value)}
      >
        <option value="ro">🇷🇴 RO</option>
        <option value="en">🇬🇧 EN</option>
        <option value="fr">🇫🇷 FR</option>
      </StyledDropdown>
    </>
  );
};
