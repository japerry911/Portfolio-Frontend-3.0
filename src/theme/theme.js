import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F80D52',
    },
    secondary: {
      main: '#111634',
    },
  },
  colors: {
    moderateGreen: '#5F9574',
    lightGreen: '#BAD9B1',
    lightLightGreen: '#F5EBCE',
  },
});

theme = responsiveFontSizes(theme);

export default theme;
