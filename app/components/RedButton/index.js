import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  button: {
    alignSelf: 'flex-end',
    backgroundColor: '#db0a40',
    border: '3px solid #db0a40',
    borderRadius: '0.375em',
    fontWeight: '700',
    flex: '0 0 auto',
    padding: '0.7em 1.2em',
    marginTop: '0.75em',
    marginBottom: '0.75em',
    transition: 'all 250ms ease',
    color: 'hsla(0, 0%, 100%, .96)',
    fontSize: '0.9375em',
    letteSpacing: '0.5px',
    maxWidth: '100%',
    boxShadow: 'none',
    '&:hover': {
      color: '#333',
      boxShadow: 'none',
      border: '3px solid #D2D2D2',
      backgroundColor: '#D2D2D2',
    },
    '&:focus': {
      color: '#333',
      boxShadow: 'none',
      border: '3px solid #D2D2D2',
      backgroundColor: '#D2D2D2',
    },
    '&:active': {
      color: '#333',
      boxShadow: 'none',
      border: '3px solid #D2D2D2',
      backgroundColor: '#D2D2D2',
    },
  },
};

const defaultLink = props => <Link to="/" {...props} />;

/* eslint-disable react/prefer-stateless-function */
function RedButton(props) {
  const { classes, link, text } = props;
  return (
    <Button
      component={link}
      color="default"
      disableRipple
      variant="contained"
      className={classes.button}
    >
      {text}
    </Button>
  );
}

RedButton.propTypes = {
  classes: PropTypes.object.isRequired,
  link: PropTypes.any,
  text: PropTypes.string,
};

RedButton.defaultProps = {
  link: defaultLink,
  text: '',
};

export default withStyles(styles)(RedButton);
