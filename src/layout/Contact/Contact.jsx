import {
  ContactContainer,
  ContactForm,
  ContactText,
  ContactTitle,
} from "./Contact.styled";

export default function Contact() {
  return (
    <ContactContainer>
      <ContactTitle>
        Закажите махровые изделия для комфорта ваших гостей
      </ContactTitle>
      <ContactText>
        Напишите свой номер телефона, и вы получите расчёт вашего заказа в
        течение 30 минут.
      </ContactText>
      <ContactForm />
    </ContactContainer>
  );
}
