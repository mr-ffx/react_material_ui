/* eslint-disable react/jsx-boolean-value */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { texts } from 'utils/helper';
import NewsImage from 'components/NewsImage';
import NewsDescription from 'components/NewsDescription';
import first from '../../images/first_news.jpg';
import second from '../../images/sec_news.jpg';
import third from '../../images/third_news.jpg';
import fourth from '../../images/fourth_news.jpg';

/* eslint-disable react/prefer-stateless-function */
function NewsSection() {
  return (
    <Grid container spacing={8}>
      <Grid item xs={3}>
        <NewsImage img={first} />
      </Grid>
      <Grid item xs={3}>
        <NewsImage img={second} />
      </Grid>
      <Grid item xs={3}>
        <NewsImage img={third} />
      </Grid>
      <Grid item xs={3}>
        <NewsImage img={fourth} />
      </Grid>
      <Grid item xs={3}>
        <NewsDescription news={texts[0]} />
      </Grid>
      <Grid item xs={3}>
        <NewsDescription news={texts[1]} />
      </Grid>
      <Grid item xs={3}>
        <NewsDescription news={texts[2]} />
      </Grid>
      <Grid item xs={3}>
        <NewsDescription news={texts[3]} />
      </Grid>
    </Grid>
  );
}

export default NewsSection;
