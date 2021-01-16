import React from "react";
import styled from "styled-components";

// Theme
import { lightTheme } from "../../styles/theme";

const LogoImage = styled.img`
  height: 35px;
`;

const Logo = ({ theme }) => {
  return theme === lightTheme ? (
    <LogoImage src="/images/ccblack.png" />
  ) : (
    <LogoImage src="/images/ccwhite.png" />
  );
};

export default Logo;
