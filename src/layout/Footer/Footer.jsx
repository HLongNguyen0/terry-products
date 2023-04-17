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
      <FooterLogo width={84} />
      <FooterText>
        <span>Политика конфиденциальности</span>
        <span>Согласие на рассылку</span>
      </FooterText>
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
