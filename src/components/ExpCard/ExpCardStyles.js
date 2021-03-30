import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  mediaStyle: {
    objectFit: 'contain',
  },
  cardStyle: {
    margin: '1rem',
    height: '30rem',
    width: '25%',
    opacity: 0.75,
    transition: '350ms ease-in',
    '&:hover': {
      opacity: 1,
    },
    [theme.breakpoints.down('md')]: {
      width: '65%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  mainContentAreaStyle: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontStyle: {
    fontFamily: theme.fonts.avenir,
  },
}));
