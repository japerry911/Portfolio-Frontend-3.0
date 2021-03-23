import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  appBarStyle: {
    boxShadow: 'none',
    flexGrow: 1,
  },
  logoImageStyle: {
    height: '6em',
    paddingTop: '1rem',
  },
  toolbarStyle: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logoButtonContainerStyle: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));
