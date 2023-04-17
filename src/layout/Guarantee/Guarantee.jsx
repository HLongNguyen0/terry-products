import { nanoid } from "nanoid";
import {
  GuaranteeContainer,
  GuaranteeElem,
  GuaranteeElemImg,
  GuaranteeElemText,
  GuaranteeFeaturesElem,
  GuaranteeFeaturesList,
  GuaranteeFeaturesText,
  GuaranteeList,
  GuaranteeStrength,
  GuaranteeTitle,
  GuaranteeTitleDescription,
  GuaranteeTitleWraper,
} from "./Guarantee.styled";
import { check, box2, people, banner } from "../../img";

export default function Guarantee() {
  const guaranteeList = [
    { img: check, text: "Вся наша продукция сертифицирована" },
    {
      img: box2,
      text: "Мы более 11 лет являемся надёжным поставщиком HoReCa России и СНГ",
    },
    { img: people, text: "Индивидуально подходим к каждому клиенту" },
    { img: banner, text: "Вся продукция имеет маркировку Честный Знак" },
  ];
  return (
    <GuaranteeContainer>
      <GuaranteeStrength>
        <GuaranteeTitleWraper>
          <GuaranteeTitle>Почему вы можете нам доверять</GuaranteeTitle>
          <GuaranteeTitleDescription>
            как доверяют более 20 000 наших постоянных клиентов по всей России и
            СНГ
          </GuaranteeTitleDescription>
        </GuaranteeTitleWraper>
        <GuaranteeList>
          {guaranteeList.map((elem) => (
            <GuaranteeElem key={nanoid()}>
              <GuaranteeElemImg src={elem.img} />
              <GuaranteeElemText>{elem.text}</GuaranteeElemText>
            </GuaranteeElem>
          ))}
        </GuaranteeList>
      </GuaranteeStrength>
      <GuaranteeFeaturesList>
        <GuaranteeFeaturesElem>
          <GuaranteeFeaturesText>
            Швейная Фабрика полного цикла
          </GuaranteeFeaturesText>
        </GuaranteeFeaturesElem>
        <GuaranteeFeaturesElem>
          <GuaranteeFeaturesText>1000 м2</GuaranteeFeaturesText>
          производственная площадь
        </GuaranteeFeaturesElem>
        <GuaranteeFeaturesElem>
          <GuaranteeFeaturesText>до 1000</GuaranteeFeaturesText>
          изделий в день
        </GuaranteeFeaturesElem>
        <GuaranteeFeaturesElem>
          <GuaranteeFeaturesText>более 1,5 млн</GuaranteeFeaturesText>
          изделий-опыт производства
        </GuaranteeFeaturesElem>
      </GuaranteeFeaturesList>
    </GuaranteeContainer>
  );
}
