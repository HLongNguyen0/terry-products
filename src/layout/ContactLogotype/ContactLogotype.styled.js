import styled from "styled-components";
import { Section } from "../../components/Section.styled";
import Form from "../../components/Form";
import { palette } from "../../utils/palette";
import {
  // desktopContactLogo,
  mobileContactLogo,
} from "../../img";

export const ContactLogotypeContainer = styled(Section)`
  padding: 30px 34px;
  background-image: linear-gradient(
      to right,
      ${palette.lightGray} 25%,
      transparent
    ),
    url(${mobileContactLogo});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: right 50%;
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
`;

export const ContactLogotypeForm = styled(Form)``;
