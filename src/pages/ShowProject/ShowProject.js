import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import expressServer from '../../api/expressServer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
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
    <div className={classes.mainDivStyle}>
      {isLoading ? (
        <h1>LOADING</h1>
      ) : (
        <Paper elevation={3} className={classes.mainPaperStyle}>
          <Grid
            container
            item
            justify='center'
            alignItems='center'
            direction='column'
            style={{ height: '100%' }}
          >
            <Grid item>
              <Typography variant='h3' className={classes.titleStyle}>
                {project.title}
              </Typography>
            </Grid>
            <Grid item align='center'>
              <img src={project.imgUrl} className={classes.imgStyle} />
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Paper>
      )}
    </div>
  );
};

export default ShowProject;
