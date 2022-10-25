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
  top: 45px;

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
`;

export const ImageStyled = styled.img.attrs({
  src: `${LogoImage}`,
})`
  @media (max-width: 840px) {
    width: 200px;
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

export const TeacherIconStyled = styled.img.attrs({
  src: `${TeacherIcon}`,
})`
  position: absolute;
  bottom: 0;
  right: 0;
  @media (max-width: 840px) {
    width: 200px;
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
