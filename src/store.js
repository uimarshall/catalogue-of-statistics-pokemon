/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {
  pending: true,
  pendingPokemon: true,
  pokemons: [],
  error: null,
};

const middleware = [thunk];
const devtools = process.env.NODE_ENV === 'test'
  ? x => x
  : window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  {
    data: initialState,
    filter: 'normal',
  },
  compose(
    applyMiddleware(...middleware),
    devtools,
  ),
);

export default store;
