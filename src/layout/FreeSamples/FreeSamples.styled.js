import styled from "styled-components";
import { Section } from "../../components/Section.styled";
import { ButtonMedium } from "../../components/Button.styled";
import {
  //   desktopFreesamples,
  mobileFreesamples,
} from "../../img";
import { palette } from "../../utils/palette";

export const FreeSamplesContainer = styled(Section)`
  background-image: linear-gradient(
      rgba(32, 31, 31, 0.7),
      rgba(32, 31, 31, 0.7)
    ),
    url(${mobileFreesamples});
  padding: 60px 40px;
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
`;

export const FreeSamplesButton = styled(ButtonMedium)`
  display: block;
  background-color: ${palette.lightOragne};
  margin: 0 auto;
`;
