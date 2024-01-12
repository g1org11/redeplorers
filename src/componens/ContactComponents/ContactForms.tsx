import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import React from "react";

const ContactForms = () => {
  return (
    <FormsContainer>
      <h1>PLEASE, FEEL YOURSELF COMFORTABLE TO FILL IN OUR CONTACT FORM</h1>
      <div>
        <FormContent>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Subject" required />
        </FormContent>

        <Massage type="text" placeholder="Message" />
        <Submit>
          <button>Submit</button>
        </Submit>
      </div>
    </FormsContainer>
  );
};
export default ContactForms;

const FormsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 450px;
  h1 {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px;
    font-family: ${defaultTheme.fonts.secondary};
  }
`;
const FormContent = styled.div`
  margin-top: 52px;
  display: grid;
  grid-template-columns: 415px 415px;
  column-gap: 25px;
  row-gap: 32px;
  margin-bottom: 32px;
  input {
    width: 415px;
    height: 56px;
    border: 1px solid ${defaultTheme.colors.graytwo};
    border-radius: 8px;
    &::placeholder {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration-line: underline;
      font-family: ${defaultTheme.fonts.secondary};
      color: ${defaultTheme.colors.lightpurpul};
      padding-left: 24px;
    }
  }
`;

const Massage = styled.input`
  width: 854px;
  height: 212px;
  border: 1px solid ${defaultTheme.colors.graytwo};
  border-radius: 8px;
  margin-bottom: 35px;
  &::placeholder {
    position: absolute;
    top: 22px;
    left: 22px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    font-family: ${defaultTheme.fonts.secondary};
    color: ${defaultTheme.colors.lightpurpul};
  }
`;

const Submit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    all: unset;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 7px 32px;
    border-radius: 8px;
    color: ${defaultTheme.colors.white};
    background-color: ${defaultTheme.colors.blue};
    cursor: pointer;
  }
`;
