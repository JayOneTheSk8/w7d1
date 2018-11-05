import {RECEIVE_TODO, RECEIVE_TODOS} from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODOS:
      const obj = {};
      action.todos.forEach( (todo) => {
        let {id, title, body, done} = todo;
        obj[id] = {
          id: id,
          title: title,
          body: body,
          done: done
        };
      });
      return obj;
    case RECEIVE_TODO:
      const { id, title, body, done } = action.todo;
      const newTodo = {
        [id]: {
          id: id,
          title: title,
          body: body,
          done: done
        }
      };
      return Object.assign({}, state, newTodo);

    default:
      return state;
  }
};

export default todosReducer;
