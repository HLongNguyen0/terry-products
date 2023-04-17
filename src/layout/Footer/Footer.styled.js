import styled from "styled-components";
import Logo from "../../components/Logo";
import { size } from "../../utils/break-points";
import { palette } from "../../utils/palette";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: ${size.mobile};
  margin: 0 auto;
  padding: 32px;
`;

export const FooterLogo = styled(Logo)``;

export const FooterText = styled.span`
  display: flex;
  font-family: "Inter";
  font-weight: 500;
  font-size: 6.3px;
  line-height: 8px;
  color: ${palette.black};
  & span:not(:last-child) {
    margin-right: 22px;
  }
`;

export const FooterSMedia = styled.ul`
  display: flex;
`;

export const FooterSMediaElem = styled.li``;

export const FooterSMediaImg = styled.img``;
