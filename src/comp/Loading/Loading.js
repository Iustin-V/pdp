import {CloudStyled, ImageStyled, LoadingContainer, LogoImageContainer, TeacherIconStyled} from "./LoadingStyle";
import {loadingTranslates} from "../../Translates/Translates";

const Loading = () => {
    return (
        <>
            <LoadingContainer>
                <div>
                    <ImageStyled/>
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
