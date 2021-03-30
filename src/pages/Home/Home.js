import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useStyles } from './HomeStyles';

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainDivStyle}>
      <Grid
        container
        className={classes.mainContainerStyle}
        alignItems='center'
        justify='center'
        direction='column'
      >
        <Grid item align='center' style={{ width: '100%' }}>
          <Paper className={classes.paperStyle}>
            <Typography className={classes.introTextStyle} variant='h4'>
              Greetings<span className={classes.spanStyle}>,</span> I'm Jack
              Perry<span className={classes.spanStyle}>.</span> <br /> I
              <span className={classes.spanStyle}>'</span>m a Full Stack
              Software Engineer
              <span className={classes.spanStyle}>/</span>ETL Automation
              Engineer
            </Typography>
          </Paper>
        </Grid>
        <Grid item className={classes.btnGridItemStyle} align='center'>
          <Button
            className={classes.buttonStyle}
            component={Link}
            to='/projects'
          >
            View Projects
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
