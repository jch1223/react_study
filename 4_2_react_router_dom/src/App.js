import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Main from './Main';
import Sub from './Sub';
import Users from './Users';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink activeStyle={{ color: 'blue' }} exact to='/'>
            main
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: 'blue' }} to='/sub'>
            sub
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: 'blue' }} to='/users'>
            userlist
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path='/' component={Main}></Route>
        <Route path='/sub' component={Sub}></Route>
        <Route path='/users' component={Users}></Route>
        <Route render={() => <div>404 not found</div>}></Route>
      </Switch>
    </div>
  );
};

export default App;
