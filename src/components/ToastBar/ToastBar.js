import React, { Fragment } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => <MuiAlert elevation={6} variant='filled' {...props} />;

const ToastBar = ({ open, setOpen, type, message }) => {
  const handleClick = (_, reason) => {
    if (reason === 'clickaway') {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <Fragment>
      <Snackbar open={open} onClose={handleClick}>
        <Alert severity={type} onClose={handleClick}>
          {message}
        </Alert>
      </Snackbar>
    </Fragment>
  );
};

export default ToastBar;
