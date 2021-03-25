import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './BlogpostCardStyles';

const BlogpostCard = ({ blogpostObject }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Card className={classes.cardStyle}>
        <CardActionArea
          component='a'
          href={blogpostObject.link}
          rel='noopener noreferrer'
          target='_blank'
          className={classes.cardActionAreaStyle}
        >
          <CardMedia
            className={classes.mediaStyle}
            component='img'
            alt={`${blogpostObject.title}-Preview-Image`}
            height='50%'
            image={blogpostObject.imgUrl}
            title={blogpostObject.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component='h2'
              className={classes.fontStyle}
            >
              {blogpostObject.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Fragment>
  );
};

export default BlogpostCard;
