import {StyledPageWrapper, TitleSection} from "../Styles";
import {
  StyledForm,
  StyledContainer,
  StyledInput,
  StyledSelect,
  StyledButton,
  StyledTextArea,
    StyledContactForm
} from "./Contact-Style";
import {colors} from "../../generalStyle";
import React from "react";

export const Contact = () => {
  return (
    <StyledContactForm>
      <TitleSection color={colors.primary.base}>
        Vorbeste cu profa de povești
      </TitleSection>
      <StyledForm
        action="https://public.herotofu.com/v1/62aea5a0-34f8-11ed-9de0-b73c4b901972"
        method="post"
      >
        <StyledContainer>
          {/*<label htmlFor="name">Nume</label>*/}
          <StyledInput
            placeholder="Name"
            name="Name"
            id="name"
            type="text"
            required
          />
        </StyledContainer>
        <StyledContainer>
          {/*<label htmlFor="email">Email</label>*/}
          <StyledInput
            placeholder="Email"
            name="Email"
            id="email"
            type="email"
            required
          />
        </StyledContainer>
        <StyledContainer>
          {/*<label htmlFor="">Telefon</label>*/}
          <StyledInput
            placeholder="Phone"
            name="Phone"
            id="phone"
            type="text"
            required
          />
        </StyledContainer>
        <StyledContainer>
          <StyledSelect
            id="course"
            name="Course"
            placeholder="Selecteaza cursul dorit"
          >
            <div >Curs dezvoltare personala</div>
            <option value="course2">Curs 2</option>
            <option value="course3">Curs 3</option>
          </StyledSelect>
        </StyledContainer>
        <StyledContainer>
          <StyledTextArea
            placeholder="Message"
            name="Message"
            id="nessage"
            required
          />
        </StyledContainer>
        <StyledContainer>
          <StyledButton type="submit" value="Vorbeste cu profa" />
        </StyledContainer>
      </StyledForm>
    </StyledContactForm>
  );
};
