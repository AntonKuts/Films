import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainLayout from './components/main-layout';
import SearchLayout from './components/search-layout';

import Home from './components/home';
import Mvc from './components/mvc';
import Articles from './components/articles';
import Movies from './components/movies';


export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>

      <Route path="/" component={Home}/>

      <Route path="/Mvc">
        <Route component={SearchLayout}>
          <IndexRoute component={Mvc}/>
        </Route>
      </Route>

      <Route path="/Articles">
        <Route component={SearchLayout}>
          <IndexRoute component={Articles}/>
        </Route>
      </Route>


      <Route path="/Movies">
        <Route component={SearchLayout}>
          <IndexRoute component={Movies}/>
        </Route>
      </Route>

      </Route>

  </Router>
  )

  // https://www.googleapis.com/books/v1/volumes?q=Harry&key=AIzaSyBLIp4pinwhaybKrnXhTwqNRgRySwfaPoA
