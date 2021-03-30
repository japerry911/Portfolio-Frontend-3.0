import React, { useState, useEffect, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import expressServer from '../../api/expressServer';
import BlogpostCard from '../../components/BlogpostCard/BlogpostCard';
import { useStyles } from './BlogpostsStyles';

const Blogposts = () => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(true);
  const [blogposts, setBlogposts] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const blogpostsResult = await expressServer.get('/blogposts');

      setBlogposts(blogpostsResult.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className={classes.mainDivStyle}>
      {isLoading ? null : (
        <Grid
          container
          className={classes.mainGridContainerStyle}
          justify='center'
        >
          {blogposts.map((blogpostObject, index) => (
            <Fragment key={`${blogpostObject.title}-${index}`}>
              <BlogpostCard blogpostObject={blogpostObject} />
            </Fragment>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Blogposts;
