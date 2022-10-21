import styled from "styled-components";

const StyledDividerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 850px;
  width: 100%;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    align-items: center;
    max-width: calc(100vw - 80px);
  }

`;
const StyledDivider = styled.hr`
  border-top: 2px solid #002366;
  border-radius: 5px;
  width: calc(50% - 70px);
  height: 0;
`;
const StyledDividerText = styled.p`
  min-width: 140px;
  background: #fff;
  color: #002366;
  border-radius: 50px;
  border: 2px solid #002366;
  padding: 5px 10px;
  text-align: center;
`;
interface DividerProps {
  date: string;
}
export const Divider = (props: DividerProps) => {
  return (
    <StyledDividerContainer>
      <StyledDivider />
      <StyledDividerText>{props.date}</StyledDividerText>
      <StyledDivider />
    </StyledDividerContainer>
  );
};
