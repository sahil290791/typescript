import React, { useState } from 'react';

import { Todo } from './todo.model';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos([
      ...todos,
      {
        text: text,
        id: todos.length + 1,
      }
    ]);
  };

  return (
    <div className="App">
      <NewTodo addTodoHandler={addTodoHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
