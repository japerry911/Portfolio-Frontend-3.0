import React from 'react';
import Routes from './router/Routes';
import theme from './theme/theme';
import { ThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <header>
          <h1>HEADER</h1>
        </header>
        <main>
          <Routes />
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
