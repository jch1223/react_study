import React, { Component } from 'react';
import { changeColor } from '../store/modules/counter';
import ColorSquare from '../components/ColorSquare';
import { connect } from 'react-redux';

class ColorSquareContainer extends Component {
  render() {
    const { number, color, changeColor } = this.props;
    return <ColorSquare selected={color} number={number} onSelect={changeColor} />;
  }
}

const mapStateToProps = state => {
  return {
    color: state.counter.color,
    number: state.counter.number
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeColor: color => dispatch(changeColor(color))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorSquareContainer);
