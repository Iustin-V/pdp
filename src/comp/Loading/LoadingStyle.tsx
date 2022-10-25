import styled from "styled-components";
import ThreeDots from "../../utils/loader";
import LogoImage from "../images/logo.webp";
import TeacherIcon from "../images/teacher-icon.webp";

export const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b4a087;
`;

export const LogoImageContainer = styled(ThreeDots)`
  position: relative;
  left: -120px;
  top: 52px;

  @media (max-width: 840px) {
    left: -65px;
    width: 200px;
    top: 68px;
  }

  @media (max-width: 425px) {
    width: 150px;
    top: 70px;
    left: -50px;
  }
  @media (max-width: 324px) {
    width: 150px;
    top: -91px;
    left: 125px;
  }
  @media (max-width: 320px) {
    width: 150px;
    top: -92px;
    left: 150px;
  }
`;

export const ImageStyled = styled.img.attrs({
    src: `${LogoImage}`,
})`
  @media (max-width: 840px) {
    width: 200px;
  }
  @media (max-width: 768px) {
    width: 300px;
  }
  @media (max-width: 425px) {
    width: 225px;
    margin-left: 50px;
  }
  @media (max-width: 400px) {
    width: 170px;
    margin-left: 50px;
  }
  @media (max-width: 320px) {
    width: 150px;
    margin-left: 50px;
  }
`;

export const TeacherIconStyled = styled.img.attrs({
    src: `${TeacherIcon}`,
})`
  position: absolute;
  bottom: 0;
  right: 0;
  @media (max-width: 840px) {
    width: 200px;
  }
  @media (max-width: 768px) {
    width: 175px;
  }
  @media (max-width: 425px) {
    width: 150px;
    margin-left: 50px;
  }
  @media (max-width: 400px) {
    width: 125px;
    margin-left: 50px;
  }
 
`;

export const CloudStyled = styled.div`
  margin-top: 70px;
  width: 250px;
  height: 100px;
  background: #ECEFF1;
  box-shadow: 10px 10px rgba(0, 0, 0, 0.2);
  border-radius: 100px;
  position: absolute;
  bottom: 150px;
  right: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 425px) {
    width: 200px;
    height: 70px;
    right: 120px;
    
    span{
    font-size: 20px !important;
    }
  }

  @media (max-width: 375px) {
    width: 150px;
    height: 50px;
    right: 100px;
    span{
      font-size: 20px !important;
    }
  }
`
