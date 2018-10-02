/* eslint-disable react/jsx-boolean-value */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import H1 from 'components/H1';
import RedButton from 'components/RedButton';
import HashTag from 'components/HashTag';
import Headline from 'components/Headline';
import NewsParagraph from 'components/NewsParagraph';
import { headline } from 'utils/helper';
import heroImg from '../../images/hero_image.jpg';

const styles = {
  row: {
    marginBottom: '2em',
  },
  heading: {
    width: ' 18.375em',
    height: '23.5em',
    padding: '24px 32px 34px',
    backgroundColor: 'transparent',
  },
  hero: {
    width: '56.125em',
    height: '23.5em',
    backgroundImage: `url(${heroImg})`,
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
  },
  headline: {
    width: '33.75em',
    height: '14.5em',
    padding: '24px 32px',
    backgroundColor: 'transparent',
  },
  headlineDesc: {
    display: 'flex',
    flexDirection: 'column',
    width: '21.875em',
    height: '14.5em',
    padding: '24px 32px 34px',
    backgroundColor: 'transparent',
  },
};

const section = 'News';

/* eslint-disable react/prefer-stateless-function */
function HeroSection(props) {
  const { classes } = props;
  return (
    <Grid container spacing={0} className={classes.row}>
      <Grid item xs={3}>
        <Paper className={classes.heading} elevation={0} square={true}>
          <H1 text={section} />
        </Paper>
      </Grid>
      <Grid
        container
        spacing={0}
        className={classes.hero}
        alignItems="flex-end"
      >
        <Grid item>
          <Paper className={classes.headline} elevation={0} square={true}>
            <HashTag color="#fff" text="gaming" />
            <Headline text={headline.title} color="#fff" />
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.headlineDesc} elevation={0} square={true}>
            <NewsParagraph
              text={headline.text}
              color="#fff"
              overflow="visible"
            />
            <RedButton text="read more" />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

HeroSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeroSection);
