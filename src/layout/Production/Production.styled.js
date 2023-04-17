import styled from "styled-components";
import { Section } from "../../components/Section.styled";
import { palette } from "../../utils/palette";

export const ProductionContainer = styled(Section)`
  padding: 104px 34px 44px;
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
`;

export const ProductionList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

export const ProductionElem = styled.li`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const ProductionImg = styled.picture``;

export const Founder = styled.div``;

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
`;

export const FounderImg = styled.picture``;

export const FounderInfo = styled.div`
  position: relative;
  top: -40px;
  width: 300px;
  margin: 0 auto;
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
`;

export const FounderDescription = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.1px;
  text-transform: capitalize;
  color: ${palette.gray};
`;

export const FounderName = styled.span`
  display: block;
  font-weight: 800;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1px;
  text-transform: capitalize;
  color: ${palette.gray};
`;
