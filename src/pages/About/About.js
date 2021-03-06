import React, { Fragment } from 'react';
import { aboutMeContentArray, skillSetArray } from './TextContent';
import Grid from '@material-ui/core/Grid';
import Panel from '../../components/Panel/Panel';
import ExpCard from '../../components/ExpCard/ExpCard';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import { useStyles } from './AboutStyles';

const About = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className={classes.mainDivStyle}>
      <Grid
        container
        className={classes.mainGridContainerStyle}
        direction='column'
        justify='center'
        alignItems='center'
      >
        <Grid
          container
          item
          justify='space-between'
          alignItems='center'
          className={classes.aboutGridContainerStyle}
          direction={matchesMD ? 'column-reverse' : 'row'}
        >
          <Grid item className={classes.panelGridStyle}>
            <Fragment>
              {aboutMeContentArray.map((contentObject, index) => (
                <Panel
                  key={`${contentObject.name}-${index}`}
                  title={contentObject.name}
                  content={contentObject.content}
                />
              ))}
            </Fragment>
          </Grid>
          <Grid item align='center' style={{ width: '50%' }}>
            <img
              alt='Jack and Skylord profile'
              src='https://s3.us-east-2.amazonaws.com/portfolio-bucket-3.0-29134u89324809184/about/jack_perry_2+(1).png'
              className={classes.profilePictureStyle}
            />
          </Grid>
        </Grid>
        <Grid item style={{ marginTop: '10rem' }}>
          <Typography
            variant={matchesMD ? 'h2' : 'h1'}
            className={classes.h1Style}
          >
            EXPERIENCE
          </Typography>
        </Grid>
        <Grid
          container
          item
          justify='space-evenly'
          style={{ marginTop: '5rem' }}
        >
          {skillSetArray.map((skillSetObject, index) => (
            <ExpCard
              key={`${skillSetObject.name}-${index}`}
              expName={skillSetObject.name}
              expDescription={skillSetObject.description}
              imageUrl={skillSetObject.imageUrl}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
