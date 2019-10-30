import React, { Component } from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import ColorList from './components/ColorList';
import ColorSquareContainer from './containers/ColorSquareContainer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <CounterContainer />
        <ColorSquareContainer />
        <ColorList />
      </div>
    );
  }
}

export default App;
