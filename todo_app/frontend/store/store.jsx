import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import { thunk } from '../middleware/thunk';
import { logger } from 'redux-logger';



const configureStore = (initialState = {}) => {
  return createStore(RootReducer, initialState, applyMiddleware(thunk, logger));
};

export default configureStore;
