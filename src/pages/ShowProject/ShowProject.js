import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import expressServer from '../../api/expressServer';
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
      <h1>WOOHOO - {project.title}</h1>
    </div>
  );
};

export default ShowProject;
