import styled from "styled-components";
import Logo from "../../components/Logo";
import { size } from "../../utils/break-points";
import { palette } from "../../utils/palette";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${size.mobile};
  margin: 0 auto;
  padding: 32px;
  @media (min-width: ${size.desktop}) {
    width: ${size.desktop};
    padding: 100px 20px;
  }
`;

export const FooterLogo = styled(Logo)``;

export const FooterText = styled.span`
  font-family: "Inter";
  font-weight: 500;
  font-size: 6px;
  line-height: 8px;
  color: ${palette.black};
  @media (min-width: ${size.desktop}) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const FooterSMedia = styled.ul`
  display: flex;
`;

export const FooterSMediaElem = styled.li``;

export const FooterSMediaImg = styled.img`
  width: 12px;
  height: 12px;
  @media (min-width: ${size.desktop}) {
    width: 35px;
    height: 35px;
  }
`;
