import { nanoid } from "nanoid";
import { ButtonMedium } from "../../components/Button.styled";
import {
  HeroButton,
  HeroContainer,
  HeroElem,
  HeroImg,
  HeroList,
  HeroText,
  HeroTitle,
} from "./Hero.styled";

import { clock, group, box, robe, medal } from "../../img";

export default function Hero() {
  const heroList = [
    { svg: clock, text: "швейная фабрика полного цикла" },
    { svg: group, text: "более 6000 гостиниц доверяют нам" },
    { svg: box, text: "все в наличии на собственных складах" },
    { svg: robe, text: "более 1 500 000 изделий произведено" },
    { svg: medal, text: "c 2011 года надежный поставщик" },
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
            <HeroImg src={elem.svg} />
            <HeroText>{elem.text}</HeroText>
          </HeroElem>
        ))}
      </HeroList>
    </HeroContainer>
  );
}
