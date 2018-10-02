import React from 'react';
import PropTypes from 'prop-types';
import StyledHeadline from './StyledHeadline';

/* eslint-disable react/prefer-stateless-function */
function Headline(props) {
  const { color, text } = props;
  return <StyledHeadline color={color}>{text}</StyledHeadline>;
}

Headline.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

Headline.defaultProps = {
  color: '#333',
  text: '',
};

export default Headline;
