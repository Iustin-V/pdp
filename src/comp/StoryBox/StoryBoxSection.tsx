import React, { useEffect } from "react";

import { StoryBoxFromTranslates } from "../../Translates/Translates";
import {
  emailValidation,
  messageValidation,
  nameValidation,
} from "../../inputsValidations";
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
import { ParagraphItalicStyled } from "../Styles";
import airplane from "../images/airplane.webp";
import ball from "../images/ball.webp";
import bee from "../images/bee.webp";
import openBox from "../images/box-open.webp";
import closedBox from "../images/closedBox.webp";
import heart from "../images/heart.webp";
import star from "../images/star.webp";
import {
  DoubleContainer,
  FormContainer,
  SectionContainerStoryBox,
  StoryDescription,
  StyledAirplane,
  StyledBall,
  StyledBee,
  StyledBoxOpened,
  StyledHeart,
  StyledStar,
} from "./StoryBoxStyle";

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

interface BoxSection {
  boxSection: string;
}

export const StoryBoxSection = (props: BoxSection) => {
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
      emailError === "" && ((formatValue && formatValue === StoryBoxFromTranslates["ro"][10]) || addressError === "")
    ) {
      if (
        formFields.name !== "" &&
        formFields.storyFramework !== "" &&
        formFields.relation !== "" &&
        formFields.event !== "" &&
        formFields.description !== "" &&
        formFields.details !== "" &&
        formFields.format !== "" &&
        formFields.email !== "" && ((formatValue && formatValue === StoryBoxFromTranslates["ro"][10]) || formFields.address !== "" ) &&
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
      formFields,
      formatValue
  ]);

  const currentData = getCurrentDate("-");
  return (
    <SectionContainerStoryBox>
      <DoubleContainer>
        <FormContainer>
          <StyledForm
            action="https://public.herotofu.com/v1/efe00dc0-7fc0-11ed-b38f-a1ed22f366b1"
            method="post"
          >
            <StyledContainer>
              <StyledLabel>
                {
                  //@ts-ignore
                  StoryBoxFromTranslates[localStorage.locale || "ro"][0]
                }
                <StyledInput
                  placeholder=""
                  name={StoryBoxFromTranslates["ro"][0]}
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
                {
                  //@ts-ignore
                  StoryBoxFromTranslates[localStorage.locale || "ro"][1]
                }
                <StyledInput
                  placeholder=""
                  name={StoryBoxFromTranslates["ro"][1]}
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
                {
                  //@ts-ignore
                  StoryBoxFromTranslates[localStorage.locale || "ro"][2]
                }
                <StyledInput
                  placeholder=""
                  name={StoryBoxFromTranslates["ro"][2]}
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
                {
                  //@ts-ignore
                  StoryBoxFromTranslates[localStorage.locale || "ro"][3]
                }
                <StyledInput
                  placeholder=""
                  name={StoryBoxFromTranslates["ro"][3]}
                  id="specialSituation"
                  type="text"
                  onChange={onChangeHandle}
                />
              </StyledLabel>
            </StyledContainer>
            <StyledContainer>
              <StyledLabel>
                {
                  //@ts-ignore
                  StoryBoxFromTranslates[localStorage.locale || "ro"][4]
                }
                <StyledInput
                  placeholder=""
                  name={StoryBoxFromTranslates["ro"][4]}
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
                {
                  //@ts-ignore
                  StoryBoxFromTranslates[localStorage.locale || "ro"][5]
                }
                <StyledInput
                  placeholder=""
                  name={StoryBoxFromTranslates["ro"][5]}
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
                {
                  //@ts-ignore
                  StoryBoxFromTranslates[localStorage.locale || "ro"][6]
                }
                <StyledTextArea
                  placeholder=""
                  name={StoryBoxFromTranslates["ro"][6]}
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
                {
                  //@ts-ignore
                  StoryBoxFromTranslates[localStorage.locale || "ro"][7]
                }
                <StyledTextArea
                  placeholder=""
                  name={StoryBoxFromTranslates["ro"][7]}
                  id="details"
                  required
                  onChange={onChangeHandle}
                />
                {detailsError && <StyledError>{detailsError}</StyledError>}
              </StyledLabel>
            </StyledContainer>
            <StyledContainer>
              <StyledLabel>
                {
                  //@ts-ignore
                  StoryBoxFromTranslates[localStorage.locale || "ro"][8]
                }
                <StyledSelect
                  id="format"
                  name={StoryBoxFromTranslates["ro"][8]}
                  onChange={(e) => {
                    formFields.format = e.target.value;
                    setFormatValue(e.target.value);
                  }}
                  required
                >
                  <option value="">
                    {" "}
                    {
                      //@ts-ignore
                      StoryBoxFromTranslates[localStorage.locale || "ro"][9]
                    }
                  </option>
                  <option value={StoryBoxFromTranslates["ro"][10]}>
                    {
                      //@ts-ignore
                      StoryBoxFromTranslates[localStorage.locale || "ro"][10]
                    }
                  </option>
                  <option value={StoryBoxFromTranslates["ro"][11]}>
                    {
                      //@ts-ignore
                      StoryBoxFromTranslates[localStorage.locale || "ro"][11]
                    }
                  </option>
                  <option value={StoryBoxFromTranslates["ro"][12]}>
                    {
                      //@ts-ignore
                      StoryBoxFromTranslates[localStorage.locale || "ro"][12]
                    }
                  </option>
                </StyledSelect>
              </StyledLabel>
            </StyledContainer>
            <StyledContainer>
              <StyledLabel>
                Email de contact*
                <StyledInput
                  placeholder=""
                  name="Email"
                  id="email"
                  type="email"
                  required
                  onChange={onChangeHandle}
                />
                {emailError && <StyledError>{emailError}</StyledError>}
              </StyledLabel>
            </StyledContainer>
            {(formatValue && formatValue === StoryBoxFromTranslates["ro"][10]) || formatValue === "" ? null : (
              <StyledContainer>
                <StyledLabel>
                  {
                    //@ts-ignore
                    StoryBoxFromTranslates[localStorage.locale || "ro"][13]
                  }
                  <StyledInput
                    placeholder=""
                    name={StoryBoxFromTranslates["ro"][13]}
                    id="address"
                    type="text"
                    required
                    onChange={onChangeHandle}
                  />
                  {addressError && <StyledError>{addressError}</StyledError>}
                </StyledLabel>
              </StyledContainer>
            )}
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
              <StyledBall src={ball} alt={"Ball"} />
              <StyledStar src={star} alt={"Star"} />
              <StyledHeart src={heart} alt={"Heart"} />
              <StyledBee src={bee} alt={"Bee"} />
              <StyledAirplane src={airplane} alt={"Airplane"} />
              <StyledBoxOpened open={true} src={openBox} alt={"openBox"} />
            </>
          ) : (
            <StyledBoxOpened open={false} src={closedBox} alt={"closedBox"} />
          )}
          <ParagraphItalicStyled>{props.boxSection}</ParagraphItalicStyled>
        </StoryDescription>
      </DoubleContainer>
    </SectionContainerStoryBox>
  );
};
