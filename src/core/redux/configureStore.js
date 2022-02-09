import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { fetchUsers } from '../components/AllProjectsContainer/redux/actions';

export default () => {
  const store = createStore(
    combineReducers(rootReducer),
    applyMiddleware(thunk),
  );
  store.dispatch(fetchUsers());
  return store;
};
