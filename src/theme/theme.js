import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EDF2EF',
      light: '#bdc1bf',
    },
    secondary: {
      main: '#86A1D1',
      dark: '#5d7092',
    },
  },
  colors: {
    moderateBlue: '#3A62C6',
    lightPurple: '#786E9A',
    darkBlue: '#31416A',
  },
  fonts: {
    avenirItalicize: 'Avenir-Italicize',
    avenirBold: 'Avenir-Bold',
    avenirMedium: 'Avenir-Medium',
    avenir: 'Avenir',
  },
});

theme = responsiveFontSizes(theme);

export default theme;
