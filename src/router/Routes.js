import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import About from '../pages/About/About';
import Blogposts from '../pages/Blogposts/Blogposts';
import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import Projects from '../pages/Projects/Projects';
import ShowProject from '../pages/ShowProject/ShowProject';

const Routes = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/blogposts' component={Blogposts} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/projects/:id' component={ShowProject} />
    </Fragment>
  );
};

export default Routes;
