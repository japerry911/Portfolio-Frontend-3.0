import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  mediaStyle: {
    objectFit: 'contain',
  },
  cardStyle: {
    margin: '1rem',
    height: '30rem',
    width: '25%',
  },
  mainContentAreaStyle: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
