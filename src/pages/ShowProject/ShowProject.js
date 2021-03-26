import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import expressServer from '../../api/expressServer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ChipArray from '../../components/ChipArray/ChipArray';
import { useStyles } from './ShowProjectStyles';

const ShowProject = () => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState({});
  const [featuresArray, setFeaturesArray] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const projectResult = await expressServer.get(`/projects/${params.id}`);
      console.log(projectResult);
      const tmpFeaturesArray = projectResult.data.features.map((feature) => ({
        text: feature,
      }));

      setFeaturesArray(tmpFeaturesArray);
      console.log(featuresArray);
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
            style={{ minHeight: '40rem' }}
            direction='column'
            justify='space-evenly'
            alignItems='center'
          >
            <Grid item>
              <Typography
                variant='h3'
                className={classes.titleStyle}
                align='center'
              >
                {project.title}
              </Typography>
            </Grid>
            <Grid item align='center'>
              <img src={project.imgUrl} className={classes.imgStyle} />
            </Grid>
            <Grid item align='center'>
              <ChipArray chips={featuresArray} />
            </Grid>
          </Grid>
        </Paper>
      )}
    </div>
  );
};

export default ShowProject;
