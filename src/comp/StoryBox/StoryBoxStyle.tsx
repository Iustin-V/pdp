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
justify-content:space-between;


@media (max-width:1200px){
flex-direction:column;

}
`

export const StoryDescription=styled.div`
width:calc(100% - 582px) ;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
position:relative;
margin:0 80px;


@media (max-width:1200px){
width:100%;

}
`

export const FormContainer=styled.div`
width:800px;
> form > div > label {
font-size:${fontSizes.desktop.paragraph.small}
}

> form {
width:auto;
}


@media (max-width:1200px){
width:100%;

}


`

export const SectionContainerStoryBox=styled.div`
 width: calc(100% - 80px);
  max-width: 1400px;
  padding: 40px;
  margin: 0 auto;
  position: relative;
`


export const StyledBoxOpened=styled.img`
height:400px;

`
export const StyledBall=styled.img`
height:30px;
position:absolute;
 transform: translateY(-60px);
 left:10px;
  top:240px;
animation:
    x 2s linear infinite alternate,
    y 2s infinite cubic-bezier(0,500,1,500);
    
@keyframes x {
   to {
     left:250px;
   }
}
@keyframes y {
   to {
     top:239.5px;
   }
}

`

export const StyledStar=styled.img`
  position:absolute;
 left:50%;
  top:40%;
  transform:translateY(-50%);
 animation:
    x1 3s linear infinite alternate,
    y1 3s infinite cubic-bezier(0.2,667,0.8,400) alternate;
    
    

@keyframes x1 { to {left:calc(100% - 30px)}}
@keyframes y1 {to {top:39.9%}}
`
export const StyledAirplane=styled.img`
position:absolute;
 z-index:20;
 height:30px;
  left:160px;
  top: 240px;
  animation: x 2s linear infinite alternate,
    z 7s infinite ,
    y 7s infinite cubic-bezier(0,900,1,350);
  
  
  @keyframes z {
   to {
     transform:rotate(360deg);
   }
}
  
@keyframes x {
   to {
     left:250px;
   }
}
@keyframes y {
   to {
     top:239.5px;
   }
}
`

export const StyledHeart=styled.img`
position:absolute;
 z-index:3;
 top:25%;
 transform:rotate(50deg);
`

export const StyledBee=styled.img`
position:absolute;
 z-index:20;
 top:35%;
 left:60%;
 height:60px;
`
