import React from 'react';
import Routes from './router/Routes';
import theme from './theme/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div style={{ height: '100%' }}>
      <ThemeProvider theme={theme}>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes />
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
