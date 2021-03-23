import React from 'react';
import Routes from './router/Routes';
import theme from './theme/theme';
import { ThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    <div style={{ height: '100%' }}>
      <ThemeProvider theme={theme}>
        <header></header>
        <main>
          <Routes />
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
