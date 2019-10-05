import React, { Component } from 'react';
import NewsPage from './pages/NewsPage';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <Route path='/:category?' component={NewsPage}></Route>
      </>
    );
  }
}

export default App;
