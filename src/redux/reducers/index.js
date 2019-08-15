import { combineReducers } from 'redux';
import breeds from './breeds';
import imageBreed from './imageBreed';
import users from './users';

const rootReducer = combineReducers({
  breeds,
  imageBreed,
  users,
});

export default rootReducer;
