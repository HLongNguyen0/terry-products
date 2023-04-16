import styled from "styled-components";
import { Section } from "../../components/Section.styled";
import { ButtonMedium } from "../../components/Button.styled";
import { palette } from "../../utils/palette";

export const HeroContainer = styled(Section)``;

export const HeroTitle = styled.h1`
  margin-bottom: 18px;
  font-family: "Georgia";
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${palette.orange};
`;

export const HeroButton = styled(ButtonMedium)`
  margin-right: 20px;
`;

export const HeroList = styled.ul``;

export const HeroElem = styled.li``;

export const HeroText = styled.p``;
