import { nanoid } from "nanoid";
import { ButtonMedium } from "../../components/Button.styled";
import {
  HeroButton,
  HeroContainer,
  HeroElem,
  HeroList,
  HeroText,
  HeroTitle,
} from "./Hero.styled";

export default function Hero() {
  const heroList = [
    { svg: "", text: "швейная фабрика полного цикла" },
    { svg: "", text: "более 6000 гостиниц доверяют нам" },
    { svg: "", text: "все в наличии на собственных складах" },
    { svg: "", text: "более 1 500 000 изделий произведено" },
    { svg: "", text: "c 2011 года надежный поставщик" },
  ];
  return (
    <HeroContainer>
      <HeroTitle>
        Махровые изделия для гостиниц оптом со скидкой до 50%
      </HeroTitle>
      <HeroButton>Посмотреть каталог</HeroButton>
      <ButtonMedium>Заказать</ButtonMedium>
      <HeroList>
        {heroList.map((elem) => (
          <HeroElem key={nanoid()}>
            <HeroText>{elem.text}</HeroText>
          </HeroElem>
        ))}
      </HeroList>
    </HeroContainer>
  );
}
