import {
  ContactLogotypeContainer,
  ContactLogotypeForm,
  ContactLogotypeText,
  ContactLogotypeTitle,
} from "./ContactLogotype.styled";

export default function ContactLogotype() {
  return (
    <ContactLogotypeContainer>
      <ContactLogotypeTitle>
        Закажите махровые изделия для комфорта ваших гостей
      </ContactLogotypeTitle>
      <ContactLogotypeText>
        Напишите свой номер телефона, и вы получите расчёт вашего заказа в
        течение 30 минут.
      </ContactLogotypeText>
      <ContactLogotypeForm />
    </ContactLogotypeContainer>
  );
}
