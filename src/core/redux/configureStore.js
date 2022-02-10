import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export default () => {
  const store = createStore(
    combineReducers(rootReducer),
    applyMiddleware(thunk),
  );
  return store;
};
