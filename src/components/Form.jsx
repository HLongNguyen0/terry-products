import styled from "styled-components";
import { ButtonLarge } from "./Button.styled";

const ContactFormContainer = styled.div``;

const ContactFormInput = styled.input`
  display: block;
  width: 100%;
  border: none;
  margin-bottom: 18px;
  padding: 10px;
  &::placeholder {
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.36px;
    color: #a2a2a2;
  }
`;

export default function Form() {
  return (
    <ContactFormContainer>
      <ContactFormInput type="tel" placeholder="+7 (___) ___-__-__" />
      <ButtonLarge>Заказать</ButtonLarge>
    </ContactFormContainer>
  );
}
