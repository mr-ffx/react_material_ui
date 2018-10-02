import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

/* eslint-disable react/prefer-stateless-function */
function HashTag(props) {
  const { color, text } = props;
  return <Wrapper color={color}>#{text}</Wrapper>;
}

HashTag.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

HashTag.defaultProps = {
  color: '#333',
  text: '',
};

export default HashTag;
