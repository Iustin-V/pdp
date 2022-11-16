import styled from "styled-components";

import { colors, fontSizes } from "../../generalStyle";

export const StyledEventCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 850px;
  @media (max-width: 768px) {
    align-items: center;
    max-width: calc(100vw - 80px);
  }
`;
export const MediaWrapper = styled.div`
  height: 166px;
  overflow: hidden;
  width: 30%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const StyledMedia = styled.img<{ height?: string }>`
  height: ${(props) => props.height || "200px"};

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`;
export const StyledContent = styled.div`
  display: inherit;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const StyledTitle = styled.p`
  font-family: "Lucida Grande", Tahoma, Verdana, Arial, sans-serif;
  font-size: ${fontSizes.mobile.heading.base};
  margin: 0;
  color: ${colors.primary.base};

  @media (max-width: 768px) {
    font-weight: 700;
    font-size: 18px;
    text-align: center;
  }
`;
export const StyledParagraph = styled.p<{ textAlign?: string }>`
  width: 100%;
  margin: 0;
  flex-direction: column;
  gap: 10px;
  display: flex;
  color: ${colors.primary.base};
  ${(props) => `text-align: ${props.textAlign};
  line-height:1.6rem;`};
  @media (max-width: 768px) {
    font-size: ${fontSizes.mobile.paragraph.small};
    align-items: center;
  }
`;
export const StyledPageEventInfo = styled.div`
  margin-top: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
export const StyledButton = styled.button`
  background-color: ${colors.primary.base};
  width: fit-content;
  border-radius: 12px;
  border: none;
  color: white;
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  font-size: 14px;
  cursor: pointer;

  :hover {
    border: 2px solid ${colors.primary.base};
    background-color: ${colors.primary.lighter};
  }
`;
