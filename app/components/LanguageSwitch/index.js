import React from 'react';
import { Break, Container, Option } from './Styles';

/* eslint-disable react/prefer-stateless-function */
function LanguageSwitch() {
  return (
    <Container href="/">
      <Option color="rgba(0, 0, 0, .75)">EN</Option>
      <Break>|</Break>
      <Option>DE</Option>
    </Container>
  );
}

export default LanguageSwitch;
