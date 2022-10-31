import { loadingTranslates } from "../../Translates/Translates";
import EnLogoImage from "../images/en-logoo.webp";
import LogoImage from "../images/logo.webp";
import {
  CloudStyled,
  ImageStyled,
  LoadingContainer,
  LogoImageContainer,
  TeacherIconStyled,
} from "./LoadingStyle";

const Loading = () => {
  return (
    <>
      <LoadingContainer>
        <div>
          <ImageStyled
            src={localStorage?.locale === "en" ? EnLogoImage : LogoImage}
          />
          <LogoImageContainer />
        </div>
        <TeacherIconStyled />
        <CloudStyled>
          {loadingTranslates[localStorage?.locale || "ro"]}
        </CloudStyled>
      </LoadingContainer>
    </>
  );
};

export default Loading;
