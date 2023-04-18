import styled from "styled-components";
import { palette } from "../utils/palette";
import { size } from "../utils/break-points";

export const ButtonSmall = styled.a`
  display: flex;
  justify-content: space-between;
  text-align: center;
  background-color: ${palette.orange};
  padding: 7px 10px;
  font-weight: 600;
  font-size: 9.88235px;
  line-height: 13px;
  letter-spacing: 0.3px;
  color: ${palette.white};
  @media (min-width: ${size.desktop}) {
    padding: 10px 15px;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0.46px;
  }
`;

export const ButtonMedium = styled.a`
  display: inline-block;
  background-color: ${palette.orange};
  width: 168px;
  padding: 11px 15px;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.2px;
  color: ${palette.white};
  @media (min-width: ${size.desktop}) {
    padding: 16px 72px;
    width: auto;
    font-size: 22px;
    line-height: 30px;
    letter-spacing: 0.4px;
  }
`;

export const ButtonLarge = styled.a`
  display: block;
  background-color: ${palette.orange};
  padding: 10px 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.22px;
  color: #fff;
  @media (min-width: ${size.desktop}) {
    padding: 24px 106px;
    font-size: 28px;
    line-height: 39px;
    letter-spacing: 0.55px;
  }
`;
