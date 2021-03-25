import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { useStyles } from './ProjectCardStyles';

const ProjectCard = ({ projectObject }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Card className={classes.cardStyle}>
        <CardActionArea
          component={Link}
          to={`/projects/${projectObject._id}`}
          className={classes.cardActionAreaStyle}
        >
          <CardMedia
            className={classes.mediaStyle}
            component='img'
            alt={`${projectObject.title}-Preview-Image`}
            height='50%'
            image={projectObject.imgUrl}
            title={projectObject.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component='h2'
              className={classes.fontStyle}
            >
              {projectObject.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Fragment>
  );
};

export default ProjectCard;
