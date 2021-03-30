import React, { Fragment } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from './LoadingBackdropStyles';

const LoadingBackdrop = ({ backgroundColor }) => {
  const classes = useStyles({ backgroundColor });

  return (
    <Fragment>
      <Backdrop className={classes.backdrop} open={true}>
        <CircularProgress color='inherit' />
      </Backdrop>
    </Fragment>
  );
};

export default LoadingBackdrop;
