import React from 'react';

import './TodoList.css';

interface TodoListProps {
  items: {
    id: number,
    text: string
  }[];
  deleteTodoHandler: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const { items, deleteTodoHandler } = props;
  return (
    <ul>
      {items.map((todo) => {
        return (
          <li key={todo.id} className="todo-item">
            <span>
              {todo.text}
            </span>
            <button type="submit" onClick={deleteTodoHandler.bind(null, todo.id)}>X</button>
          </li>
        );
      })}
    </ul>
  );  
};

export default TodoList;