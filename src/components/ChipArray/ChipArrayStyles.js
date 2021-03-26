import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  mainPaperStyle: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    backgroundColor: 'rgba(93,112,146,0)',
    width: '90%',
  },
  chipStyle: {
    margin: theme.spacing(0.5),
    width: '10rem',
    margin: '1.25rem 1rem',
    opacity: 0.95,
    fontFamily: theme.fonts.avenirMedium,
    fontSize: '.80rem',
  },
}));
