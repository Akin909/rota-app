import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import Main from './components/Main.js'
import Home from './components/Home.js'
import Rota from './components/Rota.js'
import Profile from './components/Profile.js'

var routes = (<Router history={browserHistory}>

  <Route path="/" component={Main}>
    <Route path="Rota" component={Rota}/>
    <Route path="Home" component={Home}/>
    <Route path="Profile" component={Profile}></Route>
  </Route>
</Router>);

ReactDOM.render(routes,
  document.getElementById('root')
);
