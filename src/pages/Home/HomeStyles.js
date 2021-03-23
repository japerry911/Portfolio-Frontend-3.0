import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  mainDivStyle: {
    flexGrow: 1,
    minHeight: '100vh',
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://s3.us-east-2.amazonaws.com/portfolio-bucket-3.0-29134u89324809184/home/ostap-senyuk-ytHzhPZb3VE-unsplash.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '0 100%',
  },
  mainContainerStyle: {
    minHeight: '100vh',
  },
  paperStyle: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    padding: '1rem',
    textAlign: 'center',
  },
  introTextStyle: {
    fontSize: '2rem',
    fontFamily: 'Avenir-Bold',
    color: theme.palette.primary.main,
  },
  spanStyle: {
    color: theme.palette.secondary.main,
  },
  btnGridItemStyle: {
    paddingTop: '3rem',
  },
  buttonStyle: {
    fontFamily: 'Avenir-Bold',
    backgroundColor: 'rgba(255,255,255,0)',
    padding: '2.15rem 5rem',
    fontSize: '1.25rem',
    color: theme.palette.primary.main,
    transition: '350ms ease-in',
    border: '.05rem solid black',
    borderRadius: 10,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.secondary.main,
    },
  },
}));
