import styled from "styled-components";
import React from "react";
import { colors, fontSizes } from "../generalStyle";

const StyledDropdown = styled.select`
  display: block;
  width: 100px;
  font-size: ${fontSizes.desktop.paragraph.base};
  font-family: "Nunito-Italic";
  padding: 5px 10px;
  border: none;
  background: transparent;
  outline: none;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${colors.primary.base};
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
        <option value="ro">RO</option>
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </StyledDropdown>
    </>
  );
};
