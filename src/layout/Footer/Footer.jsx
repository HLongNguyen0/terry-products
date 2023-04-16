import {
  FooterContainer,
  FooterLogo,
  FooterSMedia,
  FooterSMediaElem,
  FooterSMediaImg,
  FooterText,
} from "./Footer.styled";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLogo />
      <FooterText>
        <span>Политика конфиденциальности</span>
        <span>Согласие на рассылку</span>
      </FooterText>
      <FooterSMedia>
        <FooterSMediaElem>
          <FooterSMediaImg />
        </FooterSMediaElem>
      </FooterSMedia>
    </FooterContainer>
  );
}
