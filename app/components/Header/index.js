import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import HeaderImage from 'components/HeaderImage';
import Navigation from 'components/Navigation';
import RedButton from 'components/RedButton';

const styles = {
  root: {
    width: '100%',
    height: '4.5em',
    zIndex: '1000',
    boxSizing: 'border-box', // Prevent padding issue with the Modal and fixed positioned AppBar.
  },
  appBar: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsla(0, 0%, 100%, .98)',
    transition: 'all 500ms ease',
    boxShadow: 'none',
  },
  toolBar: {
    display: 'flex',
    width: '100%',
    height: '100%',
    paddingRight: '1em',
    paddingLeft: '1em',
    maxWidth: '1232px',
    justifyContent: 'space-between',
  },
};

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
