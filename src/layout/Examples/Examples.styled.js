import styled from "styled-components";
import { Section } from "../../components/Section.styled";
import { ButtonMedium } from "../../components/Button.styled";
import { palette } from "../../utils/palette";

export const ExamplesContainer = styled(Section)`
  padding: 100px 33px;
`;

export const ExamplesTitle = styled.h2`
  margin-bottom: 56px;
  font-weight: 800;
  font-size: 26px;
  line-height: 115%;
  text-align: center;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: ${palette.orange};
`;

export const ExamplesList = styled.ul``;

export const ExamplesElem = styled.li``;

export const ExamplesImg = styled.picture``;

export const ExamplesDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 21px 0 36px;
`;

export const ExamplesText = styled.h3`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: ${palette.orange};
`;

export const ExamplesButton = styled(ButtonMedium)`
  margin: 0 auto;
`;
