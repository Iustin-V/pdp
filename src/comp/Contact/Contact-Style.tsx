import styled from "styled-components";
import {fontSizes,colors} from "../../generalStyle";

export const StyledContactForm=styled.div`
margin-top:85px;
max-width:1440px;
margin: 125px auto 0; 
padding: 0 40px 40px;
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
  border: 1px solid grey;
  border-radius:5px;
  background: #f8f4e5;
  outline: none;
  padding: 5px 10px;
  font-family:"Nunito-Italic";
  color: ${colors.primary.base};
  
  
  :focus{
    border: 1px solid ${colors.primary.base};
    background: #f5f5f5;
  }
    @media(max-width:768px){
   font-size:${fontSizes.mobile.paragraph.small}
  }
`;
export const StyledButton = styled.input`

  color: ${colors.primary.base};
  height: 40px;
  display: block;
  margin: 0 auto;
  line-height: 24px * 2;
  padding: 0 50px;
  background:${colors.secondary.lighter};
  
  letter-spacing: 2px;
  transition: 0.2s all ease-in-out;
  outline: none;
  border: 1px solid ${colors.secondary.base};
   font-size: ${fontSizes.desktop.paragraph.base};
   font-weight: 600;
   letter-spacing: 1px;
  
  border-radius:8px;
  :hover {
    background: white;
    -webkit-box-shadow: 4px 1px 15px -1px rgba(0, 0, 0, 0.4);
    box-shadow: 4px 1px 15px -1px rgba(0, 0, 0, 0.4);
  }
  
  :disabled{
  pointer-events:none;
  color:grey;
  }
  
    @media(max-width:768px){
   font-size:${fontSizes.mobile.paragraph.small}
  }
`;
export const StyledContainer = styled.div`
  margin: 35px 0;
`;
export const StyledTextArea = styled.textarea`
    display: block;
  width: calc(100% - 22px);
  max-width: calc(100% - 22px);
  font-size: ${fontSizes.desktop.paragraph.base};
  font-family:"Nunito-Italic";
  border: 1px solid grey;
  border-radius:5px;
  background: #f8f4e5;
  padding: 5px 10px;
  outline: none;
  color: ${colors.primary.base};
  
   :focus{
    border: 1px solid ${colors.primary.base};
    background: #f5f5f5;
  }
    @media(max-width:768px){
   font-size:${fontSizes.mobile.paragraph.small}
  }
  
`;
export const StyledSelect = styled.select`
  display: block;
  width: 50%;
  font-size: ${fontSizes.desktop.paragraph.base};
  font-family:"Nunito-Italic";
  margin-bottom: 24px;
  border: 1px solid grey;
  border-radius:5px;
  background: #f8f4e5;
  padding: 5px 10px;
  outline: none;
  color: ${colors.primary.base};
  
  :focus{
    border: 1px solid ${colors.primary.base};
    background: #f5f5f5;
  }
  
  @media(max-width:768px){
   font-size:${fontSizes.mobile.paragraph.small}
  }
 

`;

export const StyledLabel=styled.label`
  font-size: ${fontSizes.desktop.paragraph.base};
  font-family:"Nunito-Italic";
   color: ${colors.primary.base};
   font-weight:600;
   
     @media(max-width:768px){
   font-size:${fontSizes.mobile.paragraph.small}
  }
`
export const StyledError=styled.p`
color:red;
background: #ffcccc;
margin:0;
padding:3px 10px;
font-weight: 300;
position:absolute;
font-size:${fontSizes.desktop.paragraph.small}
`