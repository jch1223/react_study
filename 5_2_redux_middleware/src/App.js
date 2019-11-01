import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as formActions from './store/modules/form';
import { bindActionCreators } from 'redux';

class App extends Component {
  handleChange = e => {
    const { value } = e.target;
    this.props.FormActions.changeInput(value);
  };

  handleSubmit = e => {
    e.preventDefault();

    const { FormActions, input } = this.props;

    FormActions.insertAsync(input);
    FormActions.changeInput('');
  };

  render() {
    const { input, list } = this.props;

    return (
      <div>
        <form action=''>
          <input value={input} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>입력</button>
        </form>
        {list.map(item => {
          return <div key={item.id}>{item.text}</div>;
        })}
      </div>
    );
  }
}

export default connect(
  ({ form: { input, list } }) => ({
    input,
    list
  }),
  dispatch => {
    return {
      FormActions: bindActionCreators(formActions, dispatch)
    };
  }
)(App);
