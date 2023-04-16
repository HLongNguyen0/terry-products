import styled from "styled-components";
import Logo from "../../components/Logo";
import { ButtonSmall } from "../../components/Button.styled";
import { palette } from "../../utils/palette";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 428px;
  margin: 0 auto;
  padding: 42px 32px;
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
`;

export const HeaderPhoneCall = styled(ButtonSmall)`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const HeaderPhoneCallImg = styled.img`
  display: inline;
  width: 10px;
  height: 10px;
`;
