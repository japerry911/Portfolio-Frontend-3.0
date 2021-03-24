import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  panelDetailsStyle: {
    minHeight: 150,
  },
  accordionStyle: {
    backgroundColor: theme.palette.secondary.dark,
  },
  titleTypographyStyle: {
    color: theme.palette.primary.main,
    fontFamily: theme.fonts.avenirBold,
  },
  contentTypographyStyle: {
    color: theme.palette.primary.main,
    fontFamily: theme.fonts.avenirMedium,
  },
}));
