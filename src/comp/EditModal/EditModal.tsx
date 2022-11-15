import React from "react";

import axios from "axios";

import { colors } from "../../generalStyle";
import { capitalizeFirstLetter } from "../../utils/Capitalize";
import { UploadImage } from "../UploadImage/UploadImage";
import {
  ContentContainer,
  ModalCover,
  ModalWrapper,
  StyledSaveButton,
  StyledText,
  StyledTextArea,
} from "./EditModalStyle";

interface EditModalProps {
  modalData: any;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  editModal: boolean;
  data?: {};
  handleSave?: () => void;
  createModalSchema: string;
  object?:any;
}

export const EditModal = (props: EditModalProps) => {
  const localModalData = props?.modalData;
  const [updateObject, setUpdateObject] = React.useState({});
  const [updateArray, setUpdateArray] = React.useState([""]);
  const [updateObjectArray, setUpdateObjectArray] = React.useState([{}]);
  const [initialArray, setInitialArray] = React.useState([]);
  const [initialObjectArray, setInitialObjectArray] = React.useState(
    props.modalData["content"]
  );

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

    let emptyObject = false;
    let updateObjArr = false;
    let emptyArray = false;

    emptyObject = updateObject
      ? Object.values(updateObject).includes("")
      : false;
    updateObjArr = false;
    emptyArray = updateArray.length >= 1 ? updateArray.includes("") : false;
    if (updateObjectArray) {
      updateObjectArray.forEach((elem) => {
        if (elem && Object.values(elem).includes("")) {
          updateObjArr = true;
        }
      });
    }
    let content = undefined;
    if (updateArray.length > 0) {
      content = updateArray;
    } else if (updateObjectArray && updateObjectArray.length > 0) {
      content = updateObjectArray;
    }
    if (!emptyObject && !updateObjArr && !emptyArray && !props.object) {
      axios
        .put(
          `https://pdp-api.onrender.com/api/sections/${localModalData?._id}`,
          {
            ...updateObject,
            content,
          }
        )
        .then(() => {
          window.location.reload();
        })
        .catch(() => {
          alert(
            "An error has occurred while trying to update the database, please try again later."
          );
        });
      exitModal();
    } else if (!emptyObject && !updateObjArr && !emptyArray){
      const contentUpdated=props.object?.content
      contentUpdated.forEach((course:any) => {
        if(course.title===props.modalData.title){
          course.text=updateArray
        }
      })
      axios
          .put(
              `https://api.profadepovesti.ro/api/sections/${props.object?._id}`,
              {
                ...updateObject,
                content:contentUpdated,
              }
          )
          .then(() => {
            window.location.reload();
          })
          .catch(() => {
            alert(
                "An error has occurred while trying to update the database, please try again later."
            );
          });
      exitModal();

    }


    else{

      alert("Inputs can not be empty");
    }
  };

  const exitModal = () => {
    props.setEditModal(false);
    document.body.style.overflow = "unset";
  };

  const handleMessageChange = (event: any) => {
    setUpdateObject({
      ...updateObject,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const handleArrayMessageChange = (event: any, index: number) => {
    setInitialArray(props.modalData[event.target.name]);
    setUpdateArray([
      ...updateArray.slice(0, index),
      event.target.value.trim(),
      ...updateArray.slice(index + 1, initialArray.length),
    ]);
  };

  const handleObjectArrayMessageChange = (
    event: any,
    name: string,
    index: number,
    image?: boolean
  ) => {
    setInitialObjectArray(props.modalData["content"]);
    if (image) {
      setUpdateObjectArray([
        ...updateObjectArray.slice(0, index),
        { ...updateObjectArray[index], [name]: event },
        ...updateObjectArray.slice(index + 1, initialObjectArray.length),
      ]);
    } else {
      setUpdateObjectArray([
        ...updateObjectArray.slice(0, index),
        { ...updateObjectArray[index], [name]: event.target.value.trim() },
        ...updateObjectArray.slice(index + 1, initialObjectArray.length),
      ]);
    }
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
      localModalData[element].length !== 0 && !props.object
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
                      if (
                        objData === "image" ||
                        objData === "icon" ||
                        objData === "avatar"
                      ) {
                        return (
                          <>
                            <StyledText color={colors.primary.base}>
                              {capitalizeFirstLetter(objData)}
                            </StyledText>
                            <UploadImage
                              uploadFunction={handleObjectArrayMessageChange}
                              objData={objData}
                              index={index}
                              usedImage={updateObjectArray}
                            />
                          </>
                        );
                      } else {
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
                                  onBlur={(e) =>
                                    handleObjectArrayMessageChange(
                                      e,
                                      objData,
                                      index
                                    )
                                  }
                                  onPaste={(e) =>
                                    handleObjectArrayMessageChange(
                                      e,
                                      objData,
                                      index
                                    )
                                  }
                                  onCut={(e) =>
                                    handleObjectArrayMessageChange(
                                      e,
                                      objData,
                                      index
                                    )
                                  }
                                  name={item}
                                  minHeight={
                                    item[objData].length > 50
                                      ? (
                                          item[objData].length / 3 +
                                          20
                                        ).toString() + "px"
                                      : ""
                                  }
                                >
                                  {item[objData]}
                                </StyledTextArea>
                              </>
                            )}
                          </>
                        );
                      }
                    })}
                  </>
                );
              }
              return (
                <>
                  <StyledTextArea
                    onChange={(e) => handleArrayMessageChange(e, index)}
                    onBlur={(e) => handleArrayMessageChange(e, index)}
                    onPaste={(e) => handleArrayMessageChange(e, index)}
                    onCut={(e) => handleArrayMessageChange(e, index)}
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
              onBlur={(e) => handleMessageChange(e)}
              onPaste={(e) => handleMessageChange(e)}
              onCut={(e) => handleMessageChange(e)}
              name={element}
              minHeight={
                localModalData[element].length > 50
                  ? (localModalData[element].length / 3 + 20).toString() + "px"
                  : ""
              }
            >
              {localModalData[element]}
            </StyledTextArea>
          )}
        </>
      );
    } else if (element.toLowerCase() === "text" && props.object) {
      return (
        <>
          <StyledText color={colors.primary.base}>
            {capitalizeFirstLetter(element)}
          </StyledText>
          {Array.isArray(localModalData[element]) ? (
              localModalData[element].map((item: any, index: number) => {
                return (
                    <>
                      <StyledTextArea
                          onChange={(e) => handleArrayMessageChange(e, index)}
                          onBlur={(e) => handleArrayMessageChange(e, index)}
                          onPaste={(e) => handleArrayMessageChange(e, index)}
                          onCut={(e) => handleArrayMessageChange(e, index)}
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
          ) : null }
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
          <StyledSaveButton onClick={() => saveModal()}>Save</StyledSaveButton>
          <StyledSaveButton onClick={exitModal}>Close</StyledSaveButton>
        </ContentContainer>
      </ModalWrapper>
    </ModalCover>
  );
};
