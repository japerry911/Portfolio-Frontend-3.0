import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import expressServer from '../../api/expressServer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ChipArray from '../../components/ChipArray/ChipArray';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import useTheme from '@material-ui/core/styles/useTheme';
import LoadingBackdrop from '../../components/LoadingBackdrop/LoadingBackdrop';
import { sleep } from '../../misc';
import { useStyles } from './ShowProjectStyles';

const ShowProject = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState({});
  const [featuresArray, setFeaturesArray] = useState([]);

  const params = useParams();

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const projectResult = await expressServer.get(`/projects/${params.id}`);

      await sleep(1500);

      const tmpFeaturesArray = projectResult.data.features.map((feature) => ({
        text: feature,
      }));

      setFeaturesArray(tmpFeaturesArray);
      setProject(projectResult.data);
      setIsLoading(false);
    };

    fetchData();
  }, [params.id]);

  return (
    <div className={classes.mainDivStyle}>
      {isLoading ? (
        <LoadingBackdrop />
      ) : (
        <Paper elevation={3} className={classes.mainPaperStyle}>
          <Grid
            container
            style={{ minHeight: '40rem' }}
            direction='column'
            justify='space-between'
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
              <img
                src={project.imgUrl}
                className={classes.imgStyle}
                alt={`${project.title} logo`}
              />
            </Grid>
            <Grid item align='center'>
              <ChipArray chips={featuresArray} />
            </Grid>
            <Divider
              style={{
                margin: '3rem 0',
                height: '2px',
                backgroundColor: theme.palette.primary.main,
                width: '80%',
              }}
            />
            <Grid container item justify='space-evenly'>
              {project.appLink === undefined ? null : (
                <Grid item>
                  <IconButton
                    component='a'
                    href={project.appLink}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <LinkIcon style={{ fontSize: '5rem' }} color='primary' />
                  </IconButton>
                </Grid>
              )}
              {project.youtubeLink === undefined ? null : (
                <Grid item>
                  <IconButton
                    component='a'
                    href={project.youtubeLink}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <YouTubeIcon style={{ fontSize: '5rem' }} color='primary' />
                  </IconButton>
                </Grid>
              )}
              {project.githubLink === undefined ? null : (
                <Grid item>
                  <IconButton
                    component='a'
                    href={project.githubLink}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <GitHubIcon style={{ fontSize: '5rem' }} color='primary' />
                  </IconButton>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Paper>
      )}
    </div>
  );
};

export default ShowProject;
