import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  tabStyle: {
    fontFamily: 'Avenir-Bold',
    color: theme.palette.primary.main,
    width: '20%',
    transition: '350ms ease-in',
    borderRadius: 2,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.secondary.main,
    },
  },
}));
