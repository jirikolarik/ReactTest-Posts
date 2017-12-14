import { combineReducers } from 'redux';
import auth, * as fromAuth from './auth';
import posts from './posts';

const reducer = combineReducers({
  auth,
  posts
});

export default reducer;
