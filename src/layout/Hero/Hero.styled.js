import styled from "styled-components";
import { Section } from "../../components/Section.styled";
import { ButtonMedium } from "../../components/Button.styled";
import { palette } from "../../utils/palette";
import {
  // desktopHero1,
  // desktopHero2,
  mobileHero1,
  mobileHero2,
} from "../../img";

export const HeroContainer = styled(Section)`
  padding-bottom: 340px;
  background-image: url(${mobileHero1}), url(${mobileHero2});
  background-image: url(${mobileHero1}), url(${mobileHero2}),
    linear-gradient(transparent 75%, ${palette.white});
  background-position: bottom left, bottom right;
  background-repeat: no-repeat, no-repeat;
`;

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
  background-color: #fff;
  margin-right: 20px;
  border: 2px solid ${palette.orange};
  color: ${palette.orange};
`;

export const HeroList = styled.ul`
  margin-top: 40px;
`;

export const HeroElem = styled.li`
  display: flex;
  align-items: center;
  width: 280px;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const HeroImg = styled.img`
  width: 45px;
`;

export const HeroText = styled.span`
  margin-left: 30px;
  font-family: "Georgia";
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: ${palette.orange};
`;
