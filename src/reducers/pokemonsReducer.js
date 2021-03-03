import {
  GET_POKEMONS_ERROR, GET_SINGLE_POKEMON_SUCCESS, GET_SINGLE_POKEMON_LOADING,
  GET_POKEMONS_SUCCESS, POKEMONS_LOADING, GET_SINGLE_POKEMON_ERROR,
} from '../actions/actionTypes';

const initialState = {};

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POKEMONS_LOADING:
      return {
        ...state,
        pending: true,
      };
    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        pending: false,
        pokemons: action.pokemons,
      };
    case GET_POKEMONS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case GET_SINGLE_POKEMON_LOADING:
      return {
        ...state,
        pendingPokemon: true,
      };
    case GET_SINGLE_POKEMON_SUCCESS:
      return {
        ...state,
        pendingPokemon: false,
        pokemons: [action.pokemons],
      };
    case GET_SINGLE_POKEMON_ERROR:
      return {
        ...state,
        pendingPokemon: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
export const getPokemons = state => state.pokemons;
export const getPokemonsPending = state => state.pending;
export const getPokemonPending = state => state.pendingPokemon;
export const getPokemonsError = state => state.error;
