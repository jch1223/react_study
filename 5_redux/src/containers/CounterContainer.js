import React, { Component } from 'react';
import Counter from '../components/Counter';
import { increment, decrement } from '../store/modules/counter';
import { connect } from 'react-redux';

class CounterContainer extends Component {
  render() {
    const { number, color, increment, decrement } = this.props;
    return (
      <Counter number={number} color={color} onIncrement={increment} onDecrement={decrement} />
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { number: state.counter.number, color: state.counter.color };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
