import styled from "styled-components";
import { Section } from "../../components/Section.styled";
import Form from "../../components/Form";
import { palette } from "../../utils/palette";

export const ContactContainer = styled(Section)`
  background-image: url(${(props) => props.mobileImg[0]}),
    url(${(props) => props.mobileImg[1]}),
    linear-gradient(transparent 68px, ${palette.lightGray} 68px);
  background-repeat: no-repeat;
  background-position: left -24px top, right -24px top, left top;
  padding: 150px 34px 44px;
`;

export const ContactTitle = styled.h2`
  margin-bottom: 10px;
  font-weight: 800;
  font-size: 22px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.08px;
  color: ${palette.orange};
`;

export const ContactText = styled.p`
  width: 310px;
  margin: 0 auto 16px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  letter-spacing: 0.08px;
  color: ${palette.black};
`;

export const ContactForm = styled(Form)``;
