import styled from "styled-components";

import { StyledPageWrapper } from "../Styles";

const StyledForm = styled.form`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 50px 100px;
`;
const StyledInput = styled.input`
  display: block;
  width: 100%;
  font-size: 24px;
  line-height: 24px * 2;
  font-family: "Fjalla One";
  margin-bottom: 24px * 2;
  border: none;
  border-bottom: 5px solid rgba(0, 0, 0, 1);
  background: #f8f4e5;
  min-width: 250px;
  padding-left: 5px;
  outline: none;
  color: rgba(0, 0, 0, 1);
`;
const StyledButton = styled.input`
  height: 40px;
  display: block;
  margin: 0 auto;
  line-height: 24px * 2;
  padding: 0 20px;
  background: #b4a087;
  letter-spacing: 2px;
  transition: 0.2s all ease-in-out;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 1);

  :hover {
    background: #f8f4e5;
  }
`;
const StyledContainer = styled.div`
  margin: 20px 0;
`;
const StyledTextArea = styled.textarea`
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
const StyledSelect = styled.select`
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
          <StyledSelect
            id="course"
            name="Course"
            placeholder="Selecteaza cursul dorit"
          >
            <option value="course1">Curs dezvoltare personala</option>
            <option value="course2">Curs 2</option>
            <option value="course3">Curs 3</option>
          </StyledSelect>
        </StyledContainer>
        <StyledContainer>

        <StyledTextArea
            placeholder="Message"
            name="Message"
            id="nessage"
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
