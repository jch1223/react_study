import React, { Component } from 'react';
import './ColorList.css';
import ListItem from '../components/ListItem';

class ColorList extends Component {
  handleChane = e => {
    const { value } = e.target;
    const { ColorListActions } = this.props;
    ColorListActions.changeInput(value);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { ColorListActions, CounterActions, input } = this.props;
    ColorListActions.insert(input);
    CounterActions.changeColor(input);
    ColorListActions.changeInput('');
  };

  handleUpdate = id => {
    const { ColorListActions } = this.props;
    ColorListActions.update(id);
  };

  handleRemove = id => {
    const { ColorListActions } = this.props;
    ColorListActions.remove(id);
  };

  render() {
    const { input, list } = this.props;

    return (
      <div>
        <form className='ColorList' onSubmit={this.handleSubmit}>
          <input placeholder='원하는 색을 입력하세요' value={input} onChange={this.handleChane} />
        </form>
        <ul>
          {list.map(item => {
            return (
              <ListItem
                key={item.id}
                item={item}
                style={{
                  backgroundColor: item.color,
                  opacity: item.opacity,
                  width: '50px',
                  height: '50px',
                  float: 'left'
                }}
                onUpdate={this.handleUpdate}
                onRemove={this.handleRemove}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ColorList;
