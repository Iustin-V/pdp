import {CloudStyled, ImageStyled, LoadingContainer, LogoImageContainer, TeacherIconStyled} from "./LoadingStyle";
import Typewriter from 'typewriter-effect';

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
                            strings: [`<span style="font-size: 30px">Bine ai venit!</span>`],
                            autoStart: true,
                            loop: true,
                        }}/>
                </CloudStyled>
            </LoadingContainer>
        </>
    );
};

export default Loading;
