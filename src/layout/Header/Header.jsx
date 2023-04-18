import {
  HeaderContainer,
  HeaderLogo,
  HeaderPhoneCall,
  HeaderPhoneCallImg,
  HeaderPhoneContainer,
  HeaderPhoneNumber,
} from "./Header.styled";
import phone from "../../img/svg/phone.svg";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo desktop="265px" mobile="135px" />
      <HeaderPhoneContainer>
        <HeaderPhoneNumber>8 800 222 10 24</HeaderPhoneNumber>
        <HeaderPhoneCall href="tel:88002221024">
          <span>Заказать звонок</span> <HeaderPhoneCallImg src={phone} />
        </HeaderPhoneCall>
      </HeaderPhoneContainer>
    </HeaderContainer>
  );
}
