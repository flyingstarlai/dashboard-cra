import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import connectionReducer from './connection';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  connection: connectionReducer,
});
