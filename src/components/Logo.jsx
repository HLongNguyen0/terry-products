import styled from "styled-components";
import desktopLogo from "../img/desktop/logo.png";
import mobileLogo from "../img/mobile/logo.png";

export const LogoWrapper = styled.a`
  width: ${(props) => props.width};
`;

export const LogoImg = styled.picture`
  width: 100%;
`;

export default function Logo({ width = 135 }) {
  return (
    <LogoWrapper width={`${width}px`}>
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
