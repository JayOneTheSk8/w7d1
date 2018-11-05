import { combineReducers } from 'redux';
import todosReducer from './todos_reducer';

// export default combineReducers({
//   todos: todosReducer
// });


export default (state = {}, action) => {
  return {
    todos: todosReducer(state.todos, action)
  };
};
