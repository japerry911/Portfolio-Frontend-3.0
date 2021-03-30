import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import useTheme from '@material-ui/core/styles/useTheme';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './ContactStyles';

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.mainDivStyle}>
      <Paper className={classes.mainPaperStyle}>
        <Grid
          container
          style={{ minHeight: '40rem' }}
          direction='column'
          alignItems='center'
        >
          <Grid item>
            <Typography
              variant='h3'
              className={classes.titleStyle}
              align='center'
            >
              CONTACT FORM
            </Typography>
          </Grid>
          <Divider
            style={{
              margin: '1rem 0',
              height: '2px',
              backgroundColor: theme.palette.primary.main,
              width: '80%',
            }}
          />
          <Grid item style={{ width: '100%' }}>
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
                multiline
                rows={4}
              />
            </form>
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              color='secondary'
              endIcon={<Icon>send</Icon>}
              className={classes.buttonStyle}
              size='large'
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Contact;
