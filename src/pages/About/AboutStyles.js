import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  mainGridContainerStyle: {
    minHeight: '100vh',
  },
  mainDivStyle: {
    flexGrow: 1,
    minHeight: '100vh',
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://s3.us-east-2.amazonaws.com/portfolio-bucket-3.0-29134u89324809184/about/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '0 100%',
    minHeight: '100vh',
    backgroundAttachment: 'fixed',
  },
  aboutGridContainerStyle: {
    minHeight: '60rem',
    paddingTop: '10rem',
  },
  profilePictureStyle: {
    height: 'auto',
    width: '20rem',
    paddingRight: '10rem',
    opacity: 0.75,
  },
  h1Style: {
    fontFamily: theme.fonts.avenirBold,
    color: theme.palette.primary.main,
  },
}));
