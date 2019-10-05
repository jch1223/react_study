import React from 'react';
import User from './User';
import { Link, Route } from 'react-router-dom';

const Users = () => {
  return (
    <div>
      <h1> 사용자 리스트 </h1>
      <ul>
        <li>
          <Link to='/users/chul'>chul</Link>
        </li>
        <li>
          <Link to='/users/james'>james</Link>
        </li>
      </ul>
      <Route path='/users' render={() => <div>유저를 선택해주세요</div>}></Route>
      <Route path='/users/:username' component={User}></Route>
    </div>
  );
};

export default Users;
