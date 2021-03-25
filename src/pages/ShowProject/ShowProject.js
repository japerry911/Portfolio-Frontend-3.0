import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import expressServer from '../../api/expressServer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './ShowProjectStyles';

const ShowProject = () => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState({});

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const projectResult = await expressServer.get(`/projects/${params.id}`);

      setProject(projectResult.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const params = useParams();

  return (
    <div>
      <Grid
        container
        className={classes.mainGridContainerStyle}
        justify='center'
        direction='column'
        alignItems='center'
      >
        <Grid item>
          <Typography variant='h1' className={classes.headerFontStyle}>
            {project.title}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShowProject;
