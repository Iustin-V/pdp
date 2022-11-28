import React from "react";

import axios from "axios";

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
import { StyledErrorMessage } from "../Styles";
import { UploadImage } from "../UploadImage/UploadImage";

interface CreateModalProps {
  data: any;
  createModalSchema: string;
  setCreateModal: React.Dispatch<
    React.SetStateAction<{ visibility: boolean; schema: string }>
  >;
}
export const CreateModal = (props: CreateModalProps) => {
  const config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2ZjN2M1N2RlYmYxOTE4ZWI1Mjc5MiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Njc4MjkyMzB9.BQMlU-SugSbJYCB8Non09NZTArPUAOw1s7rXUWTrOUI",
    },
  };
  const [updateObject, setUpdateObject] = React.useState({});
  const [updateArray, setUpdateArray] = React.useState([]);
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
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

  React.useEffect(() => {
    const createValues = Object.values(updateObject);
    //@ts-ignore
    const emptyArray = updateArray?.includes("");
    const Titles = props?.data?.content?.map((item: any) => {
      if (item?.title) {
        return item?.title?.toLowerCase();
      }
      return item?.titleSection?.toLowerCase();
    });

    if (props.createModalSchema === "course") {
      //@ts-ignore
      if (
        createValues?.length === 4 &&
        //@ts-ignore
        !createValues?.includes("") &&
        updateArray?.length > 0 &&
        !emptyArray
      ) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
      if (
        //@ts-ignore
        Titles?.includes(updateObject?.title?.toLowerCase().trim()) || //@ts-ignore
        Titles?.includes(updateObject?.titleSection?.toLowerCase().trim())
      ) {
        setButtonDisabled(true);
        setErrorMessage("Title is already used.");
      } else {
        setErrorMessage("");
      }
    } else if (props.createModalSchema === "event") {
      //@ts-ignore
      if (
        createValues?.length === 6 &&
        //@ts-ignore
        !createValues?.includes("")
      ) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
      if (
        //@ts-ignore
        Titles?.includes(updateObject?.title?.toLowerCase().trim()) || //@ts-ignore
        Titles?.includes(updateObject?.titleSection?.toLowerCase().trim())
      ) {
        setButtonDisabled(true);
        setErrorMessage("Title is already used.");
      } else {
        setErrorMessage("");
      }
    } else if (props.createModalSchema === "review") {
      if (
        createValues?.length === 4 &&
        //@ts-ignore
        !createValues?.includes("")
      ) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    }

    //@ts-ignore
  }, [updateObject, updateArray]);

  const handleCreate = () => {
    let text: undefined; //@ts-ignore

    if (updateArray?.length > 0) {
      // @ts-ignore
      text = updateArray;
    } else {
      // @ts-ignore
      text = updateObject.text;
    }
    axios
      .put(
        `https://api.profadepovesti.ro/api/sections/${props.data?._id}`,
        {
          content: [
            ...props.data.content,
            {
              ...updateObject,
              text,
            },
          ],
        },
        config
      )
      .then(() => {
        window.location.reload();
      })
      .catch(() => {
        alert(
          "An error has occurred while trying to save, please try again later."
        );
      });
    exitModal();
  };

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
          [event.target.name]: event.target.value.trim(),
        });
  };
  const handleArrayMessageChange = (event: any, index: number) => {
    //@ts-ignore
    setUpdateArray([
      //@ts-ignore
      ...updateArray?.slice(0, index),
      event.target.value.trim(),
      //@ts-ignore
      ...updateArray.slice(index + 1, objectType.text.length),
    ]);
  };

  const handleEditArray = (addField: boolean) => {
    if (addField) {
      setObjectType({ ...objectType, text: [...objectType.text, ""] });
    } else if (objectType.text.length > 1) {
      setObjectType({
        ...objectType,
        text: objectType.text.slice(0, objectType.text.length - 1),
      }); //@ts-ignore

      if (updateArray.length > 1) {
        //@ts-ignore

        updateArray.pop();
      }
    } else {
      setObjectType({ ...objectType, text: objectType.text });
    }
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
          {(element === "title" || element === "titleSection") && (
            <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
          )}
          {Array.isArray(objectType[element as keyof typeof objectType]) ? (
            <>
              {
                // @ts-ignore
                objectType[element as keyof typeof objectType].map(
                  (item: any, index: number) => {
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
                  }
                )
              }
              <StyledSaveButton onClick={() => handleEditArray(true)}>
                +
              </StyledSaveButton>
              <StyledSaveButton onClick={() => handleEditArray(false)}>
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
                  usedImage={updateObject}
                />
              ) : (
                <StyledTextArea
                  onChange={(e) => handleMessageChange(e)}
                  name={element}
                  minHeight={
                    objectType[element as keyof typeof objectType].length > 50
                      ? (
                          objectType[element as keyof typeof objectType]
                            .length /
                            3 +
                          20
                        ).toString() + "px"
                      : ""
                  }
                >
                  {objectType[element as keyof typeof objectType]}
                </StyledTextArea>
              )}
            </>
          )}
        </>
      );
    }
  );

  return (
    <ModalCover>
      <ModalWrapper>
        <ContentContainer>
          <StyledText color={colors.primary.base}>
            Create new {props.createModalSchema}
          </StyledText>
          {createInputs}
          <StyledSaveButton onClick={handleCreate} disabled={buttonDisabled}>
            Create
          </StyledSaveButton>
          <StyledSaveButton onClick={exitModal}>Close</StyledSaveButton>
        </ContentContainer>
      </ModalWrapper>
    </ModalCover>
  );
};
