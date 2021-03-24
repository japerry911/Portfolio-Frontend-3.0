import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles } from './ExpCardStyles';

const ExpCard = ({ imageUrl, expName, expDescription, widePhoto }) => {
  const classes = useStyles({ widePhoto });

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
            <Typography gutterBottom variant='h5' component='h2'>
              {expName}
            </Typography>
            <Typography variant='body2' component='p'>
              {expDescription}
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default ExpCard;
