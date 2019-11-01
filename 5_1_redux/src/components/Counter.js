import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  render() {
    const { number, color, onIncrement, onDecrement } = this.props;

    return (
      <div className='Counter'>
        <h1 style={{ color: color }}>{number}</h1>
        <div className='btn-wrapper'>
          <button onClick={onIncrement}>+</button>
          <button onClick={onDecrement}>-</button>
        </div>
      </div>
    );
  }
}

export default Counter;
