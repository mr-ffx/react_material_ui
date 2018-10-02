import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import HeaderImage from 'components/HeaderImage';
import Navigation from 'components/Navigation';
import RedButton from 'components/RedButton';
import styles from './styles';

const MyLink = props => <Link to="/#contact" {...props} />;

/* eslint-disable react/prefer-stateless-function */
function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <HeaderImage />
          <Navigation />
          <RedButton link={MyLink} text="contact us" />
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
