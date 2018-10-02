import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './StyledTitle';

/* eslint-disable react/prefer-stateless-function */
function NewsTitle(props) {
  const { text } = props;
  return <StyledTitle>{text}</StyledTitle>;
}

NewsTitle.propTypes = {
  text: PropTypes.string,
};

NewsTitle.defaultProps = {
  text: '',
};

export default NewsTitle;
