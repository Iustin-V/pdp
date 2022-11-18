import { loadingTranslates } from "../../Translates/Translates";
import EnLogoImage from "../images/en-logo.webp";
import FrLogoImage from "../images/fr-logo.webp";
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
            src={
              localStorage?.locale === "en"
                ? EnLogoImage
                : localStorage?.locale === "fr"
                ? FrLogoImage
                : LogoImage
            }
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
