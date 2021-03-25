import React, { useState, useEffect, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import expressServer from '../../api/expressServer';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { useStyles } from './ProjectsStyles';

const Projects = () => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const projectsResults = await expressServer.get('/projects');

      setProjects(projectsResults.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className={classes.mainDivStyle}>
      <Grid
        container
        className={classes.mainGridContainerStyle}
        justify='center'
      >
        {projects.map((projectObject, index) => (
          <Fragment key={`${projectObject.title}-${index}`}>
            <ProjectCard projectObject={projectObject} />
          </Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
