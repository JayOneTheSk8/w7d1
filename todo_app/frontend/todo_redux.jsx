import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import Root from './components/root';
import { allTodos } from './reducers/selectors';
import { fetchTodos } from './util/todo_api_util';


document.addEventListener('DOMContentLoaded', () => {
  window.store = Store(); //TEST
  window.fetchTodos = fetchTodos;
  window.receiveTodo = receiveTodo; //TEST
  window.receiveTodos = receiveTodos; //TEST
  window.allTodos = allTodos; //TEST
  const content = document.getElementById('content');
  ReactDOM.render(<Root store={window.store}/>, content);
});
