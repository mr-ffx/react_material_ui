import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextButton from 'components/TextButton';
import styles from './styles';

const MyLink = props => <Link to="/" {...props} />;

/* eslint-disable react/prefer-stateless-function */
function Navigation(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <TextButton link={MyLink} text="partner with us" />
      <TextButton link={MyLink} text="about us" />
      <TextButton link={MyLink} text="our network" />
      <TextButton link={MyLink} text="news" />
      <TextButton link={MyLink} text="events" />
      <TextButton link={MyLink} text="careers" />
    </div>
  );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
