import styled from "styled-components";
import { Section } from "../../components/Container.styled";
import { ButtonMedium } from "../../components/Button.styled";
import { palette } from "../../utils/palette";
import { size } from "../../utils/break-points";

export const ExamplesContainer = styled(Section)`
  padding: 100px 33px;
  @media (min-width: ${size.desktop}) {
    padding: 100px 20px;
  }
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
  @media (min-width: ${size.desktop}) {
    font-size: 45px;
    line-height: 61px;
    letter-spacing: 0.2px;
  }
`;

export const ExamplesList = styled.ul`
  @media (min-width: ${size.desktop}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ExamplesElem = styled.li`
  @media (min-width: ${size.desktop}) {
    width: 360px;
  }
`;

export const ExamplesImg = styled.picture``;

export const ExamplesDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 21px 0 36px;
  @media (min-width: ${size.desktop}) {
    padding-top: 32px;
  }
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
  @media (min-width: ${size.desktop}) {
    font-size: 26px;
    line-height: 35px;
    letter-spacing: 0.17px;
  }
`;

export const ExamplesButton = styled(ButtonMedium)`
  margin: 0 auto;
`;
