import {CloudStyled, ImageStyled, LoadingContainer, LogoImageContainer, TeacherIconStyled} from "./LoadingStyle";
import Typewriter from 'typewriter-effect';
import {loadingTranslates} from "../../Translates/Translates";

const Loading = () => {
    // @ts-ignore
    return (
        <>
            <LoadingContainer>
                <div>
                    <ImageStyled/>
                    <LogoImageContainer/>
                </div>
                <TeacherIconStyled/>
                <CloudStyled>
                    <Typewriter
                        class="typewriter"
                        onInit={(typewriter) => {
                            typewriter.pauseFor(500)
                        }}
                        options={{
                            strings: [`<span style="font-size: 30px">${loadingTranslates[localStorage?.locale || "ro"]}</span>`],
                            autoStart: true,
                            loop: true,
                        }}/>
                </CloudStyled>
            </LoadingContainer>
        </>
    );
};

export default Loading;
