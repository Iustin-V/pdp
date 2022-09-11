import styled from "styled-components";
import {colors,fontSizes} from "../generalStyle";
import {Link} from "react-router-dom";

export const StyledFooter = styled.div`
  bottom: 0;
  border-top: 2px solid ${colors.primary.lighter};
  background-color: ${colors.secondary.base};
`;
export const StyledFirstRow=styled.div`
  padding: 40px 40px;
  width:calc(100% - 80px);
  max-width: 1440px;
  margin: 0 auto;
  display:flex;
  flex-direction:row;
  
  @media(max-width:1200px){
  flex-direction:column;
  row-gap:56px;
  }
`



export const StyledFooterLink=styled(Link)`
padding: 10px 15px;
color:${colors.primary.base};
text-decoration: none;
font-size:${fontSizes.paragraph.base};
width:fit-content;

:hover{
    color:white;
}

`



export const StyledFooterSocialMedia=styled(Link)`
padding: 10px;
background-color:${colors.primary.base};
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;

 :hover{
 background:${colors.primary.lighter};
 }

`
export const StyledSMImage=styled.img`
height:40px;
width:40px;
`



export const StyledFooterLinksColumn=styled.div`
display:flex;
flex-direction:column;
margin-right: 100px;
width:50%;
    border-top: 2px solid ${colors.primary.lighter};

    @media(max-width:1200px){
    width:100%;
    margin:0;
    }
        

`
export const StyledFooterSocialMediaColumn=styled.div`
    height: fit-content;
    display:flex;
    flex-direction:row;
    column-gap:20px;
    row-gap:20px;
    width:50%;
    flex-wrap:wrap;
    padding:0px 15px;
    border-top: 2px solid ${colors.primary.lighter};
    
    
    @media(max-width:1200px){
    width:auto;
    }
        

    h2{
    padding:15px 0px;
    }

`
export const StyledHeaderText= styled.h2`
color:${colors.primary.darker};
font-size:${fontSizes.paragraph.large};
margin:0;
width:100%;
padding:15px 15px;
`





export const StyledSecondRow =styled.div`
width:calc(100% - 110px);
  max-width: 1440px;
display:flex;
margin:0 auto;
flex-direction:column;
padding:40px 55px;
border-top: 2px solid ${colors.primary.lighter};
`



export const StyledFooterText = styled.p`
  display: flex;
  justify-content: flex-start;
  font-size:${fontSizes.paragraph.small};
  color: white;
`;