import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './user';
import recipes from './recipes';
import specials from './specials';

export default combineReducers({
  user, 
  recipes,
  specials,
  form: formReducer,
});

