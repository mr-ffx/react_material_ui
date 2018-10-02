import React from 'react';
import { Break, Container, Option } from './Styles';

/* eslint-disable react/prefer-stateless-function */
function LanguageSwitch() {
  return (
    <Container href="/">
      <Option>EN</Option>
      <Break>|</Break>
      <Option>DE</Option>
    </Container>
  );
}

export default LanguageSwitch;
