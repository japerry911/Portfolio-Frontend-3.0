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
    paddingTop: '5rem',
  },
  paperStyle: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    padding: '1rem',
    textAlign: 'center',
    width: '60%',
  },
  introTextStyle: {
    fontFamily: 'Avenir-Bold',
    color: theme.palette.primary.main,
    padding: '4rem 0',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.25rem',
      padding: '2rem 0',
    },
  },
  spanStyle: {
    color: theme.palette.secondary.main,
  },
  btnGridItemStyle: {
    paddingTop: '3rem',
    width: '100%',
  },
  buttonStyle: {
    width: '25%',
    fontFamily: 'Avenir-Bold',
    backgroundColor: 'rgba(255,255,255,0.15)',
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
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
      padding: '1.15rem 2.5rem',
      width: '40%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '45%',
    },
  },
}));
