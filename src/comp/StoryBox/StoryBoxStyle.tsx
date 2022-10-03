import styled from "styled-components";
import {colors, fontSizes} from "../../generalStyle";

export const StoryBoxPageContainer= styled.div`
margin-top:85px;

`

export const SubtitleSection=styled.p`
color:${colors.primary.base};
font-size:${fontSizes.desktop.paragraph.large};
font-family: "Nunito-Italic";
text-align:center;
`

export const DoubleContainer=styled.div`
display:flex;
flex-directionl:row;
align-items:center;
`

export const StoryDescription=styled.div`
width:calc(50% - 40px);
`

export const FormContainer=styled.div`
width:calc(50% - 40px);
`
