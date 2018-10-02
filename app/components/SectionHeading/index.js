/* eslint-disable react/jsx-boolean-value */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import H1 from 'components/H1';
import styles from './styles';

const section = 'News';

/* eslint-disable react/prefer-stateless-function */
function SectionHeading(props) {
  const { classes } = props;
  return (
    <Grid item xs={3}>
      <Paper className={classes.heading} elevation={0} square={true}>
        <H1 text={section} />
      </Paper>
    </Grid>
  );
}

SectionHeading.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SectionHeading);
