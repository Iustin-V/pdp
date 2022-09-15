import { SectionContainer, StyledPageWrapper } from "../Styles";
import styled from "styled-components";
const StyledForm = styled.form`
  background: #f8f4e5;
  padding: 50px 100px;
  border: 2px solid rgba(0, 0, 0, 1);
  box-shadow: 15px 15px 1px #b4a087, 15px 15px 1px 2px rgba(0, 0, 0, 1);
`;
const StyledInput = styled.input`
  display: block;
  width: 100%;
  font-size: 24px;
  line-height: 24px * 2;
  font-family: "Fjalla One";
  margin-bottom: $font-size * 2;
  border: none;
  border-bottom: 5px solid rgba(0, 0, 0, 1);
  background: #f8f4e5;
  min-width: 250px;
  padding-left: 5px;
  outline: none;
  color: rgba(0, 0, 0, 1);
`;
const StyledButton = styled.input`
  height: 30px;
  display: block;
  margin: 0 auto;
  line-height: 24px * 2;
  padding: 0 20px;
  background: #b4a087;
  letter-spacing: 2px;
  transition: 0.2s all ease-in-out;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 1);
  box-shadow: 3px 3px 1px 1px #95a4ff, 3px 3px 1px 2px rgba(0, 0, 0, 1);

  :hover {
    background: rgba(0, 0, 0, 1);
    color: white;
    border: 1px solid rgba(0, 0, 0, 1);
  }
`;
const StyledContainer = styled.div`
  margin: 20px 0;
`;
export const Contact = () => {
  return (
    <StyledPageWrapper>
      <StyledForm
        action="https://public.herotofu.com/v1/62aea5a0-34f8-11ed-9de0-b73c4b901972"
        method="post"
      >
        <StyledContainer>
          {/*<label htmlFor="name">Nume</label>*/}
          <StyledInput
            placeholder="Name"
            name="Name"
            id="name"
            type="text"
            required
          />
        </StyledContainer>
        <StyledContainer>
          {/*<label htmlFor="email">Email</label>*/}
          <StyledInput
            placeholder="Email"
            name="Email"
            id="email"
            type="email"
            required
          />
        </StyledContainer>
        <StyledContainer>
          {/*<label htmlFor="">Telefon</label>*/}
          <StyledInput
            placeholder="Phone"
            name="Phone"
            id="phone"
            type="text"
            required
          />
        </StyledContainer>
        <StyledContainer>
          {/*<label htmlFor="email">Mesaj</label>*/}
          <StyledInput
            placeholder="Message"
            name="Message"
            id="nessage"
            type="text"
            required
          />
        </StyledContainer>
        <StyledContainer>
          <StyledButton type="submit" value="Vorbeste cu profa" />
        </StyledContainer>
      </StyledForm>
    </StyledPageWrapper>
  );
};
