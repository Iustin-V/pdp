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
import React from "react";
import axios from "axios";

interface EditModalProps {
  modalData: any;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  editModal: boolean;
  data?: {};
  handleSave?: () => void;
}

export const EditModal = (props: EditModalProps) => {
  const localModalData = props?.modalData;
  const [message, setMessage] = React.useState([]);
  const [updateObject, setUpdateObject] = React.useState({});
  const arr = [""];
  if (props.editModal) {
    document.body.style.overflow = "hidden";
  }
  let config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2ZjN2M1N2RlYmYxOTE4ZWI1Mjc5MiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjU3NDM0Mjl9.xiEvj5nl3X2edINIShjEl3k9M12cvgnWTm8Fvi7b0Lg",
    },
  };
  const saveModal = () => {
    // props.handleSave;
    axios.put(
      `https://api-example2.onrender.com/api/sections/${localModalData?._id}`,
      {
        ...updateObject,
      }
    );
    // @ts-ignore
    setMessage(arr);

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

  console.log("localModalData", localModalData);
  const textEditors = Object.keys(localModalData).map(
    (element: string, index: number) => {

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
              localModalData[element].map((item: any) => {
                return (
                  <StyledTextArea
                    onChange={(e) => handleMessageChange(e)}
                    name={element}
                    minHeight={
                      item.length > 50
                        ? (item.length / 3 + 20).toString() + "px"
                        : ""
                    }
                  >
                    {item}
                  </StyledTextArea>
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
    }
  );
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
