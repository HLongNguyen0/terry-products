import styled from "styled-components";
import { Section } from "../../components/Container.styled";
import { palette } from "../../utils/palette";
import { ButtonSmall } from "../../components/Button.styled";
import { size } from "../../utils/break-points";

export const MerchandiseContainer = styled(Section)`
  padding: 120px 34px;
  @media (min-width: ${size.desktop}) {
    padding: 200px 20px;
  }
`;

export const MerchandiseList = styled.ul`
  @media (min-width: ${size.desktop}) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const MerchandiseElem = styled.li`
  background-color: ${palette.lightGray};
  padding: 30px 24px 24px;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  @media (min-width: ${size.desktop}) {
    width: 360px;
  }
`;

export const MerchandiseImg = styled.img`
  height: 340px;
  margin-bottom: 12px;
`;

export const MerchandiseDescription = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.15px;
  text-transform: uppercase;
  color: ${palette.gray};
  @media (min-width: ${size.desktop}) {
    margin-top: 4px;
  }
`;

export const MerchandiseTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const MerchandiseText = styled.span`
  font-weight: 700;
  font-size: 21px;
  line-height: 29px;
  letter-spacing: 0.15px;
  text-transform: uppercase;
  color: ${palette.orange};
  @media (min-width: ${size.desktop}) {
    font-size: 21px;
    line-height: 29px;
    letter-spacing: 0.15px;
  }
`;

export const MerchandiseButton = styled(ButtonSmall)`
  width: 140px;
  padding: 12px 36px;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.27px;
`;
