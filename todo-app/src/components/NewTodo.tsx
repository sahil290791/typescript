import React, { useRef } from 'react';

import './NewTodo.css';

interface NewTodoProps {
  addTodoHandler: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (textInputRef.current) {
      const enteredText = textInputRef.current!.value;
      textInputRef.current.value = "";
      props.addTodoHandler(enteredText);
    }
  };

  return (
    <form>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit" onClick={todoSubmitHandler}>ADD TODO</button>
    </form>
  );
};

export default NewTodo;