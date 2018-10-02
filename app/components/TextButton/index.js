import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './styles';

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
