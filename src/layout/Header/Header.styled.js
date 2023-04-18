import styled from "styled-components";
import Logo from "../../components/Logo";
import { ButtonSmall } from "../../components/Button.styled";
import { palette } from "../../utils/palette";
import { size } from "../../utils/break-points";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 428px;
  margin: 0 auto;
  padding: 42px 32px;
  @media (min-width: ${size.desktop}) {
    align-items: center;
    width: ${size.desktop};
    padding: 20px 20px 80px;
  }
`;

export const HeaderLogo = styled(Logo)``;

export const HeaderPhoneContainer = styled.div``;

export const HeaderPhoneNumber = styled.p`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.13px;
  color: ${palette.orange};
  @media (min-width: ${size.desktop}) {
    font-size: 25px;
    line-height: 34px;
    letter-spacing: 0.2px;
  }
`;

export const HeaderPhoneCall = styled(ButtonSmall)`
  & span {
    margin-right: 4px;
  }
`;

export const HeaderPhoneCallImg = styled.img`
  display: inline;
  width: 10px;
  height: 10px;
  @media (min-width: ${size.desktop}) {
    width: 24px;
    height: 24px;
  }
`;
