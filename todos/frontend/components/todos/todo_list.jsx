import React from 'react';
import TodoListItem from './todo_list/todo_list_item';
import TodoForm from './todo_list/todo_form';

export default (props) => {
  const titles = props.todos.map((todo, idx) => {
    return (
      <TodoListItem key={todo.id} todo={todo}/>
    );
  });
  return(
    <>
      <h3>Todo List goes here!</h3>
      <ul>
        {titles}
      </ul>
      <TodoForm />
    </>
  );
};
