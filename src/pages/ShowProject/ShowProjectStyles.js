import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  mainDivStyle: {
    flexGrow: 1,
    minHeight: '100vh',
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://s3.us-east-2.amazonaws.com/portfolio-bucket-3.0-29134u89324809184/projects/jordan-mcqueen-DgEA7saT8FQ-unsplash.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '0 100%',
    backgroundAttachment: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainPaperStyle: {
    width: '65rem',
    height: '45rem',
    backgroundColor: theme.palette.secondary.dark,
    opacity: 0.9,
  },
  titleStyle: {
    fontFamily: theme.fonts.avenirBold,
    color: theme.palette.primary.main,
  },
  imgStyle: {
    objectFit: 'contained',
    width: '50%',
  },
}));
