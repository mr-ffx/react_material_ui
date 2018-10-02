/* eslint-disable react/jsx-boolean-value */
/*
 * HomePage
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from 'components/HeroSection';
import NewsSection from 'components/NewsSection';
import HomeWrapper from './HomeWrapper';

/* eslint-disable react/prefer-stateless-function */
function HomePage() {
  return (
    <HomeWrapper>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <HeroSection />
      <NewsSection />
    </HomeWrapper>
  );
}

export default HomePage;
