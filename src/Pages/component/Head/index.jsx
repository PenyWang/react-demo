import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Head() {
  return (
    <React.Fragment>
    <div className='head'>
      <h1>
        TodoList
      </h1>
      <div className='navigation'>
        <Link className='link-style' to="/">首页</Link>{ ' | ' }
        <Link className='link-style' to="/about">关于</Link>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Head;