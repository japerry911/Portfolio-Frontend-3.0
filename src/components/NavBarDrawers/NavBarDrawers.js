import React, { Fragment, useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { routesArray } from '../../router/RouteMisc';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './NavBarDrawersStyles';

const NavBarDrawers = ({ value }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Drawer
        open={open}
        classes={{ paper: classes.drawerStyle }}
        onClose={() => setOpen(false)}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routesArray.map((routeObject) => (
            <ListItem
              key={`${routeObject.name}-${routeObject.index}`}
              divider
              button
              component={Link}
              to={routeObject.link}
              classes={{ selected: classes.drawerItemSelectedStyle }}
              onClick={() => {
                setOpen(false);
              }}
              selected={value === routeObject.index}
            >
              <ListItemText
                disableTypography
                className={classes.drawerItemTextStyle}
              >
                {routeObject.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpen(!open)}
        className={classes.drawerIconContainerStyle}
      >
        <MenuIcon fontSize='large' />
      </IconButton>
    </Fragment>
  );
};

export default NavBarDrawers;
