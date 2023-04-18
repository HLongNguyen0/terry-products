import styled from "styled-components";
import { Section } from "../../components/Container.styled";
import { palette } from "../../utils/palette";
import { size } from "../../utils/break-points";

export const PartnersContainer = styled(Section)`
  padding-top: 104px;
  @media (min-width: ${size.desktop}) {
    padding-top: 184px;
  }
`;

export const PartnersTitle = styled.h2`
  margin-bottom: 32px;
  font-weight: 800;
  font-size: 26px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: ${palette.orange};
  @media (min-width: ${size.desktop}) {
    margin-bottom: 40px;
    font-size: 45px;
    line-height: 61px;
    letter-spacing: 0.2px;
  }
`;

export const PartnersList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const PartnersElem = styled.li``;

export const PartnersImg = styled.picture``;
