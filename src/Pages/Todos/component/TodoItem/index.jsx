import React from 'react';

import './style.css';

const TodoItem = (props) => {
  const {id, title, complete} = props.todoItem;
  return (
    <div className='todo-item-container'>
      <input type="checkbox" onChange={() => { props.onChangebox(id) }}/>
      <span className={`${complete ? 'todo-item-title' : ''}`}> {title} </span>
      <button className='todo-delete-btn' onClick={() => props.onClickDel(id)}>delete</button>
    </div>
  )
}

export default TodoItem;