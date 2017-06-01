import { combineReducers } from 'redux';
import AuthReducer from './auth_reducer';

const rootReducer = combineReducers({
  authenticated: AuthReducer
});

export default rootReducer;
