import {ParagraphItalicStyled, SectionContainer} from "../Styles";
import {DoubleContainer, FormContainer, StoryDescription} from "./StoryBoxStyle";

export const StoryBoxSection =()=> {
    return(
        <SectionContainer>
            <DoubleContainer>
                <FormContainer>Contact FORM</FormContainer>
                <StoryDescription>
                    <ParagraphItalicStyled>
                        Alege să dăruiești o poveste! Trimite Profei de povești numele persoanei care primește cadoul, elemente dragi sau semnificative pentru aceasta, poate o situație la care dorești să te referi. Completează formularul și vei primi povestea cadou. Alege să primești varianta electronică sau cadoul tipărit/ înregistrat prin curier.
                    </ParagraphItalicStyled>
                    </StoryDescription>
            </DoubleContainer>
        </SectionContainer>
    )

}