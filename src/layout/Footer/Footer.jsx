import {
  FooterContainer,
  FooterLogo,
  FooterSMedia,
  FooterSMediaElem,
  FooterSMediaImg,
  FooterText,
} from "./Footer.styled";
import { inn, fb, wtf } from "../../img";
import { nanoid } from "nanoid";

export default function Footer() {
  const socialmedia = [inn, fb, wtf];
  return (
    <FooterContainer>
      <FooterLogo desktop="265px" mobile="83px" />
      <FooterText>Политика конфиденциальности</FooterText>
      <FooterText>Согласие на рассылку</FooterText>
      <FooterSMedia>
        {socialmedia.map((img) => (
          <FooterSMediaElem key={nanoid()}>
            <a href="/">
              <FooterSMediaImg src={img} />
            </a>
          </FooterSMediaElem>
        ))}
      </FooterSMedia>
    </FooterContainer>
  );
}
