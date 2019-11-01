import React, { Component } from 'react';
import Counter from '../components/Counter';
// import { increment, decrement } from '../store/modules/counter';
import * as counterActions from '../store/modules/counter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CounterContainer extends Component {
  render() {
    // const { number, color, increment, decrement } = this.props;
    const { number, color, CounterActions } = this.props;
    return (
      <Counter
        number={number}
        color={color}
        onIncrement={CounterActions.increment}
        onDecrement={CounterActions.decrement}
      />
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { number: state.counter.number, color: state.counter.color };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement())
//   };
// };
// const mapDispatchToProps = {
//   increment,
//   decrement
// };

const mapDispatchToProps = dispatch => {
  return {
    CounterActions: bindActionCreators(counterActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
