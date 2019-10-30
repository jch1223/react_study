import React, { Component } from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import ColorList from './components/ColorList';
import ColorSquare from './components/ColorSquare';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <CounterContainer />
        <ColorSquare />
        <ColorList />
      </div>
    );
  }
}

export default App;
