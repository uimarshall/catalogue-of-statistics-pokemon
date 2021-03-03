import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import pokemonsReducer from './pokemonsReducer';

export default combineReducers({
  data: pokemonsReducer,
  filter: filterReducer,

});
