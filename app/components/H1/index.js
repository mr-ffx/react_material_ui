import React from 'react';
import PropTypes from 'prop-types';
import StyledH1 from './StyledH1';

/* eslint-disable react/prefer-stateless-function */
function H1(props) {
  const { text } = props;
  return <StyledH1>{text}</StyledH1>;
}

H1.propTypes = {
  text: PropTypes.string,
};

H1.defaultProps = {
  text: '',
};

export default H1;
