import {ParagraphItalicStyled, TitleSection} from "../Styles";
import {
  StyledForm,
  StyledContainer,
  StyledInput,
  StyledSelect,
  StyledButton,
  StyledTextArea,
    StyledContactForm,
  StyledLabel
} from "./Contact-Style";
import {colors} from "../../generalStyle";
import React from "react";

const paragraphText="Vrei să trimiți un mesaj Profei de povești? Completează formularul următor și voi răspunde cât ai clipi!";

export const Contact = () => {
  return (
    <StyledContactForm>
      <TitleSection color={colors.primary.base}>
        Vorbeste cu profa de povești
      </TitleSection>
      <ParagraphItalicStyled>{paragraphText}</ParagraphItalicStyled>
      <StyledForm
        action="https://public.herotofu.com/v1/62aea5a0-34f8-11ed-9de0-b73c4b901972"
        method="post"
      >
        <StyledContainer>
          <StyledLabel>Nume*
            <StyledInput
                placeholder="Name"
                name="Name"
                id="name"
                type="text"
                required
            />
          </StyledLabel>
        </StyledContainer>
        <StyledContainer>
          <StyledLabel>
            Email*
          <StyledInput
            placeholder="Email"
            name="Email"
            id="email"
            type="email"
            required
          />
          </StyledLabel>
        </StyledContainer>
        <StyledContainer>
         <StyledLabel>Telefon*
           <StyledInput
               placeholder="Phone"
               name="Phone"
               id="phone"
               type="text"
               required
           />
         </StyledLabel>
        </StyledContainer>
        <StyledContainer>
        <StyledLabel>
          Curs*
          <StyledSelect
            id="course"
            name="Course"
            placeholder="Selecteaza cursul dorit"
          >
            <option value="course1">Curs dezvoltare personala</option>
            <option value="course2">Curs dezvoltare psihica</option>
            <option value="course3">Curs 3</option>
          </StyledSelect>
        </StyledLabel>
        </StyledContainer>
        <StyledContainer>
        <StyledLabel>
          Mesaj*
          <StyledTextArea
            placeholder="Message"
            name="Message"
            id="nessage"
            required
          />
      </StyledLabel>
        </StyledContainer>
        <StyledContainer>
          <StyledButton type="submit" value="Vorbeste cu profa" />
        </StyledContainer>
      </StyledForm>
    </StyledContactForm>
  );
};
