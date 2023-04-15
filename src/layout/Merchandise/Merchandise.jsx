import { nanoid } from "nanoid";
import { ButtonSmall } from "../../components/Button.styled";
import {
  MerchandiseContainer,
  MerchandiseDescription,
  MerchandiseElem,
  MerchandiseImg,
  MerchandiseList,
  MerchandiseText,
} from "./Merchandise.styled";
import {
  desktopMerchandise1,
  desktopMerchandise2,
  desktopMerchandise3,
  desktopMerchandise4,
  desktopMerchandise5,
  desktopMerchandise6,
} from "../../img";

export default function Merchandise() {
  const merchandiseList = [
    {
      desktopImg: desktopMerchandise1,
      mobileImg: "",
      text: "название товара 1",
      description: [
        "особенность товара 1",
        "особенность товара 2",
        "особенность товара 3",
      ],
      price: "100000",
    },
    {
      desktopImg: desktopMerchandise2,
      mobileImg: "",
      text: "название товара 2",
      description: [
        "особенность товара 1",
        "особенность товара 2",
        "особенность товара 3",
      ],
      price: "100000",
    },
    {
      desktopImg: desktopMerchandise3,
      mobileImg: "",
      text: "название товара 3",
      description: [
        "особенность товара 1",
        "особенность товара 2",
        "особенность товара 3",
      ],
      price: "100000",
    },
    {
      desktopImg: desktopMerchandise4,
      mobileImg: "",
      text: "название товара 4",
      description: [
        "особенность товара 1",
        "особенность товара 2",
        "особенность товара 3",
      ],
      price: "100000",
    },
    {
      desktopImg: desktopMerchandise5,
      mobileImg: "",
      text: "название товара 5",
      description: [
        "особенность товара 1",
        "особенность товара 2",
        "особенность товара 3",
      ],
      price: "100000",
    },
    {
      desktopImg: desktopMerchandise6,
      mobileImg: "",
      text: "название товара 6",
      description: [
        "особенность товара 1",
        "особенность товара 2",
        "особенность товара 3",
      ],
      price: "100000",
    },
  ];
  return (
    <MerchandiseContainer>
      <MerchandiseList>
        {merchandiseList.map((elem) => (
          <MerchandiseElem key={nanoid()}>
            <MerchandiseImg src={elem.desktopImg} />
            <MerchandiseText>{elem.text}</MerchandiseText>
            {elem.description.map((description) => (
              <MerchandiseDescription key={nanoid()}>
                {description}
              </MerchandiseDescription>
            ))}
            <MerchandiseText>{elem.price}</MerchandiseText>
            <ButtonSmall>Заказать</ButtonSmall>
          </MerchandiseElem>
        ))}
      </MerchandiseList>
    </MerchandiseContainer>
  );
}
