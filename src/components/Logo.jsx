import styled from "styled-components";
import desktopLogo from "../img/desktop/logo.png";
import mobileLogo from "../img/mobile/logo.png";
import { size } from "../utils/break-points";

export const LogoWrapper = styled.a`
  width: ${(props) => props.width.mobile};
  @media (min-width: ${size.desktop}) {
    width: ${(props) => props.width.desktop};
  }
`;

export const LogoImg = styled.picture`
  width: 100%;
`;

export default function Logo({ desktop, mobile }) {
  return (
    <LogoWrapper width={{ desktop, mobile }}>
      <LogoImg>
        <source
          srcSet={desktopLogo}
          media="(min-width: 1200px)"
          type="image/jpg"
        />
        <source
          srcSet={mobileLogo}
          media="(min-width: 428px)"
          type="image/jpg"
        />
        <img srcSet={desktopLogo} alt="logo" />
      </LogoImg>
    </LogoWrapper>
  );
}
