import styled from "styled-components";

import { colors, fontSizes } from "../../generalStyle";

export const ContactFormBackground = styled.div<{ backgroundImage: string }>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
`;

export const StyledContactForm = styled.div`
  max-width: 1440px;
  margin: 85px auto 0;
  padding: 40px;
  display: flex;
  flex-direction: row;
  column-gap: 40px;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    div:first-child {
      margin-top: 100px;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 768px) {
    div:first-child {
      margin-top: 50px;
    }
  }
`;
export const TextsSection = styled.div`
  position: relative;
  max-width: 465px;
  height: fit-content;
  border-radius: 25px;
  background: #f8ecd4;
  border: 1px solid ${colors.primary.base};
  padding: 20px;
  h1 {
    margin: 0;
  }

  @media (max-width: 1200px) {
    width: 100%;
    max-width: calc(100% - 40px);
  }
  @media (max-width: 768px) {
    p {
      margin-bottom: 0;
    }
  }
`;
export const StyledImageTeacher = styled.img`
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1) translateY(-100%);
  position: absolute;
  left: 20px;
  top:10px;
   transition:top 0.5s;
animation: teacher-go-up 2s;
  @media (max-width: 1200px) {
    height: 120px;
    object-fit: contain;
    top:0px;
   transition:top 0.5s;
  }
  @media (max-width: 768px) {
    height: 80px;
    object-fit: contain;
  }
   :hover {
   top:0px;
   transition:top 0.5s;
   }
  @keyframes teacher-go-up {
  from {top:100%;}
  to {top:10px;}
  }
`;

export const StyledForm = styled.form`
  border-radius: 25px;
  background: #f8ecd4;
  max-width: 600px;
  width: 100%;
  padding: 20px 40px;
  border: 1px solid ${colors.primary.base};

  @media (max-width: 1200px) {
    max-width: calc(100% - 40px);
    padding: 20px 20px;
  }
`;
export const StyledInput = styled.input`
  display: block;
  width: calc(100% - 22px);
  font-size: ${fontSizes.desktop.paragraph.base};
  border: 1px solid grey;
  border-radius: 5px;
  background: #f8f4e5;
  outline: none;
  padding: 5px 10px;
  font-family: "Nunito-Italic";
  color: ${colors.primary.base};

  :focus {
    border: 1px solid ${colors.primary.base};
    background: #f5f5f5;
  }
  @media (max-width: 768px) {
    font-size: ${fontSizes.mobile.paragraph.small};
  }
`;
export const StyledButton = styled.input`
  color: ${colors.primary.base};
  height: 40px;
  display: block;
  margin: 0 auto;
  line-height: 24px * 2;
  padding: 0 50px;
  background: ${colors.secondary.lighter};

  letter-spacing: 2px;
  transition: 0.2s all ease-in-out;
  outline: none;
  border: 1px solid ${colors.secondary.base};
  font-size: ${fontSizes.desktop.paragraph.base};
  font-weight: 600;
  letter-spacing: 1px;

  border-radius: 8px;
  :hover {
    background: white;
    -webkit-box-shadow: 4px 1px 15px -1px rgba(0, 0, 0, 0.4);
    box-shadow: 4px 1px 15px -1px rgba(0, 0, 0, 0.4);
  }

  :disabled {
    pointer-events: none;
    color: grey;
  }

  @media (max-width: 768px) {
    font-size: ${fontSizes.mobile.paragraph.small};
    padding: 0 10px;
  }
`;
export const StyledContainer = styled.div`
  margin: 35px 0;
`;
export const StyledTextArea = styled.textarea`
  display: block;
  width: calc(100% - 22px);
  font-size: ${fontSizes.desktop.paragraph.base};
  font-family: "Nunito-Italic";
  border: 1px solid grey;
  border-radius: 5px;
  background: #f8f4e5;
  padding: 5px 10px;
  outline: none;
  resize: none;
  color: ${colors.primary.base};
  height: 120px;

  :focus {
    border: 1px solid ${colors.primary.base};
    background: #f5f5f5;
  }
  @media (max-width: 768px) {
    font-size: ${fontSizes.mobile.paragraph.small};
  }
`;
export const StyledSelect = styled.select`
  display: block;
  width: 100%;
  font-size: ${fontSizes.desktop.paragraph.base};
  font-family: "Nunito-Italic";
  margin-bottom: 24px;
  border: 1px solid grey;
  border-radius: 5px;
  background: #f8f4e5;
  padding: 5px 10px;
  outline: none;
  color: ${colors.primary.base};

  :focus {
    border: 1px solid ${colors.primary.base};
    background: #f5f5f5;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: ${fontSizes.mobile.paragraph.small};
  }
`;

export const StyledLabel = styled.label`
  font-size: ${fontSizes.desktop.paragraph.base};
  font-family: "Nunito-Italic";
  color: ${colors.primary.base};
  font-weight: 600;
  position: relative;

  @media (max-width: 768px) {
    font-size: ${fontSizes.mobile.paragraph.small};
  }
`;
export const StyledError = styled.p`
  color: red;
  background: #ffcccc;
  margin: 0;
  max-width: calc(100% - 20px);
  padding: 3px 10px;
  font-weight: 300;
  position: absolute;
  font-size: ${fontSizes.desktop.paragraph.small};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
