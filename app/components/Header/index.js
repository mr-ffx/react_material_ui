import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import HeaderImage from 'components/HeaderImage';
import Navigation from 'components/Navigation';

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
  contact: {
    backgroundColor: '#db0a40',
    border: '3px solid #db0a40',
    borderRadius: '0.375em',
    fontWeight: '700',
    flex: '0 0 auto',
    padding: '0.7em 1.2em',
    marginTop: '0.75em',
    marginBottom: '0.75em',
    transition: 'all 250ms ease',
    color: 'hsla(0, 0%, 100%, .96)',
    fontSize: '0.9375em',
    letteSpacing: '0.5px',
    maxWidth: '100%',
    boxShadow: 'none',
    '&:hover': {
      color: '#333',
      boxShadow: 'none',
      border: '3px solid #D2D2D2',
      backgroundColor: '#D2D2D2',
    },
    '&:focus': {
      color: '#333',
      boxShadow: 'none',
      border: '3px solid #D2D2D2',
      backgroundColor: '#D2D2D2',
    },
    '&:active': {
      color: '#333',
      boxShadow: 'none',
      border: '3px solid #D2D2D2',
      backgroundColor: '#D2D2D2',
    },
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
          <Button
            component={MyLink}
            variant="contained"
            disableRipple
            className={classes.contact}
          >
            contact us
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
