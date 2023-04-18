import styled from "styled-components";
import { size } from "../utils/break-points";

export const Section = styled.section`
  width: ${size.mobile};
  padding: 0 34px;
  margin: 0 auto;
  @media (min-width: ${size.desktop}) {
    width: ${size.desktop};
    padding: 0 20px;
  }
`;
