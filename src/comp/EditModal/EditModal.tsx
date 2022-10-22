import React from "react";
import axios from "axios";

import {
  ModalCover,
  ModalWrapper,
  StyledSaveButton,
  StyledText,
  StyledTextArea,
  ContentContainer,
} from "./EditModalStyle";
import { colors } from "../../generalStyle";
import { capitalizeFirstLetter } from "../../utils/Capitalize";

interface EditModalProps {
  modalData: any;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  editModal: boolean;
  data?: {};
  handleSave?: () => void;
}

export const EditModal = (props: EditModalProps) => {
  const localModalData = props?.modalData;
  const [updateObject, setUpdateObject] = React.useState({});
  const [updateArray, setUpdateArray] = React.useState([]);
  const [updateObjectArray, setUpdateObjectArray] = React.useState([{}]);
  const [initialArray, setInitialArray] = React.useState([]);
  const [initialObjectArray, setInitialObjectArray] = React.useState([]);

  if (props.editModal) {
    document.body.style.overflow = "hidden";
  }
  let config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2ZjN2M1N2RlYmYxOTE4ZWI1Mjc5MiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjU3NDM0Mjl9.xiEvj5nl3X2edINIShjEl3k9M12cvgnWTm8Fvi7b0Lg",
    },
  };

  React.useEffect(() => {
    setUpdateObjectArray(initialObjectArray);
    setUpdateArray(initialArray);
  }, [initialArray, initialObjectArray]);

  const saveModal = () => {
    let content = undefined;
    if (updateArray.length > 0) {
      content = updateArray;
    } else if (updateObjectArray.length > 0) {
      content = updateObjectArray;
    }
    axios.put(
      `https://pdp-api.onrender.com/api/sections/${localModalData?._id}`,
      {
        ...updateObject,
        content,
      }
    );
    exitModal();
  };

  const exitModal = () => {
    props.setEditModal(false);
    document.body.style.overflow = "unset";
  };

  const handleMessageChange = (event: any) => {
    setUpdateObject({
      ...updateObject,
      [event.target.name]: event.target.value,
    });
  };

  const handleArrayMessageChange = (event: any, index?: number) => {
    setInitialArray(props.modalData[event.target.name]);
    // @ts-ignore
    // la copy paste trb adaugat un space la final ca sa  citeasca
    setUpdateArray([
      ...updateArray.slice(0, index),
      event.target.value,
      // @ts-ignore
      ...updateArray.slice(index + 1, initialArray.length),
    ]);
  };

  const handleObjectArrayMessageChange = (
    event: any,
    name: string,
    index: number
  ) => {
    setInitialObjectArray(props.modalData["content"]);

    setUpdateObjectArray([
      ...updateObjectArray.slice(0, index),
      { ...updateObjectArray[index], [name]: event.target.value },
      ...updateObjectArray.slice(index + 1, initialObjectArray.length),
    ]);
  };

  const textEditors = Object.keys(localModalData).map((element: string) => {
    if (
      [
        "video",
        "title",
        "subtitle",
        "description",
        "label",
        "content",
      ].includes(element.toLowerCase()) &&
      localModalData[element].length !== 0
    ) {
      return (
        <>
          <StyledText color={colors.primary.base}>
            {capitalizeFirstLetter(element)}
          </StyledText>
          {Array.isArray(localModalData[element]) ? (
            localModalData[element].map((item: any, index: number) => {
              if (typeof item === "object") {
                return (
                  <>
                    <StyledText color={colors.primary.base}>
                      {"Element "}
                      {index + 1}
                      {" from "}
                      {capitalizeFirstLetter(element)}
                    </StyledText>
                    {Object.keys(item).map((objData: string) => {
                      return (
                        <>
                          {Array.isArray(item[objData]) ? (
                            <></>
                          ) : (
                            <>
                              <StyledText color={colors.primary.base}>
                                {capitalizeFirstLetter(objData)}{" "}
                              </StyledText>
                              <StyledTextArea
                                onChange={(e) =>
                                  handleObjectArrayMessageChange(
                                    e,
                                    objData,
                                    index
                                  )
                                }
                                name={item}
                              >
                                {item[objData]}
                              </StyledTextArea>
                            </>
                          )}
                        </>
                      );
                    })}
                  </>
                );
              }
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
          ) : (
            <StyledTextArea
              onChange={(e) => handleMessageChange(e)}
              name={element}
            >
              {localModalData[element]}
            </StyledTextArea>
          )}
        </>
      );
    }
  });
  return (
    <ModalCover>
      <ModalWrapper>
        <ContentContainer>
          <StyledText color={colors.primary.base}>Edit Section</StyledText>
          {textEditors}
          <StyledSaveButton onClick={saveModal}>Save</StyledSaveButton>
          <StyledSaveButton onClick={exitModal}>CLOSE</StyledSaveButton>
        </ContentContainer>
      </ModalWrapper>
    </ModalCover>
  );
};
