import React, { Component } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";
import { List } from "react-virtualized";

class TodoList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    const rowRenderer = ({ index, key, style }) => {
      const todo = todos[index];

      return <TodoItem key={key} todo={todo} onToggle={onToggle} onRemove={onRemove} style={style} />;
    };
    return (
      <div className='TodoList'>
        <List width={600} height={364} rowCount={todos.length} rowHeight={62} rowRenderer={rowRenderer} />
      </div>
    );
  }
}

export default TodoList;
