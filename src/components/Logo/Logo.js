import React from "react";
import { Link } from "gatsby";

import imgL1Logo from "../../assets/image/png/l1-logo.png";
import imgL1LogoWhite from "../../assets/image/png/logo-white.png";
import styled from "styled-components";
import { device } from "../../utils";

const BrandLogo = styled.img`
  @media ${device.xs} {
    max-height: 50px;
  }
  @media ${device.lg} {
    max-height: 100px;
  }
`;

const Logo = ({ white, height, className = "", ...rest }) => {
  return (
    <Link to="/" className={`${className}`} {...rest}>
      {white ? (
        <BrandLogo src={imgL1LogoWhite} alt="LMDC Logo" />
      ) : (
        <BrandLogo src={imgL1Logo} alt="LMDC Logo" />
      )}
    </Link>
  );
};

export default Logo;
