import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './ContactStyles';

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainDivStyle}>
      <Grid
        container
        style={{ minHeight: '40rem' }}
        direction='column'
        alignItems='center'
      >
        <Paper className={classes.mainPaperStyle}>
          <form className={classes.formStyle}>
            <TextField
              label='Name'
              className={classes.textFieldStyle}
              required
            />
            <TextField
              label='Email'
              className={classes.textFieldStyle}
              required
            />
            <TextField
              label='Subject'
              className={classes.textFieldStyle}
              required
            />
            <TextField
              label='Message'
              className={classes.textFieldStyle}
              required
              variant='filled'
              color='primary'
            />
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default Contact;
