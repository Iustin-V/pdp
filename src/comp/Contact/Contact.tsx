import { ParagraphItalicStyled, TitleSection } from "../Styles";
import background from "../images/contact-background-overlay.jpg";

import {
  StyledForm,
  StyledContainer,
  StyledInput,
  StyledSelect,
  StyledButton,
  StyledTextArea,
  StyledContactForm,
  StyledLabel,
  StyledError,
  ContactFormBackground,
  TextsSection,
  StyledImageTeacher,
} from "./Contact-Style";
import { colors } from "../../generalStyle";
import React, { useEffect } from "react";
import {
  emailValidation,
  messageValidation,
  nameValidation,
  phoneValidation,
} from "../../inputsValidations";
import teachericon from "../images/teacher-icon.png";

export interface formFields {
  name: string;
  email: string;
  phoneNumber: string;
  course: string;
  message: string;
}

const paragraphText =
  "Vrei să trimiți un mesaj Profei de povești? Completează formularul următor și voi răspunde cât ai clipi!";

let formFields: formFields = {
  name: "",
  email: "",
  phoneNumber: "",
  course: "",
  message: "",
};

export const Contact = () => {
  const [nameError, setNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [phoneError, setPhoneError] = React.useState("");
  const [messageError, setMessageError] = React.useState("");
  const [disabledSubmitButton, setDisabledSubmitButton] = React.useState(true);
  const onChangeHandle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.id === "name") {
      setNameError(nameValidation(e.target.value));
      formFields.name = e.target.value;
    }

    if (e.target.id === "email") {
      setEmailError(emailValidation(e.target.value));
      formFields.email = e.target.value;
    }

    if (e.target.id === "phone") {
      setPhoneError(phoneValidation(e.target.value));
      formFields.phoneNumber = e.target.value;
    }

    if (e.target.id === "message") {
      setMessageError(messageValidation(e.target.value));
      formFields.message = e.target.value;
    }
  };

  useEffect(() => {
    if (
      messageError === "" &&
      emailError === "" &&
      phoneError === "" &&
      nameError === ""
    ) {
      if (
        formFields.message !== "" &&
        formFields.email !== "" &&
        formFields.name !== "" &&
        formFields.phoneNumber !== ""
      ) {
        setDisabledSubmitButton(false);
      } else {
        setDisabledSubmitButton(true);
      }
    } else {
      setDisabledSubmitButton(true);
    }
  }, [nameError, emailError, phoneError, messageError]);
  console.log(localStorage.course);
  return (
    <ContactFormBackground backgroundImage={background}>
      <StyledContactForm>
        <TextsSection>
          <StyledImageTeacher
            src={teachericon}
            alt="teachericon"
          ></StyledImageTeacher>
          <TitleSection color={colors.primary.base}>
            Vorbeste cu profa de povești
          </TitleSection>
          <ParagraphItalicStyled>{paragraphText}</ParagraphItalicStyled>
        </TextsSection>
        <StyledForm
          action="https://public.herotofu.com/v1/62aea5a0-34f8-11ed-9de0-b73c4b901972"
          method="post"
        >
          <StyledContainer>
            <StyledLabel>
              Nume*
              <StyledInput
                placeholder="Name"
                name="Name"
                id="name"
                type="text"
                required
                onChange={onChangeHandle}
              />
              {nameError && <StyledError>{nameError}</StyledError>}
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
                onChange={onChangeHandle}
              />
              {emailError && <StyledError>{emailError}</StyledError>}
            </StyledLabel>
          </StyledContainer>
          <StyledContainer>
            <StyledLabel>
              Telefon*
              <StyledInput
                placeholder="Phone"
                name="Phone"
                id="phone"
                type="tel"
                required
                onChange={onChangeHandle}
              />
              {phoneError && <StyledError>{phoneError}</StyledError>}
            </StyledLabel>
          </StyledContainer>
          <StyledContainer>
            <StyledLabel>
              Curs*
              <StyledSelect
                id="course"
                name="Course"
                placeholder="Selecteaza cursul dorit"
                onChange={(e) => {
                  formFields.course = e.target.value;
                }}
                defaultValue={localStorage.course}
              >
                <option value="course1">Curs dezvoltare personala</option>
                <option value="course2">Curs dezvoltare psihica</option>
                <option value="course3">Curs 3</option>
                <option value="course3">
                  Cum să-mi transform visul în realitate?
                </option>
              </StyledSelect>
            </StyledLabel>
          </StyledContainer>
          <StyledContainer>
            <StyledLabel>
              Mesaj*
              <StyledTextArea
                placeholder="Message"
                name="Message"
                id="message"
                required
                onChange={onChangeHandle}
              />
              {messageError && <StyledError>{messageError}</StyledError>}
            </StyledLabel>
          </StyledContainer>
          <StyledContainer>
            <StyledButton
              type="submit"
              value="Vorbeste cu profa"
              disabled={disabledSubmitButton}
            />
          </StyledContainer>
        </StyledForm>
      </StyledContactForm>
    </ContactFormBackground>
  );
};
