import {CloudStyled, ImageStyled, LoadingContainer, LogoImageContainer, TeacherIconStyled} from "./LoadingStyle";
import {loadingTranslates} from "../../Translates/Translates";
import LogoImage from "../images/logo.webp";
import EnLogoImage from "../images/en-logoo.webp";

const Loading = () => {
    return (
        <>
            <LoadingContainer>
                <div>
                    <ImageStyled src={localStorage?.locale==='en' ? EnLogoImage : LogoImage }/>
                    <LogoImageContainer/>
                </div>
                <TeacherIconStyled/>
                <CloudStyled>
                    {loadingTranslates[localStorage?.locale || "ro"]}
                </CloudStyled>
            </LoadingContainer>
        </>
    );
};

export default Loading;
