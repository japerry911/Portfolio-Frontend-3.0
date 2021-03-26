import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  mainGridContainerStyle: {
    minHeight: '100vh',
    paddingTop: '5rem',
    backgroundColor: 'transparent',
  },
  mainDivStyle: {
    flexGrow: 1,
    minHeight: '100vh',
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://s3.us-east-2.amazonaws.com/portfolio-bucket-3.0-29134u89324809184/projects/jordan-mcqueen-DgEA7saT8FQ-unsplash.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '0 100%',
    backgroundAttachment: 'fixed',
  },
  mainPaperStyle: {
    width: '65rem',
    height: '45rem',
  },
}));
