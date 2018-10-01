/* eslint-disable react/jsx-boolean-value */
/*
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet';
import H1 from 'components/H1';

const styles = {
  root: {
    width: '100%',
    maxWidth: '1232px',
    marginTop: '3.5em',
    marginBottom: '3.5em',
    paddingRight: '1em',
    paddingLeft: '1em',
    alignSelf: 'center',
  },
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
    backgroundColor: 'lightpink',
  },
  headline: {
    width: '33.75em',
    height: '14.5em',
    padding: '24px 32px',
    border: '1px solid black',
    backgroundColor: 'transparent',
  },
  headlineDesc: {
    width: '21.875em',
    height: '14.5em',
    padding: '24px 32px 34px',
    border: '1px solid black',
    backgroundColor: 'transparent',
  },
  image: {
    height: '11.5em',
    backgroundColor: 'lightblue',
  },
  description: {
    height: '18.375em',
    padding: '24px 20px 24px 24px',
    border: '1px solid black',
  },
};

/* eslint-disable react/prefer-stateless-function */
function HomePage(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <Grid container spacing={0} className={classes.row}>
        <Grid item xs={3}>
          <Paper className={classes.heading} elevation={0} square={true}>
            <H1>News</H1>
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
              Headline
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.headlineDesc} elevation={0} square={true}>
              Text
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={8}>
        <Grid item xs={3}>
          <Paper className={classes.image} elevation={0} square={true} />
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.image} elevation={0} square={true} />
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.image} elevation={0} square={true} />
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.image} elevation={0} square={true} />
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.description} elevation={0} square={true}>
            xs=3
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.description} elevation={0} square={true}>
            xs=3
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.description} elevation={0} square={true}>
            xs=3
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.description} elevation={0} square={true}>
            xs=3
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
