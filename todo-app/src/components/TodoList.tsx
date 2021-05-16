import React from 'react';

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
          <li key={todo.id}>
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