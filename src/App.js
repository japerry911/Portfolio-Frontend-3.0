import React, { useState, useEffect } from 'react';
import Routes from './router/Routes';
import theme from './theme/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import NavBar from './components/NavBar/NavBar';
import { useLocation } from 'react-router-dom';
import { routesArray } from './router/RouteMisc';

const findIndex = (path) => {
  const indexObject = routesArray.filter(
    (routeObject) => routeObject.link === path
  );

  if (indexObject.length > 0) {
    return indexObject[0].index;
  } else {
    return 0;
  }
};

const App = () => {
  const [value, setValue] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setValue(findIndex(location.pathname));
  }, [location]);

  return (
    <div style={{ height: '100%' }}>
      <ThemeProvider theme={theme}>
        <main>
          <NavBar value={value} />
          <Routes />
        </main>
      </ThemeProvider>
    </div>
  );
};

export default App;
