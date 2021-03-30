import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  drawerStyle: {
    backgroundColor: theme.palette.secondary.dark,
    width: '50%',
    [theme.breakpoints.down('xs')]: {
      width: '70%',
    },
  },
  drawerItemSelectedStyle: {
    '& .MuiListItemText-root': {
      opacity: 1,
    },
  },
  drawerItemTextStyle: {
    color: '#fff',
    opacity: 0.7,
    fontFamily: theme.fonts.avenirMedium,
    fontSize: '1.5rem',
  },
  toolbarMargin: {
    marginBottom: '2rem',
  },
  drawerIconContainerStyle: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    color: theme.palette.primary.main,
  },
}));
