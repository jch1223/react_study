import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as formActions from './store/modules/form';
import * as newsActions from './store/modules/news';
import { bindActionCreators } from 'redux';

class App extends Component {
  handleChange = e => {
    const { value } = e.target;
    this.props.FormActions.changeInput(value);
  };

  handleSubmit = e => {
    e.preventDefault();

    const { FormActions, NewsActions, input } = this.props;

    NewsActions.getNews(input);
    FormActions.changeInput('');
  };

  render() {
    const { input, pending, data, error } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={input} onChange={this.handleChange} />
          <button>입력</button>
        </form>
        {pending && <div>loading...</div>}
        {data && (
          <ul>
            {data.data.articles.map(item => {
              return (
                <li key={item.url}>
                  <h1>{item.titel}</h1>
                  <p>{item.description}</p>
                </li>
              );
            })}
          </ul>
        )}
        {error && <h1>{error}</h1>}
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      input: state.form.input,
      list: state.form.list,
      pending: state.news.pending,
      data: state.news.data,
      error: state.news.error
    };
  },
  dispatch => {
    return {
      FormActions: bindActionCreators(formActions, dispatch),
      NewsActions: bindActionCreators(newsActions, dispatch)
    };
  }
)(App);
