import {
  HeaderContainer,
  HeaderLogo,
  HeaderPhoneCall,
  HeaderPhoneContainer,
  HeaderPhoneNumber,
} from "./Header.styled";
import logo from "../../img/desktop/logo.png";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo src={logo} />
      <HeaderPhoneContainer>
        <HeaderPhoneNumber>8 800 222 10 24</HeaderPhoneNumber>
        <HeaderPhoneCall href="tel:88002221024">
          Заказать звонок
        </HeaderPhoneCall>
      </HeaderPhoneContainer>
    </HeaderContainer>
  );
}
