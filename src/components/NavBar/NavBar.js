import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NavBarTabs from '../NavBarTabs/NavBarTabs';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useStyles } from './NavBarStyles';

const NavBar = ({ value }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar
        position='absolute'
        color='transparent'
        className={classes.appBarStyle}
      >
        <Toolbar className={classes.toolbarStyle}>
          <Button
            disableRipple
            component={Link}
            to='/'
            className={classes.logoButtonContainerStyle}
          >
            <img
              alt='Jack"s logo'
              className={classes.logoImageStyle}
              src='https://s3.us-east-2.amazonaws.com/portfolio-bucket-3.0-29134u89324809184/Logos/white_logo_transparent_background.png'
            />
          </Button>
          <NavBarTabs value={value} />
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default NavBar;
