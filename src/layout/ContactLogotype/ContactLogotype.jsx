import {
  ContactLogotypeContainer,
  ContactLogotypeForm,
  ContactLogotypeTitle,
} from "./ContactLogotype.styled";

export default function ContactLogotype() {
  return (
    <ContactLogotypeContainer>
      <ContactLogotypeTitle>
        вы можете заказать изделие с нанесением фирменного логотипа
      </ContactLogotypeTitle>
      <ContactLogotypeForm />
    </ContactLogotypeContainer>
  );
}
