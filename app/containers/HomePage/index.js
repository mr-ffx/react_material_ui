/* eslint-disable react/jsx-boolean-value */
/*
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet';
import H1 from 'components/H1';
import RedButton from 'components/RedButton';
import HashTag from 'components/HashTag';
import Headline from 'components/Headline';
import NewsParagraph from 'components/NewsParagraph';
import NewsTitle from 'components/NewsTitle';
import { texts, headline } from 'utils/helper';
import heroImg from '../../images/hero_image.jpg';
import first from '../../images/first_news.jpg';
import second from '../../images/sec_news.jpg';
import third from '../../images/third_news.jpg';
import fourth from '../../images/fourth_news.jpg';

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
  image: {
    height: '11.5em',
    backgroundColor: 'lightblue',
  },
  first: {
    backgroundImage: `url(${first})`,
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
  },
  second: {
    backgroundImage: `url(${second})`,
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
  },
  third: {
    backgroundImage: `url(${third})`,
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
  },
  fourth: {
    backgroundImage: `url(${fourth})`,
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
  },
  description: {
    height: '18.375em',
    padding: '24px 20px 24px 24px',
    marginTop: '-10px',
  },
};

const section = 'News';

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
      <Grid container spacing={8}>
        <Grid item xs={3}>
          <Paper
            className={classNames(classes.image, classes.first)}
            elevation={0}
            square={true}
          />
        </Grid>
        <Grid item xs={3}>
          <Paper
            className={classNames(classes.image, classes.second)}
            elevation={0}
            square={true}
          />
        </Grid>
        <Grid item xs={3}>
          <Paper
            className={classNames(classes.image, classes.third)}
            elevation={0}
            square={true}
          />
        </Grid>
        <Grid item xs={3}>
          <Paper
            className={classNames(classes.image, classes.fourth)}
            elevation={0}
            square={true}
          />
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.description} elevation={0} square={true}>
            <HashTag color="#db0a40" text="gaming" />
            <NewsTitle text={texts[0].title} />
            <NewsParagraph text={texts[0].text} />
            <RedButton text="read more" />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.description} elevation={0} square={true}>
            <HashTag color="#db0a40" text="partnership" />
            <NewsTitle text={texts[1].title} />
            <NewsParagraph text={texts[1].text} />
            <RedButton text="read more" />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.description} elevation={0} square={true}>
            <HashTag color="#db0a40" text="partnership" />
            <NewsTitle text={texts[2].title} />
            <NewsParagraph text={texts[2].text} />
            <RedButton text="read more" />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.description} elevation={0} square={true}>
            <HashTag color="#db0a40" text="innovation" />
            <NewsTitle text={texts[3].title} />
            <NewsParagraph text={texts[3].text} />
            <RedButton text="read more" />
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
