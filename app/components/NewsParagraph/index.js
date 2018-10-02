import React from 'react';
import PropTypes from 'prop-types';
import StyledP from './StyledP';

/* eslint-disable react/prefer-stateless-function */
function NewsParagraph(props) {
  const { color, text } = props;
  return <StyledP color={color}>{text}</StyledP>;
}

NewsParagraph.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

NewsParagraph.defaultProps = {
  color: '#333',
  text: '',
};

export default NewsParagraph;
