import React, { Fragment } from 'react';
import { aboutMeContentArray } from './TextContent';
import Grid from '@material-ui/core/Grid';
import Panel from '../../components/Panel/Panel';
import { useStyles } from './AboutStyles';

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainDivStyle}>
      <Grid
        container
        className={classes.mainGridContainerStyle}
        direction='column'
        justify='center'
        alignItems='center'
      >
        <Grid container item justify='space-between' alignItems='center'>
          <Grid item style={{ width: '50%', padding: '3rem' }}>
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
          <Grid item>
            <img
              alt='Jack and Skylord profile picture'
              src='https://s3.us-east-2.amazonaws.com/portfolio-bucket-3.0-29134u89324809184/about/jack_perry_2+(1).png'
              className={classes.profilePictureStyle}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
