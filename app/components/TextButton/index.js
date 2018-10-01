import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  button: {
    backgroundColor: 'transparent',
    marginLeft: '0.75em',
    marginRight: '0.75em',
    padding: '1.8125em 0',
    lineHeight: '0.875em',
    opacity: '0.74',
    transition: 'all 250ms ease',
    fontWeight: '700',
    '&:hover': {
      backgroundColor: 'transparent',
      opacity: '1',
    },
    '&:active': {
      color: '#db0a40',
      opacity: '1',
    },
    '&:focus': {
      color: '#db0a40',
      opacity: '1',
    },
  },
};

const defaultLink = props => <Link to="/" {...props} />;

/* eslint-disable react/prefer-stateless-function */
function TextButton(props) {
  const { classes, link, text } = props;
  return (
    <Button
      component={link}
      color="default"
      disableRipple
      className={classes.button}
    >
      {text}
    </Button>
  );
}

TextButton.propTypes = {
  classes: PropTypes.object.isRequired,
  link: PropTypes.any,
  text: PropTypes.string,
};

TextButton.defaultProps = {
  link: defaultLink,
  text: '',
};

export default withStyles(styles)(TextButton);
