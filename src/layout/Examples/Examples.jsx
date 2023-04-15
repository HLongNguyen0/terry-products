import {
  ExamplesButton,
  ExamplesContainer,
  ExamplesElem,
  ExamplesImg,
  ExamplesList,
  ExamplesText,
  ExamplesTitle,
} from "./Examples.styled";
import {
  desktopExample1,
  desktopExample2,
  desktopExample3,
  mobileExample1,
  mobileExample2,
  mobileExample3,
} from "../../img";
import { nanoid } from "nanoid";

export default function Examples() {
  const examplesList = [
    { desktopImg: desktopExample1, mobileImg: mobileExample1, text: "" },
    { desktopImg: desktopExample2, mobileImg: mobileExample2, text: "" },
    { desktopImg: desktopExample3, mobileImg: mobileExample3, text: "" },
  ];
  return (
    <ExamplesContainer>
      <ExamplesTitle>Что вы можете заказать у нас</ExamplesTitle>
      <ExamplesList>
        {examplesList.map((elem) => (
          <ExamplesElem key={nanoid()}>
            <ExamplesImg>
              <source
                srcSet={elem.desktopImg}
                media="(min-width: 1200px)"
                type="image/jpg"
              />
              <source
                srcSet={elem.mobileImg}
                media="(min-width: 428px)"
                type="image/jpg"
              />
              <img srcSet={elem.desktopImg} alt={elem.text} />
            </ExamplesImg>
            <ExamplesText>{elem.text}</ExamplesText>
            <ExamplesButton>Заказать</ExamplesButton>
          </ExamplesElem>
        ))}
      </ExamplesList>
    </ExamplesContainer>
  );
}
