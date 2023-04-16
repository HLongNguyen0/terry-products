import styled from "styled-components";
import { palette } from "../utils/palette";

export const ButtonSmall = styled.a`
  display: inline-block;
  background-color: ${palette.orange};
  padding: 7px 10px;
  font-weight: 600;
  font-size: 9.88235px;
  line-height: 13px;
  letter-spacing: 0.3px;
  color: ${palette.white};
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
`;
