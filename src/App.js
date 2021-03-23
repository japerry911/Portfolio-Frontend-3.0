import React, { useState } from 'react';
import Routes from './router/Routes';
import theme from './theme/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  const [value, setValue] = useState(0);

  return (
    <div style={{ height: '100%' }}>
      <ThemeProvider theme={theme}>
        <main>
          <NavBar value={value} setValue={setValue} />
          <Routes />
        </main>
      </ThemeProvider>
    </div>
  );
};

export default App;
