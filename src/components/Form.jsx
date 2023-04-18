import styled from "styled-components";
import { ButtonLarge } from "./Button.styled";
import { size } from "../utils/break-points";

const ContactFormContainer = styled.div`
  @media (min-width: ${size.desktop}) {
    display: flex;
    justify-content: space-between;
    width: 760px;
    margin: ${(props) => (props.possition === "center" ? "0 auto" : 0)};
  }
`;

const ContactFormInput = styled.input`
  display: block;
  width: 100%;
  border: none;
  margin-bottom: 18px;
  padding: 12px 10px 8px;
  &::placeholder {
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.36px;
    color: #a2a2a2;
  }
  @media (min-width: ${size.desktop}) {
    width: 360px;
    margin-bottom: 0;
    padding: 28px 110px 20px 20px;
    &::placeholder {
      font-size: 28px;
      line-height: 39px;
      letter-spacing: 0.55px;
    }
  }
`;

export default function Form({ possition }) {
  return (
    <ContactFormContainer possition={possition}>
      <ContactFormInput type="tel" placeholder="+7 (___) ___-__-__" />
      <ButtonLarge>Заказать</ButtonLarge>
    </ContactFormContainer>
  );
}
