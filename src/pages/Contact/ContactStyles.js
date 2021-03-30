import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  mainDivStyle: {
    flexGrow: 1,
    minHeight: '100vh',
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://s3.us-east-2.amazonaws.com/portfolio-bucket-3.0-29134u89324809184/contact/benjamin-voros-phIFdC6lA4E-unsplash.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '0 100%',
    backgroundAttachment: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainPaperStyle: {
    padding: '3rem 0',
    margin: '10rem 0',
    width: '65rem',
    minHeight: '40rem',
    backgroundColor: 'rgba(93,112,146,.50)',
  },
  formStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '35rem',
  },
  textFieldStyle: {
    width: '30%',
    '& .MuiInput-underline:before': {
      borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
    '& .MuiFormLabel-root': {
      color: theme.palette.primary.main,
      fontFamily: theme.fonts.avenirMedium,
    },
    '& .MuiInputBase-input': {
      color: theme.palette.primary.main,
      fontFamily: theme.fonts.avenirMedium,
    },
    '& .MuiFilledInput-underline:before': {
      borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
    '& .MuiInput-underline:hover:before': {
      borderBottom: `3px solid ${theme.palette.secondary.main}`,
    },
    '& .MuiFilledInput-underline:hover:before': {
      borderBottom: `3px solid ${theme.palette.secondary.main}`,
    },
  },
  titleStyle: {
    color: theme.palette.primary.main,
    fontFamily: theme.fonts.avenirBold,
  },
  buttonStyle: {
    padding: '1rem 5rem',
  },
}));
