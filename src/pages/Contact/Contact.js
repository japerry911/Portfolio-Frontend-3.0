import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './ContactStyles';

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainDivStyle}>
      <Grid container className={classes.mainGridContainerStyle}></Grid>
    </div>
  );
};

export default Contact;
