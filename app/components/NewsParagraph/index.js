import React from 'react';
import PropTypes from 'prop-types';
import StyledP from './StyledP';

/* eslint-disable react/prefer-stateless-function */
function NewsParagraph(props) {
  const { color, overflow, text } = props;
  return (
    <StyledP color={color} overflow={overflow}>
      {text}
    </StyledP>
  );
}

NewsParagraph.propTypes = {
  color: PropTypes.string,
  overflow: PropTypes.string,
  text: PropTypes.string,
};

NewsParagraph.defaultProps = {
  color: '#333',
  overflow: null,
  text: '',
};

export default NewsParagraph;
