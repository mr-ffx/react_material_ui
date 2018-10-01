import React from 'react';
import logo from './logo.png';
import StyledLink from './StyledLink';
/* eslint-disable react/prefer-stateless-function */
function HeaderImage() {
  return (
    <StyledLink href="/">
      <img alt="Red Bull MediaHouse" src={logo} />
    </StyledLink>
  );
}

export default HeaderImage;
