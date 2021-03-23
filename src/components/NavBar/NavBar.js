import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavBarTabs } from '../NavBarTabs/NavBarTabs';
import { useStyles } from './NavBarStyles';

const NavBar = ({ value, setValue }) => {
  const classes = useStyles();

  const handleTabChange = (_, newValue) => setValue(newValue);

  return (
    <div>
      <AppBar
        position='static'
        position='absolute'
        color='transparent'
        className={classes.appBarStyle}
      >
        <Toolbar>
          <img
            alt='Jack"s logo'
            className={classes.logoImageStyle}
            src='https://s3.us-east-2.amazonaws.com/portfolio-bucket-3.0-29134u89324809184/Logos/white_logo_transparent_background.png'
          />
          <NavBarTabs value={value} handleTabChange={handleTabChange} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
