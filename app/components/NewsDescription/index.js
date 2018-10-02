/* eslint-disable react/jsx-boolean-value */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import RedButton from 'components/RedButton';
import HashTag from 'components/HashTag';
import NewsParagraph from 'components/NewsParagraph';
import NewsTitle from 'components/NewsTitle';
import styles from './styles';

/* eslint-disable react/prefer-stateless-function */
function NewsDescription(props) {
  const { classes, title, text, hashtag } = props;
  return (
    <Paper className={classes.description} elevation={0} square={true}>
      <HashTag color="#db0a40" text={hashtag} />
      <NewsTitle text={title} />
      <NewsParagraph text={text} />
      <RedButton text="read more" />
    </Paper>
  );
}

NewsDescription.propTypes = {
  classes: PropTypes.object.isRequired,
  hashtag: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
};

NewsDescription.defaultProps = {
  hashtag: '',
  text: '',
  title: '',
};

export default withStyles(styles)(NewsDescription);
