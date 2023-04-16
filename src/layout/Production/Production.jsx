import { nanoid } from "nanoid";
import {
  Founder,
  FounderDescription,
  FounderImg,
  FounderInfo,
  FounderName,
  FounderText,
  ProductionContainer,
  ProductionElem,
  ProductionImg,
  ProductionList,
  ProductionTitle,
} from "./Production.styled";
import {
  desktopProduction1,
  desktopProduction2,
  desktopProduction3,
  desktopProduction4,
  mobileProduction1,
  mobileProduction2,
  mobileProduction3,
  mobileProduction4,
} from "../../img";
import { desktopFounder, mobileFounder } from "../../img";

export default function Production() {
  const productionList = [
    { desktopImg: desktopProduction1, mobileImg: mobileProduction1 },
    { desktopImg: desktopProduction2, mobileImg: mobileProduction2 },
    { desktopImg: desktopProduction3, mobileImg: mobileProduction3 },
    { desktopImg: desktopProduction4, mobileImg: mobileProduction4 },
  ];
  return (
    <ProductionContainer>
      <ProductionTitle>производствие мощности</ProductionTitle>
      <ProductionList>
        {productionList.map((production) => (
          <ProductionElem key={nanoid()}>
            <ProductionImg>
              <source
                srcSet={production.desktopImg}
                media="(min-width: 1200px)"
                type="image/jpg"
              />
              <source
                srcSet={production.mobileImg}
                media="(min-width: 428px)"
                type="image/jpg"
              />
              <img srcSet={production.desktopImg} alt="production" />
            </ProductionImg>
          </ProductionElem>
        ))}
      </ProductionList>
      <Founder>
        <FounderImg>
          <source
            srcSet={desktopFounder}
            media="(min-width: 1200px)"
            type="image/jpg"
          />
          <source
            srcSet={mobileFounder}
            media="(min-width: 428px)"
            type="image/jpg"
          />
          <img srcSet={desktopFounder} alt="founder" />
        </FounderImg>
        <FounderInfo>
          <FounderText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea est
            diam quisque dignissim. Amet, quisque risus, ullamcorper ultrices
            quis odio viverra nulla. At euismod dolor, platea duis viverra cras
            odio dolor. Dui et pellentesque nibh laoreet. Erat donec arcu nunc
            vivamus risus enim orci nibh. Tempor, vulputate ligula eros ac sed a
            massa accumsan. Sed viverra consectetur malesuada nam volutpat. Id
            semper ultrices in faucibus aliquam. Diam quis ac leo hendrerit
            lectus libero, sit.
          </FounderText>
          <FounderDescription>
            <FounderName>Руслана Сукаева</FounderName>
            Основатель Швейной Фабрики PROFI DRESS
          </FounderDescription>
        </FounderInfo>
      </Founder>
    </ProductionContainer>
  );
}
