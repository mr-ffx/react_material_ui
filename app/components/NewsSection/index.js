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
import RedButton from 'components/RedButton';
import HashTag from 'components/HashTag';
import NewsParagraph from 'components/NewsParagraph';
import NewsTitle from 'components/NewsTitle';
import { texts } from 'utils/helper';
import first from '../../images/first_news.jpg';
import second from '../../images/sec_news.jpg';
import third from '../../images/third_news.jpg';
import fourth from '../../images/fourth_news.jpg';

const styles = {
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

/* eslint-disable react/prefer-stateless-function */
function NewsSection(props) {
  const { classes } = props;
  return (
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
  );
}

NewsSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsSection);
