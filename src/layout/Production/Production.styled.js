import styled from "styled-components";
import { Section } from "../../components/Container.styled";
import { palette } from "../../utils/palette";
import { size } from "../../utils/break-points";

export const ProductionContainer = styled(Section)`
  padding: 104px 34px 44px;
  @media (min-width: ${size.desktop}) {
    padding: 176px 20px 114px;
  }
`;

export const ProductionTitle = styled.h2`
  margin-bottom: 40px;
  font-weight: 800;
  font-size: 26px;
  line-height: 30px;
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

export const ProductionList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 100px;
  @media (min-width: ${size.desktop}) {
    margin-bottom: 176px;
  }
`;

export const ProductionElem = styled.li`
  &:not(:last-child) {
    margin-bottom: 16px;
    @media (min-width: ${size.desktop}) {
    }
  }
`;

export const ProductionImg = styled.picture``;

export const Founder = styled.div`
  @media (min-width: ${size.desktop}) {
    display: flex;
  }
`;

export const FounderDecor = styled.div`
  position: absolute;
  top: -152px;
  right: -10px;
  font-family: "Georgia";
  font-weight: 400;
  font-size: 160px;
  line-height: 182px;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  color: ${palette.orange};
  @media (min-width: ${size.desktop}) {
    top: -300px;
    font-size: 314px;
    line-height: 357px;
    letter-spacing: 1.4px;
  }
`;

export const FounderImg = styled.picture``;

export const FounderInfo = styled.div`
  position: relative;
  top: -40px;
  width: 300px;
  margin: 0 auto;
  @media (min-width: ${size.desktop}) {
    top: 115px;
    left: -50px;
    width: 600px;
  }
`;

export const FounderText = styled.p`
  background-color: ${palette.lightGray};
  padding: 28px;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.1px;
  color: ${palette.gray};
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.15);
  @media (min-width: ${size.desktop}) {
    margin-bottom: 32px;
    padding: 50px;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.2px;
  }
`;

export const FounderDescription = styled.div`
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.1px;
  text-transform: capitalize;
  color: ${palette.gray};
  @media (min-width: ${size.desktop}) {
    padding-left: 106px;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.2px;
  }
`;

export const FounderName = styled.span`
  display: block;
  font-weight: 800;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1px;
  text-transform: capitalize;
  color: ${palette.gray};
  @media (min-width: ${size.desktop}) {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.2px;
  }
`;
