import axios from "axios";
import React from "react";

import { colors } from "../../generalStyle";
import { capitalizeFirstLetter } from "../../utils/Capitalize";
import {
  ContentContainer,
  ModalCover,
  ModalWrapper,
  StyledSaveButton,
  StyledText,
  StyledTextArea,
} from "../EditModal/EditModalStyle";
import { UploadImage } from "../UploadImage/UploadImage";

interface CreateModalProps {
  data: any;
  createModalSchema: string;
  setCreateModal: React.Dispatch<
    React.SetStateAction<{ visibility: boolean; schema: string }>
  >;
}
export const CreateModal = (props: CreateModalProps) => {
  const [updateObject, setUpdateObject] = React.useState({});
  const [updateArray, setUpdateArray] = React.useState([]);
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  const [objectType, setObjectType] = React.useState({
    title: "",
    image: "",
    text: ["", "", "", ""],
    price: "",
    time: "",
  });
  if (props.data) {
    document.body.style.overflow = "hidden";
  }
  React.useEffect(() => {
    if (props.createModalSchema === "course") {
      setObjectType({
        title: "",
        image: "",
        text: ["", "", "", ""],
        price: "",
        time: "",
      });
    } else if (props.createModalSchema === "event") {
      setObjectType({
        titleSection: "",
        // @ts-ignore
        text: "",
        time: "",
        date: "",
        website: "",
        image: "",
        alt: "",
      });
    } else if (props.createModalSchema === "review") {
      setObjectType({
        avatar: "",
        name: "",
        age: "",
        // @ts-ignore
        text: "",
      });
    }
  }, [props.createModalSchema]);

  const handleCreate = () => {
    let text: undefined;
    if (updateArray.length > 0) {
      // @ts-ignore
      text = updateArray;
    } else {
      // @ts-ignore
      text = updateObject.text;
    }
    axios
      .put(`https://pdp-api.onrender.com/api/sections/${props.data?._id}`, {
        content: [
          ...props.data.content,
          {
            ...updateObject,
            text,
          },
        ],
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log("CreateError", error);
      });
    exitModal();
  };
  console.log("asdasdas", props.data);
  const handleMessageChange = (
    event: any,
    name?: any,
    index?: number,
    image?: boolean
  ) => {
    image
      ? setUpdateObject({
          ...updateObject,
          [name]: event,
        })
      : setUpdateObject({
          ...updateObject,
          [event.target.name]: event.target.value,
        });
  };
  const handleArrayMessageChange = (event: any, index?: number) => {
    // setInitialArray(props.data[event.target.name]);
    // @ts-ignore
    // la copy paste trb adaugat un space la final ca sa  citeasca
    setUpdateArray([
      ...updateArray.slice(0, index),
      event.target.value,
      // @ts-ignore
      ...updateArray.slice(index + 1, objectType.text.length),
    ]);
  };

  const handleEditArray = (addField: boolean) => {
    addField
      ? setObjectType({ ...objectType, text: [...objectType.text, ""] })
      : // @ts-ignore
      objectType.text.length > 1
      ? setObjectType({
          ...objectType,
          text: objectType.text.slice(0, objectType.text.length - 1),
        })
      : setObjectType({ ...objectType, text: objectType.text });
    console.log(objectType.text);
  };
  const exitModal = () => {
    props.setCreateModal({ visibility: false, schema: "none" });
    document.body.style.overflow = "unset";
  };
  const createInputs = Object.keys(objectType).map(
    (element: string, index: number) => {
      return (
        <>
          <StyledText color={colors.primary.base}>
            {capitalizeFirstLetter(element)}
          </StyledText>
          {
            // @ts-ignore

            Array.isArray(objectType[element]) ? (
              <>
                {
                  // @ts-ignore
                  objectType[element].map((item: any, index: number) => {
                    return (
                      <>
                        <StyledTextArea
                          onChange={(e) => handleArrayMessageChange(e, index)}
                          name={element}
                          minHeight={
                            item.length > 50
                              ? (item.length / 3 + 20).toString() + "px"
                              : ""
                          }
                        >
                          {item}
                        </StyledTextArea>
                      </>
                    );
                  })
                }
                <StyledSaveButton
                  onClick={
                    // @ts-ignore
                    () => handleEditArray(true)
                  }
                >
                  +
                </StyledSaveButton>
                <StyledSaveButton
                  onClick={
                    // @ts-ignore
                    () => handleEditArray(false)
                  }
                >
                  -
                </StyledSaveButton>
              </>
            ) : (
              <>
                {element === "image" ||
                element === "icon" ||
                element === "avatar" ? (
                  <UploadImage
                    uploadFunction={handleMessageChange}
                    objData={element}
                    index={index}
                    //@ts-ignore
                    usedImage={updateObject}
                  />
                ) : (
                  <StyledTextArea
                    onChange={(e) => handleMessageChange(e)}
                    name={element}
                    minHeight={
                      // @ts-ignore
                      objectType[element].length > 50
                        ? // @ts-ignore
                          (objectType[element].length / 3 + 20).toString() +
                          "px"
                        : ""
                    }
                  >
                    {
                      // @ts-ignore
                      objectType[element]
                    }
                  </StyledTextArea>
                )}
              </>
            )
          }
        </>
      );
    }
  );

  return (
    <ModalCover>
      <ModalWrapper>
        <ContentContainer>
          <StyledText color={colors.primary.base}>Create new course</StyledText>
          {createInputs}
          <StyledSaveButton onClick={handleCreate}>Create</StyledSaveButton>
          <StyledSaveButton onClick={exitModal}>Close</StyledSaveButton>
        </ContentContainer>
      </ModalWrapper>
    </ModalCover>
  );
};
