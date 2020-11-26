/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Splash from './Pages/Splash';
import Search from './Pages/Search';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Layout from './Layout/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/search/:category" render={props => <Search {...props} />} />
        <Route path="/about" render={props => <About {...props} />} />
        <Route path="/404" render={props => <NotFound {...props} />} />
        <Route exact path="/" render={props => <Splash {...props} />} />
        <Redirect exact from="/search" to="/" />
        <Redirect to="/404" />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
