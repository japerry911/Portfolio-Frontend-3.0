import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  cardActionAreaStyle: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  mediaStyle: {
    objectFit: 'contain',
    paddingTop: '3rem',
  },
  cardStyle: {
    margin: '3rem',
    height: '25rem',
    width: '25%',
    opacity: 0.75,
    transition: '350ms ease-in',
    '&:hover': {
      opacity: 1,
    },
  },
  fontStyle: {
    fontFamily: theme.fonts.avenir,
    textAlign: 'center',
  },
}));
