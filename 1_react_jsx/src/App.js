import React, { Component } from 'react';

class App extends Component {
  id = 1;
  usernameInput = null;

  state = {
    username: '',
    job: '',
    list: []
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleInsert = e => {
    e.preventDefault();
    const { username, job, list } = this.state;
    this.setState({
      list: list.concat({
        username: username,
        job: job,
        id: this.id
      }),
      username: '',
      job: ''
    });
    this.id++;

    if (!this.usernameInput) return;
    this.usernameInput.focus();
  };

  handleRemove = id => {
    const { list } = this.state;
    this.setState({
      list: list.filter(item => {
        return item.id !== id;
      })
    });
  };

  setRefInput = ele => {
    console.log('ref', ele);
    this.usernameInput = ele;
  };
  render() {
    const { username, job, list } = this.state;
    return (
      <div>
        <form onSubmit={this.handleInsert}>
          <input
            name='username'
            value={this.state.username}
            onChange={this.handleInput}
            ref={this.setRefInput}
          />
          <input name='job' value={this.state.job} onChange={this.handleInput} />
          <button onClick={this.handleInsert}>추가</button>
        </form>
        <p>
          {username} 의 직업은 {job}입니다.
        </p>
        <ul>
          {list.map(item => {
            return (
              <li key={item.id}>
                {item.username} - {item.job}
                <button onClick={() => this.handleRemove(item.id)}>삭제</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
