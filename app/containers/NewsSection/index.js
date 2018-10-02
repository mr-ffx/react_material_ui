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
        <NewsDescription
          hashtag={texts[0].hashtag}
          title={texts[0].title}
          text={texts[0].text}
        />
      </Grid>
      <Grid item xs={3}>
        <NewsDescription
          hashtag={texts[1].hashtag}
          title={texts[1].title}
          text={texts[1].text}
        />
      </Grid>
      <Grid item xs={3}>
        <NewsDescription
          hashtag={texts[2].hashtag}
          title={texts[2].title}
          text={texts[2].text}
        />
      </Grid>
      <Grid item xs={3}>
        <NewsDescription
          hashtag={texts[3].hashtag}
          title={texts[3].title}
          text={texts[3].text}
        />
      </Grid>
    </Grid>
  );
}

export default NewsSection;
