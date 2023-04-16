import styled from "styled-components";
import { ButtonLarge } from "./Button.styled";

const ContactFormContainer = styled.div``;

const ContactFormInput = styled.input``;

export default function Form() {
  return (
    <ContactFormContainer>
      <ContactFormInput type="number" />
      <ButtonLarge>Заказать</ButtonLarge>
    </ContactFormContainer>
  );
}
