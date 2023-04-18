import styled from "styled-components";
import { Section } from "../../components/Container.styled";
import Form from "../../components/Form";
import { palette } from "../../utils/palette";
import { desktopContactLogo, mobileContactLogo } from "../../img";
import { size } from "../../utils/break-points";

export const ContactLogotypeContainer = styled(Section)`
  background-image: linear-gradient(
      to right,
      ${palette.lightGray} 25%,
      transparent
    ),
    url(${mobileContactLogo});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: right;
  padding: 30px 34px;
  @media (min-width: ${size.desktop}) {
    background-image: linear-gradient(
        to right,
        ${palette.lightGray} 25%,
        transparent
      ),
      url(${desktopContactLogo});
    background-position: right -75% center;
    padding: 80px 20px 120px;
  }
`;

export const ContactLogotypeTitle = styled.h2`
  margin-bottom: 18px;
  font-family: "Georgia";
  font-weight: 700;
  font-size: 23px;
  line-height: 26px;
  letter-spacing: 0.46px;
  text-transform: uppercase;
  color: ${palette.orange};
  @media (min-width: ${size.desktop}) {
    width: 760px;
    font-size: 48px;
    line-height: 55px;
    letter-spacing: 1px;
  }
`;

export const ContactLogotypeForm = styled(Form)``;
