import { nanoid } from "nanoid";
import {
  MerchandiseButton,
  MerchandiseContainer,
  MerchandiseDescription,
  MerchandiseElem,
  MerchandiseImg,
  MerchandiseList,
  MerchandiseText,
  MerchandiseTextWrapper,
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
      price: "10000",
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
      price: "10000",
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
      price: "10000",
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
      price: "10000",
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
      price: "10000",
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
      price: "10000",
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
            <MerchandiseTextWrapper>
              <MerchandiseText>от {elem.price} руб.</MerchandiseText>
              <MerchandiseButton>Заказать</MerchandiseButton>
            </MerchandiseTextWrapper>
          </MerchandiseElem>
        ))}
      </MerchandiseList>
    </MerchandiseContainer>
  );
}
