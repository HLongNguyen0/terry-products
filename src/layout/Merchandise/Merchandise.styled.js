import styled from "styled-components";
import { Section } from "../../components/Section.styled";
import { palette } from "../../utils/palette";
import { ButtonMedium } from "../../components/Button.styled";

export const MerchandiseContainer = styled(Section)`
  padding: 120px 34px;
`;

export const MerchandiseList = styled.ul``;

export const MerchandiseElem = styled.li`
  background-color: ${palette.lightGray};
  padding: 30px 24px 24px;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const MerchandiseImg = styled.img`
  margin-bottom: 12px;
`;

export const MerchandiseDescription = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.15px;
  text-transform: uppercase;
  color: ${palette.gray};
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
`;

export const MerchandiseButton = styled(ButtonMedium)`
  width: 140px;
`;
