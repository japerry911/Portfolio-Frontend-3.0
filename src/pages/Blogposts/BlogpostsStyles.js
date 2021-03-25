import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  mainGridContainerStyle: {
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://s3.us-east-2.amazonaws.com/portfolio-bucket-3.0-29134u89324809184/blogposts/steven-estes-F5I2QlP8X9w-unsplash.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '0 100%',
    minHeight: '100vh',
    backgroundAttachment: 'fixed',
  },
  mainDivStyle: {
    flexGrow: 1,
    minHeight: '100vh',
  },
}));
