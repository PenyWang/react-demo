import React, {useState} from 'react';
import './style.css';

function CreateItem (props) {

  const [todoInput, setTodoInput] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(e.target.todoInput.value || todoInput);
    setTodoInput('');
  }

  const onChange = (e) => {
    setTodoInput(e.target.value);
  }
  
  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <div className="todo-create-container">
          <input 
            className="todo-input" 
            name="todoInput"
            value={todoInput}
            placeholder="please input your task"
            onChange={onChange}
          />
          <button className="todo-submit" type="submit">新增</button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default CreateItem;