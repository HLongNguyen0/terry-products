import styled from "styled-components";
import { Section } from "../../components/Container.styled";
import { ButtonMedium } from "../../components/Button.styled";
import { palette } from "../../utils/palette";
import {
  desktopHero1,
  desktopHero2,
  mobileHero1,
  mobileHero2,
} from "../../img";
import { size } from "../../utils/break-points";

export const HeroContainer = styled(Section)`
  background-image: url(${mobileHero1}), url(${mobileHero2});
  background-image: url(${mobileHero1}), url(${mobileHero2}),
    linear-gradient(transparent 75%, ${palette.white});
  background-position: bottom left, bottom right;
  background-repeat: no-repeat, no-repeat;
  padding-bottom: 340px;
  @media (min-width: ${size.desktop}) {
    padding-bottom: 200px;
    background-image: url(${desktopHero1}), url(${desktopHero2});
    background-image: url(${desktopHero1}), url(${desktopHero2}),
      linear-gradient(transparent 75%, ${palette.white});
    background-position: bottom right 32px, bottom right -386px;
  }
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
  @media (min-width: ${size.desktop}) {
    width: 650px;
    margin-bottom: 32px;
    font-size: 45px;
    line-height: 51px;
    letter-spacing: 1px;
  }
`;

export const HeroButton = styled(ButtonMedium)`
  background-color: #fff;
  margin-right: 20px;
  border: 2px solid ${palette.orange};
  color: ${palette.orange};
  @media (min-width: ${size.desktop}) {
    margin-right: 28px;
    padding: 16px 40px;
  }
`;

export const HeroList = styled.ul`
  margin-top: 40px;
  @media (min-width: ${size.desktop}) {
    width: 650px;
    height: 200px;
    margin-top: 56px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const HeroElem = styled.li`
  display: flex;
  align-items: center;
  width: 280px;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  @media (min-width: ${size.desktop}) {
    width: 320px;
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
  @media (min-width: ${size.desktop}) {
    font-size: 15px;
    line-height: 17px;
    letter-spacing: 0.952475px;
  }
`;
