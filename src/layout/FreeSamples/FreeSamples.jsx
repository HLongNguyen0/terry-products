import {
  FreeSamplesButton,
  FreeSamplesContainer,
  FreeSamplesText,
  FreeSamplesTitle,
} from "./FreeSamples.styled";

export default function FreeSamples() {
  return (
    <FreeSamplesContainer>
      <FreeSamplesTitle>
        получите образцы нашей продукции <span>бесплатно</span>
      </FreeSamplesTitle>
      <FreeSamplesText>только для организаций сферы Horeca</FreeSamplesText>
      <FreeSamplesButton>Получить образцы</FreeSamplesButton>
    </FreeSamplesContainer>
  );
}
