import { ParagraphItalicStyled, TitleSection } from "../Styles";
import background from "../images/contact-background-overlay.jpg";

import {
  ContactFormBackground,
  StyledButton,
  StyledContactForm,
  StyledContainer,
  StyledError,
  StyledForm,
  StyledImageTeacher,
  StyledInput,
  StyledLabel,
  StyledSelect,
  StyledTextArea,
  TextsSection,
} from "./Contact-Style";
import { colors } from "../../generalStyle";
import React, { useEffect, useState } from "react";
import {
  emailValidation,
  messageValidation,
  nameValidation,
  phoneValidation,
} from "../../inputsValidations";
import teacherIcon from "../images/teacher-icon.png";
import { PDPContext } from "../../App";
import { getData } from "../../utils/getData";

export interface formFields {
  name: string;
  email: string;
  phoneNumber: string;
  course: string;
  message: string;
}

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
  const [allLinkCourses, setLinkCourses] = useState([{ title: "" }]);
  const [valueText, setValueText] = useState({
    name: "",
    email: "",
    telefon: "",
    curs: "",
    mesaj: "",
    sendButton: "",
  });
  const [textSection, setTextSection] = useState({ subTitle: [], title: "" });
  const dataSection = {
    ro: {
      name: "Nume",
      email: "Email",
      telefon: "Telefon",
      curs: "Curs",
      mesaj: "Mesaj",
      sendButton: "Vorbește cu profa",
    },
    en: {
      name: "Name",
      email: "Email",
      telefon: "Phone",
      curs: "Course",
      mesaj: "Message",
      sendButton: "Talk to the teacher",
    },
    fr: {
      name: "Nom",
      email: "Email",
      telefon: "Téléphone",
      curs: "Cours",
      mesaj: "Message",
      sendButton: "Parlez au professeur",
    },
  };

  const contextLocal: {
    editFunction: (data: any) => boolean;
    allCategories: any[];
  } = React.useContext(PDPContext);

  React.useEffect(() => {
    const allData = getData(
      contextLocal?.allCategories,
      "CourseChildParents"
    ).content.concat(
      getData(contextLocal?.allCategories, "CourseTeacher").content
    );

    setLinkCourses(allData);
    setTextSection(getData(contextLocal?.allCategories, "ContactSection"));

    switch (localStorage.locale) {
      case "ro":
        setValueText(dataSection.ro);
        break;
      case "en":
        setValueText(dataSection.en);
        break;
      case "fr":
        setValueText(dataSection.fr);
        break;
    }
  }, []);
  const optionCourses = allLinkCourses?.map((course, key) => {
    return (
      <option
        key={key}
        value={course.title}
        selected={course.title === localStorage.course}
      >
        {course.title}
      </option>
    );
  });

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
  return (
    <ContactFormBackground backgroundImage={background}>
      <StyledContactForm>
        <TextsSection>
          <StyledImageTeacher
            src={teacherIcon}
            alt="teacherIcon"
          ></StyledImageTeacher>
          <TitleSection color={colors.primary.base}>
            {textSection.title}
          </TitleSection>
          <ParagraphItalicStyled>
            {textSection.subTitle[0]}
          </ParagraphItalicStyled>
        </TextsSection>
        <StyledForm
          action="https://public.herotofu.com/v1/62aea5a0-34f8-11ed-9de0-b73c4b901972"
          method="post"
        >
          <StyledContainer>
            <StyledLabel>
              {valueText.name}*
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
              {valueText.email}*
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
              {valueText.telefon}*
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
              {valueText.curs}*
              <StyledSelect
                id="course"
                name="Course"
                placeholder="Selecteaza cursul dorit"
                onChange={(e) => {
                  formFields.course = e.target.value;
                }}
              >
                {optionCourses}
              </StyledSelect>
            </StyledLabel>
          </StyledContainer>
          <StyledContainer>
            <StyledLabel>
              {valueText.mesaj}*
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
              value={valueText.sendButton}
              disabled={disabledSubmitButton}
            />
          </StyledContainer>
        </StyledForm>
      </StyledContactForm>
    </ContactFormBackground>
  );
};
