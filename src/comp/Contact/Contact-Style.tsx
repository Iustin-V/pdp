import styled from "styled-components";
import {fontSizes,colors} from "../../generalStyle";
import arrow from "../images/arrow.png"

export const StyledContactForm=styled.div`
margin-top:85px;
max-width:1440px;
margin: 125px auto 0; 

`


export const StyledForm = styled.form`
  border-radius: 25px;
  background: #f8ecd4;
  max-width:1100px;
  padding:40px;
  margin:0 auto 40px;
`;
export const StyledInput = styled.input`
  display: block;
  width: calc(100% - 22px);
  font-size: ${fontSizes.desktop.paragraph.base};
  margin-bottom: 24px;
  border: 1px solid grey;
  border-radius:5px;
  background: #f8f4e5;
  min-width: 250px;
  outline: none;
  padding: 5px 10px;
  font-family:"Nunito-Italic";
  color: ${colors.primary.base};
`;
export const StyledButton = styled.input`
  height: 40px;
  display: block;
  margin: 0 auto;
  line-height: 24px * 2;
  padding: 0 20px;
  background: #b4a087;
  letter-spacing: 2px;
  transition: 0.2s all ease-in-out;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 1);

  :hover {
    background: #f8f4e5;
  }
`;
export const StyledContainer = styled.div`
  margin: 20px 0;
`;
export const StyledTextArea = styled.textarea`
  display: block;
  width: calc(100% - 22px);
  font-size: ${fontSizes.desktop.paragraph.base};
  font-family:"Nunito-Italic";
  margin-bottom: 24px;
  border: 1px solid grey;
  border-radius:5px;
  background: #f8f4e5;
  min-width: 250px;
  padding: 5px 10px;
  outline: none;
  color: ${colors.primary.base};
`;
export const StyledSelect = styled.select`
  display: block;
  width: 100%;
  font-size: ${fontSizes.desktop.paragraph.base};
  font-family:"Nunito-Italic";
  margin-bottom: 24px;
  border: 1px solid grey;
  border-radius:5px;
  background: #f8f4e5;
  min-width: 250px;
  padding: 5px 10px;
  outline: none;
  color: ${colors.primary.base};
  div{
    max-width:300px;
    background:red;
  }
`;