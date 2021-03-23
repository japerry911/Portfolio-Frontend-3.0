import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import About from '../pages/About';
import Blogposts from '../pages/Blogposts';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Projects from '../pages/Projects';

export default () => {
  return (
    <Fragment>
      <ScrollToTop />
      <Route exact path='/' Component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/blogposts' component={Blogposts} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/projects' component={Projects} />
    </Fragment>
  );
};
