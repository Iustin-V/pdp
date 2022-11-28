import styled from "styled-components";

import { colors } from "../generalStyle";
import { deleteObject } from "../utils/removeObject";
import { StyledSaveButton } from "./EditModal/EditModalStyle";

const StyledOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(0, 0, 0, 0.7);
  position: fixed;
  z-index: 1000;
`;
const StyledModal = styled.div`
  width: 500px;
  height: fit-content;
  background-color: ${colors.secondary.lighter};
  border: 2px solid ${colors.secondary.base};
  border-radius: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 50;
  transform: translate(-50%, -50%);
  padding: 20px;
  h2 {
    text-align: center;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;
export const DeleteModal = (props: any) => {
  return (
    <StyledOverlay>
      <StyledModal>
        <h2>
          Are you sure you want to delete
          {props.modalData.data.sectionName === "ReviewSection"
            ? ` ${
                props.modalData.data.content[props.modalData.index].name
              }'s review`
            : ` "${props.modalData.data.content[props.modalData.index].title || props.modalData.data.content[props.modalData.index].titleSection}"`}
        </h2>
        <div>
          <StyledSaveButton
            onClick={() => {
              deleteObject(props.modalData.data, props.modalData.index);
              props.setDeleteMOdalOpen(false);
            }}
          >
            YES
          </StyledSaveButton>
          <StyledSaveButton
            onClick={() => {
              props.setDeleteMOdalOpen(false);
            }}
          >
            NO
          </StyledSaveButton>
        </div>
      </StyledModal>
    </StyledOverlay>
  );
};
