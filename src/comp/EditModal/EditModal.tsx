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

interface EditModalProps {
  modalData: any;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  editModal: boolean;
  data?: {};
  handleSave?: () => void;
}

export const EditModal = (props: EditModalProps) => {
  const testObj = {
    label: "firstLabel",
    description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    description2: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    test: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    gfsfg: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    twdasdest: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  };

  if (props.editModal) {
    document.body.style.overflow = "hidden";
  }
  const textEditors = Object.keys(testObj).map(
    (element: string, index: number) => {
      return (
        <>
          <StyledText color={colors.primary.base}>
            {capitalizeFirstLetter(element)}
          </StyledText>
          <StyledTextArea>{Object.values(testObj)[index]}</StyledTextArea>
        </>
      );
    }
  );
  return (
    <ModalCover>
      <ModalWrapper>
        <ContentContainer>
          <StyledText color={colors.primary.base}>Edit Section</StyledText>
          {textEditors}
          <StyledSaveButton onClick={props.handleSave}>Save</StyledSaveButton>
          <StyledSaveButton onClick={() => props.setEditModal(false)}>
            CLOSE
          </StyledSaveButton>
        </ContentContainer>
      </ModalWrapper>
    </ModalCover>
  );
};
