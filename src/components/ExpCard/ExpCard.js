import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles } from './ExpCardStyles';

const ExpCard = ({ imageUrl, expName, expDescription }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Card className={classes.cardStyle}>
        <CardContent className={classes.mainContentAreaStyle}>
          <CardMedia
            component='img'
            image={imageUrl}
            title={expName}
            className={classes.mediaStyle}
            height='50%'
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component='h2'
              className={classes.fontStyle}
            >
              {expName}
            </Typography>
            <Typography
              variant='h5'
              component='p'
              className={classes.fontStyle}
            >
              {expDescription}
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default ExpCard;
