import styled from "styled-components";
import { Section } from "../../components/Container.styled";
import { palette } from "../../utils/palette";
import { size } from "../../utils/break-points";

export const GuaranteeContainer = styled(Section)`
  padding: 108px 34px 20px;
  @media (min-width: ${size.desktop}) {
    padding: 192px 20px 184px;
  }
`;

export const GuaranteeStrength = styled.div`
  margin-bottom: 56px;
  @media (min-width: ${size.desktop}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 140px;
  }
`;

export const GuaranteeTitleWraper = styled.div`
  @media (min-width: ${size.desktop}) {
    width: 560px;
  }
`;

export const GuaranteeTitle = styled.h2`
  margin-bottom: 10px;
  font-family: "Georgia";
  font-weight: 700;
  font-size: 25px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  color: ${palette.orange};
  @media (min-width: ${size.desktop}) {
    font-size: 42px;
    line-height: 48px;
    text-align: start;
    letter-spacing: 1.14px;
  }
`;

export const GuaranteeTitleDescription = styled.p`
  width: 300px;
  margin: 0 auto 16px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.137906px;
  color: ${palette.gray};
  @media (min-width: ${size.desktop}) {
    width: auto;
    font-size: 21px;
    line-height: 25px;
    text-align: start;
    letter-spacing: 0.2px;
  }
`;

export const GuaranteeList = styled.ul`
  @media (min-width: ${size.desktop}) {
    width: 580px;
  }
`;

export const GuaranteeElem = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const GuaranteeElemImg = styled.img`
  background-color: ${palette.orange};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
  padding: 8px;
  @media (min-width: ${size.desktop}) {
    width: 60px;
    height: 60px;
    margin-right: 32px;
  }
`;

export const GuaranteeElemText = styled.span`
  font-family: "Inter";
  font-weight: 700;
  font-size: 14px;
  line-height: 23px;
  letter-spacing: 0.165421px;
  color: ${palette.black};
  @media (min-width: ${size.desktop}) {
    font-size: 22px;
    line-height: 35px;
    letter-spacing: 0.25px;
  }
`;

export const GuaranteeFeaturesList = styled.ul`
  @media (min-width: ${size.desktop}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const GuaranteeFeaturesElem = styled.li`
  width: 300px;
  margin: 0 auto;
  font-family: "Inter";
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.25px;
  color: ${palette.black};
  &:not(:last-child) {
    margin-bottom: 48px;
  }
  @media (min-width: ${size.desktop}) {
    width: 280px;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.25px;
    &:not(:last-child) {
      margin: 0;
    }
  }
`;

export const GuaranteeFeaturesText = styled.span`
  display: block;
  font-family: "Inter";
  font-weight: 900;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: 0.25px;
  color: ${palette.orange};
  @media (min-width: ${size.desktop}) {
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.25px;
  }
`;
