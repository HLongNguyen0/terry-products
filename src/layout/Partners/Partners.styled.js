import styled from "styled-components";
import { Section } from "../../components/Section.styled";
import { palette } from "../../utils/palette";

export const PartnersContainer = styled(Section)`
  padding-top: 104px;
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
`;

export const PartnersList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const PartnersElem = styled.li``;

export const PartnersImg = styled.picture``;
