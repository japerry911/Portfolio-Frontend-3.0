import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import useTheme from '@material-ui/core/styles/useTheme';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { useFormFields } from '../../hooks/customHooks';
import { useStyles } from './ContactStyles';

const INITIAL_STATE = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const emailRegexp = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(false);
  const [validationStatus, setValidationStatus] = useState(false);
  const [fields, setField, setFields] = useFormFields(INITIAL_STATE);

  useEffect(() => {
    if (fields.name && fields.email && fields.subject && fields.message) {
      if (emailRegexp.test(fields.email)) {
        setValidationStatus(true);
      } else {
        // snackbar
      }
    } else {
      setValidationStatus(false);
    }
  }, [fields]);

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
                id='name'
                onChange={setField}
                value={fields.name}
              />
              <TextField
                label='Email'
                className={classes.textFieldStyle}
                required
                id='email'
                onChange={setField}
                value={fields.email}
              />
              <TextField
                label='Subject'
                className={classes.textFieldStyle}
                required
                id='subject'
                onChange={setField}
                value={fields.subject}
              />
              <TextField
                label='Message'
                className={classes.textFieldStyle}
                required
                variant='filled'
                multiline
                rows={4}
                id='message'
                onChange={setField}
                value={fields.message}
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
              disabled={!validationStatus}
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
