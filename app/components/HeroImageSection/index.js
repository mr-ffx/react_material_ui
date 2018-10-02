/* eslint-disable react/jsx-boolean-value */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RedButton from 'components/RedButton';
import HashTag from 'components/HashTag';
import Headline from 'components/Headline';
import NewsParagraph from 'components/NewsParagraph';
import { headline } from 'utils/helper';
import styles from './styles';

/* eslint-disable react/prefer-stateless-function */
function HeroSection(props) {
  const { classes } = props;
  return (
    <Grid container spacing={0} className={classes.hero} alignItems="flex-end">
      <Grid item>
        <Paper className={classes.headline} elevation={0} square={true}>
          <HashTag color="#fff" text="gaming" />
          <Headline text={headline.title} color="#fff" />
        </Paper>
      </Grid>
      <Grid item>
        <Paper className={classes.headlineDesc} elevation={0} square={true}>
          <NewsParagraph text={headline.text} color="#fff" overflow="visible" />
          <RedButton text="read more" />
        </Paper>
      </Grid>
    </Grid>
  );
}

HeroSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeroSection);
