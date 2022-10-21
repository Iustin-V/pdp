import { ParagraphItalicStyled, SectionContainer } from "../Styles";
import {
  DoubleContainer,
  FormContainer,
  StoryDescription,
  SectionContainerStoryBox,
  StyledBoxOpened,
  StyledBall,
  StyledStar,
  StyledAirplane,
  StyledHeart,
  StyledBee,
} from "./StoryBoxStyle";
import {
  StyledButton,
  StyledContainer,
  StyledError,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSelect,
  StyledTextArea,
} from "../Contact/Contact-Style";
import React, { useEffect } from "react";
import {
  emailValidation,
  messageValidation,
  nameValidation,
} from "../../inputsValidations";
import openBox from "../images/transparent-box-black-open-bure.png";
import ball from "../images/ball.png";
import heart from "../images/heart.png";
import star from "../images/star.png";
import bee from "../images/bee.png";
import airplane from "../images/airplane.png";
import closedBox from "../images/closedBox.png";

export interface storyBoxFields {
  name: string;
  storyFramework: string;
  relation: string;
  specialSituation: string;
  event: string;
  description: string;
  details: string;
  format: string;
  email: string;
  address: string;
  date: string;
}

let formFields: storyBoxFields = {
  name: "",
  storyFramework: "",
  relation: "",
  specialSituation: "",
  event: "",
  description: "",
  details: "",
  format: "",
  email: "",
  address: "",
  date: "",
};
export function getCurrentDate(separator: string) {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date < 10 ? `0${date}` : `${date}`}`;
}

export const StoryBoxSection = () => {
  const [nameError, setNameError] = React.useState("");
  const [storyFrameworkError, setStoryFrameworkError] = React.useState("");
  const [relationError, setRelationError] = React.useState("");
  const [eventError, setEventError] = React.useState("");
  const [descriptionError, setDescriptionError] = React.useState("");
  const [detailsError, setDetailsError] = React.useState("");
  const [formatValue, setFormatValue] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [addressError, setAddressError] = React.useState("");
  const [disabledSubmitButton, setDisabledSubmitButton] = React.useState(true);

  const onChangeHandle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.id === "name") {
      setNameError(nameValidation(e.target.value));
      formFields.name = e.target.value;
    }
    if (e.target.id === "storyFramework") {
      setStoryFrameworkError(messageValidation(e.target.value));
      formFields.storyFramework = e.target.value;
    }
    if (e.target.id === "relation") {
      setRelationError(messageValidation(e.target.value));
      formFields.relation = e.target.value;
    }
    if (e.target.id === "specialSituation") {
      formFields.specialSituation = e.target.value;
    }
    if (e.target.id === "event") {
      setEventError(messageValidation(e.target.value));
      formFields.event = e.target.value;
    }
    if (e.target.id === "description") {
      setDescriptionError(messageValidation(e.target.value));
      formFields.description = e.target.value;
    }
    if (e.target.id === "details") {
      setDetailsError(messageValidation(e.target.value));
      formFields.details = e.target.value;
    }
    if (e.target.id === "email") {
      setEmailError(emailValidation(e.target.value));
      formFields.email = e.target.value;
    }
    if (e.target.id === "address") {
      setAddressError(messageValidation(e.target.value));
      formFields.address = e.target.value;
    }
    if (e.target.id === "date") {
      formFields.date = e.target.value;
    }
  };

  useEffect(() => {
    if (
      nameError === "" &&
      storyFrameworkError === "" &&
      relationError === "" &&
      eventError === "" &&
      descriptionError === "" &&
      detailsError === "" &&
      (emailError === "" || addressError === "")
    ) {
      if (
        formFields.name !== "" &&
        formFields.storyFramework !== "" &&
        formFields.relation !== "" &&
        formFields.event !== "" &&
        formFields.description !== "" &&
        formFields.details !== "" &&
        formFields.format !== "" &&
        (formFields.email !== "" || formFields.address !== "") &&
        formFields.date !== ""
      ) {
        setDisabledSubmitButton(false);
      } else {
        setDisabledSubmitButton(true);
      }
    } else {
      setDisabledSubmitButton(true);
    }
  }, [
    nameError,
    storyFrameworkError,
    relationError,
    eventError,
    descriptionError,
    detailsError,
    emailError,
    addressError,
  ]);
  console.log(formFields);

  const currentData = getCurrentDate("-");
  return (
    <SectionContainerStoryBox>
      <DoubleContainer>
        <FormContainer>
          <StyledForm
            action="https://public.herotofu.com/v1/62aea5a0-34f8-11ed-9de0-b73c4b901972"
            method="post"
          >
            <StyledContainer>
              <StyledLabel>
                Prenumele persoanei care primește cadoul*
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
                Cu ce personaje / elemente din natură dorești să fie povestea?*
                <StyledInput
                  placeholder=""
                  name="storyFramework"
                  id="storyFramework"
                  type="text"
                  required
                  onChange={onChangeHandle}
                />
                {storyFrameworkError && (
                  <StyledError>{storyFrameworkError}</StyledError>
                )}
              </StyledLabel>
            </StyledContainer>
            <StyledContainer>
              <StyledLabel>
                Care este relația dintre tine și persoana pentru care vrei să
                faci povestea?*
                <StyledInput
                  placeholder=""
                  name="relation"
                  id="relation"
                  type="text"
                  required
                  onChange={onChangeHandle}
                />
                {relationError && <StyledError>{relationError}</StyledError>}
              </StyledLabel>
            </StyledContainer>
            <StyledContainer>
              <StyledLabel>
                Exista vreo situație specială la care vrei să faci referire în
                poveste? (optional)
                <StyledInput
                  placeholder=""
                  name="specialSituation"
                  id="specialSituation"
                  type="text"
                  onChange={onChangeHandle}
                />
              </StyledLabel>
            </StyledContainer>
            <StyledContainer>
              <StyledLabel>
                Evenimentul pentru care dorești să faci cadoul:*
                <StyledInput
                  placeholder=""
                  name="event"
                  id="event"
                  type="text"
                  required
                  onChange={onChangeHandle}
                />
                {eventError && <StyledError>{eventError}</StyledError>}
              </StyledLabel>
            </StyledContainer>
            <StyledContainer>
              <StyledLabel>
                Data la care dorești să primești cadoul:*
                <StyledInput
                  placeholder=""
                  name="date"
                  id="date"
                  type="date"
                  min={currentData}
                  max="2030-12-31"
                  required
                  onChange={onChangeHandle}
                />
              </StyledLabel>
            </StyledContainer>
            <StyledContainer>
              <StyledLabel>
                Descrie în 2-3 fraze, contextul / situația reala dintre voi.*
                <StyledTextArea
                  placeholder=""
                  name="description"
                  id="description"
                  required
                  onChange={onChangeHandle}
                />
                {descriptionError && (
                  <StyledError>{descriptionError}</StyledError>
                )}
              </StyledLabel>
            </StyledContainer>
            <StyledContainer>
              <StyledLabel>
                Alte detalii: (prenumele celui care Dăruiește povestea, mesajul
                pe care vrei sa-l transmiți)*
                <StyledTextArea
                  placeholder=""
                  name="details"
                  id="details"
                  required
                  onChange={onChangeHandle}
                />
                {detailsError && <StyledError>{detailsError}</StyledError>}
              </StyledLabel>
            </StyledContainer>
            <StyledContainer>
              <StyledLabel>
                Doresc povestea în format:*
                <StyledSelect
                  id="format"
                  name="format"
                  onChange={(e) => {
                    formFields.format = e.target.value;
                    setFormatValue(e.target.value);
                  }}
                  required
                >
                  <option value="">Selecteaza un format</option>
                  <option value="audioFormat">
                    Audio pe canalul de Youtube "Profa de Povesti"
                  </option>
                  <option value="dvdFormat">
                    Inregistrata pe suport audio DVD
                  </option>
                  <option value="printedFormat">Tiparita</option>
                </StyledSelect>
              </StyledLabel>
            </StyledContainer>
            {formatValue && formatValue === "audioFormat" ? (
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
            ) : formatValue !== "" ? (
              <StyledContainer>
                <StyledLabel>
                  Adresa de livrare*
                  <StyledInput
                    placeholder="Address"
                    name="address"
                    id="address"
                    type="text"
                    required
                    onChange={onChangeHandle}
                  />
                  {addressError && <StyledError>{addressError}</StyledError>}
                </StyledLabel>
              </StyledContainer>
            ) : null}
            <StyledContainer>
              <StyledButton
                type="submit"
                value="Trimite"
                disabled={disabledSubmitButton}
              />
            </StyledContainer>
          </StyledForm>
        </FormContainer>
        <StoryDescription>
          {disabledSubmitButton ? (
            <>
              <StyledBall src={ball} />
              <StyledStar src={star} />
              <StyledHeart src={heart} />
              <StyledBee src={bee} />
              <StyledAirplane src={airplane} />
              <StyledBoxOpened src={openBox} />
            </>
          ) : (
            <StyledBoxOpened src={closedBox} />
          )}
          <ParagraphItalicStyled>
            Alege să dăruiești o poveste! Trimite Profei de povești numele
            persoanei care primește cadoul, elemente dragi sau semnificative
            pentru aceasta, poate o situație la care dorești să te referi.
            Completează formularul și vei primi povestea cadou. Alege să
            primești varianta electronică sau cadoul tipărit/ înregistrat prin
            curier.
          </ParagraphItalicStyled>
        </StoryDescription>
      </DoubleContainer>
    </SectionContainerStoryBox>
  );
};
