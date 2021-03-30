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
import ToastBar from '../../components/ToastBar/ToastBar';
import expressServer from '../../api/expressServer';
import LoadingBackdrop from '../../components/LoadingBackdrop/LoadingBackdrop';
import { sleep } from '../../misc';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStyles } from './ContactStyles';

const INITIAL_STATE = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const emailRegexp = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [isLoading, setIsLoading] = useState(false);
  const [validationStatus, setValidationStatus] = useState(false);
  const [fields, setField, setFields] = useFormFields(INITIAL_STATE);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    if (fields.name && fields.email && fields.subject && fields.message) {
      if (emailRegexp.test(fields.email)) {
        setValidationStatus(true);
        setOpen(false);
      } else {
        setToastMessage('Invalid Email');
        setType('error');
        setOpen(true);
      }
    } else {
      setValidationStatus(false);
    }
  }, [fields]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const sendObject = {
      name: fields.name,
      email: fields.email,
      subject: fields.subject,
      message: fields.message,
    };

    setIsLoading(true);

    const response = await expressServer.post(
      '/contact/send-email',
      sendObject
    );

    await sleep(1000);

    if (response.status !== 200) {
      setToastMessage('Message send failure, try again');
      setType('error');
      setOpen(true);
    } else {
      setToastMessage('Message sent successfully');
      setType('success');
      setOpen(true);
      setFields(INITIAL_STATE);
    }

    setIsLoading(false);
  };

  return (
    <div className={classes.mainDivStyle}>
      {isLoading ? (
        <LoadingBackdrop />
      ) : (
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
              <form className={classes.formStyle} onSubmit={handleSubmit}>
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
                  style={{ width: matchesSM ? '85%' : '55%' }}
                />
                <Button
                  variant='contained'
                  color='secondary'
                  endIcon={<Icon>send</Icon>}
                  className={classes.buttonStyle}
                  size='large'
                  disabled={!validationStatus}
                  type='submit'
                >
                  Send
                </Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      )}
      <ToastBar
        open={open}
        type={type}
        setOpen={setOpen}
        message={toastMessage}
      />
    </div>
  );
};

export default Contact;
