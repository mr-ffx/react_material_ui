/* eslint-disable react/jsx-boolean-value */

import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styles from './styles';

/* eslint-disable react/prefer-stateless-function */
function NewsImage(props) {
  const { classes } = props;
  return <Paper className={classes.image} elevation={0} square={true} />;
}

NewsImage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withTheme()(injectSheet(styles)(NewsImage));
