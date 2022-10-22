import styled from "styled-components";
import { colors, fontSizes } from "../../generalStyle";

export const ModalCover = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: center;
  z-index: 999;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const ModalWrapper = styled.div`
  height: 700px;
  width: 500px;
  background-color: #f8ecd4;
  padding: 50px;
  opacity: 100%;
  border: 5px solid #b4a087;
  border-radius: 15px;
  overflow: auto;
`;

export const StyledTextArea = styled.textarea<{ minHeight?: string }>`
  min-width: 400px;
  max-width: 400px;
  min-height: ${(props) => props.minHeight || "50px"};
  max-height: 600px;
  margin-bottom: 15px;
`;

export const StyledText = styled.p`
  color: ${colors.primary.base};
  font-family: "KaushanScript";
  font-weight: 700;
  font-size: ${fontSizes.desktop.heading.small};
  margin: 10px;
  :nth-child(1) {
    border-bottom: 2px solid ${colors.primary.base};
    margin-bottom: 15px;
  }
`;

export const StyledSaveButton = styled.button`
  height: 50px;
  width: 150px;
  background-color: #f8ecd4;
  font-size: 30px;
  margin-top: 50px;
  :hover {
  }
`;
