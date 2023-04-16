import styled from "styled-components";
import desktopLogo from "../img/desktop/logo.png";
import mobileLogo from "../img/mobile/logo.png";

export const LogoWrapper = styled.a``;

export const LogoImg = styled.picture`
  display: block;
  width: 135px;
`;

export default function Logo() {
  return (
    <LogoWrapper>
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
