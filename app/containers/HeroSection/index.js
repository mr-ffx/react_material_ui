/* eslint-disable react/jsx-boolean-value */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SectionHeading from 'components/SectionHeading';
import HeroImageSection from 'components/HeroImageSection';
import styles from './styles';

/* eslint-disable react/prefer-stateless-function */
function HeroSection(props) {
  const { classes } = props;
  return (
    <Grid container spacing={0} className={classes.row}>
      <SectionHeading />
      <HeroImageSection />
    </Grid>
  );
}

HeroSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeroSection);
