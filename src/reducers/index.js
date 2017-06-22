import { combineReducers } from 'redux';
import AuthReducer from './auth_reducer';
import SearchReducer from './search_reducer';

const rootReducer = combineReducers({
  authenticated: AuthReducer,
  searchResults: SearchReducer
});

export default rootReducer;
