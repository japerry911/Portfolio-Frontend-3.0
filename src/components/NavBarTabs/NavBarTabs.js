import React, { Fragment } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { routesArray } from '../../router/RouteMisc';
import { Link } from 'react-router-dom';

export const NavBarTabs = ({ value, handleTabChange }) => (
  <Fragment>
    <Tabs value={value} onChange={handleTabChange}>
      {routesArray.map((routeObject, index) => (
        <Tab
          key={`${routeObject.name}-${index}`}
          component={Link}
          to={routeObject.link}
          label={routeObject.name}
        />
      ))}
    </Tabs>
  </Fragment>
);
