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
const store = createStore(
  rootReducer,
  {
    data: initialState,
    filter: 'normal',
  },
  compose(
    applyMiddleware(...middleware),
  ),
);

export default store;
