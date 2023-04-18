import styled from "styled-components";
import { Section } from "../../components/Container.styled";
import { ButtonMedium } from "../../components/Button.styled";
import { desktopFreesamples, mobileFreesamples } from "../../img";
import { palette } from "../../utils/palette";
import { size } from "../../utils/break-points";

export const FreeSamplesContainer = styled(Section)`
  background-image: linear-gradient(
      rgba(32, 31, 31, 0.7),
      rgba(32, 31, 31, 0.7)
    ),
    url(${mobileFreesamples});
  background-position: center;
  padding: 60px 34px;
  @media (min-width: ${size.desktop}) {
    background-image: linear-gradient(
        rgba(32, 31, 31, 0.7),
        rgba(32, 31, 31, 0.7)
      ),
      url(${desktopFreesamples});
    padding: 88px 20px;
  }
`;

export const FreeSamplesTitle = styled.h2`
  margin-bottom: 6px;
  font-weight: 800;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.1px;
  text-transform: uppercase;
  color: #fff;
  & span {
    color: ${palette.yellow};
  }
  @media (min-width: ${size.desktop}) {
    width: 700px;
    margin: 0 auto 24px;
    font-size: 45px;
    line-height: 61px;
    letter-spacing: 0.2px;
  }
`;

export const FreeSamplesText = styled.p`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 9px;
  line-height: 13px;
  text-align: center;
  letter-spacing: 0.08px;
  text-transform: uppercase;
  color: #fff;
  @media (min-width: ${size.desktop}) {
    margin-bottom: 64px;
    font-size: 23px;
    line-height: 31px;
    letter-spacing: 0.2px;
  }
`;

export const FreeSamplesButton = styled(ButtonMedium)`
  display: block;
  background-color: ${palette.lightOragne};
  width: fit-content;
  margin: 0 auto;
  @media (min-width: ${size.desktop}) {
    padding: 24px 64px;
  }
`;
