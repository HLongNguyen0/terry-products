import styled from "styled-components";
import { Section } from "../../components/Container.styled";
import Form from "../../components/Form";
import { palette } from "../../utils/palette";
import { size } from "../../utils/break-points";

export const ContactContainer = styled(Section)`
  background-image: url(${(props) => props.mobileImg[0]}),
    url(${(props) => props.mobileImg[1]}),
    linear-gradient(transparent 68px, ${palette.lightGray} 68px);
  background-repeat: no-repeat;
  background-position: left -24px top, right -24px top, left top;
  padding: 150px 34px 44px;
  @media (min-width: ${size.desktop}) {
    background-image: url(${(props) => props.desktopImg[0]}),
      url(${(props) => props.desktopImg[1]}),
      linear-gradient(
        transparent 68px,
        ${palette.lightGray} 68px,
        ${palette.lightGray} 518px,
        transparent 518px
      );
    background-position: left -120px ${(props) => props.bgImgPossition[0]} -32px,
      right -120px ${(props) => props.bgImgPossition[1]} -32px, top center;
    padding: 155px 20px 155px;
  }
`;

export const ContactTitle = styled.h2`
  margin-bottom: 10px;
  font-weight: 800;
  font-size: 22px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.08px;
  color: ${palette.orange};
  @media (min-width: ${size.desktop}) {
    margin-bottom: 30px;
    font-size: 50px;
    line-height: 55px;
    letter-spacing: 0.2px;
  }
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
  @media (min-width: ${size.desktop}) {
    width: fit-content;
    margin-bottom: 30px;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.2px;
  }
`;

export const ContactForm = styled(Form)`
  margin: 0 auto;
`;
