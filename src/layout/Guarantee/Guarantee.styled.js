import styled from "styled-components";
import { Section } from "../../components/Section.styled";
import { palette } from "../../utils/palette";

export const GuaranteeContainer = styled(Section)`
  padding: 108px 34px 20px;
`;

export const GuaranteeStrength = styled.div``;

export const GuaranteeTitleWraper = styled.div``;

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
`;

export const GuaranteeList = styled.ul`
  margin-bottom: 56px;
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
  border-radius: 50%;
  margin-right: 20px;
  padding: 8px;
`;

export const GuaranteeElemText = styled.span`
  font-family: "Inter";
  font-weight: 700;
  font-size: 14px;
  line-height: 23px;
  letter-spacing: 0.165421px;
  color: ${palette.black};
`;

export const GuaranteeFeaturesList = styled.ul``;

export const GuaranteeFeaturesElem = styled.li`
  width: 300px;
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
`;

export const GuaranteeFeaturesText = styled.span`
  display: block;
  font-family: "Inter";
  font-weight: 900;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: 0.25px;
  color: ${palette.orange};
`;
