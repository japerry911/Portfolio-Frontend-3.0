import React, { Fragment } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { routesArray } from '../../router/RouteMisc';
import { Link } from 'react-router-dom';
import { useStyles } from './NavBarTabsStyles';

const NavBarTabs = ({ value }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Tabs value={value}>
        {routesArray.map((routeObject, index) => (
          <Tab
            key={`${routeObject.name}-${index}`}
            component={Link}
            to={routeObject.link}
            label={routeObject.name}
            className={classes.tabStyle}
          />
        ))}
      </Tabs>
    </Fragment>
  );
};

export default NavBarTabs;
