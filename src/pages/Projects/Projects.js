import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './ProjectsStyles';

const Projects = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainDivStyle}>
      <Grid
        container
        className={classes.mainGridContainerStyle}
        justify='center'
      ></Grid>
    </div>
  );
};

export default Projects;
