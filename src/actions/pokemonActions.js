import axios from 'axios';

import {
  POKEMONS_LOADING, GET_POKEMONS_SUCCESS, GET_SINGLE_POKEMON_SUCCESS,
  GET_SINGLE_POKEMON_ERROR, GET_SINGLE_POKEMON_LOADING,
  GET_POKEMONS_ERROR, FILTER_TYPE,
} from './actionTypes';

const BASE_URL_NAME = 'https://pokeapi.co/api/v2/pokemon';
const BASE_URL_TYPE = 'https://pokeapi.co/api/v2/type';

export const pokemonsLoading = () => ({
  type: POKEMONS_LOADING,
});

export const getPokemonsSuccess = data => ({
  type: GET_POKEMONS_SUCCESS,
  pokemons: data,
});

export const getPokemonsError = error => ({
  type: GET_POKEMONS_ERROR,
  error,
});

export const getSinglePokemonLoading = () => ({
  type: GET_SINGLE_POKEMON_LOADING,
});

export const getSinglePokemonSuccess = pokemon => ({
  type: GET_SINGLE_POKEMON_SUCCESS,
  pokemons: pokemon,
});

export const getSinglePokemonError = error => ({
  type: GET_SINGLE_POKEMON_ERROR,
  error,
});

export const changeType = type => ({
  type: FILTER_TYPE,
  category: type,
});

export const pokemonsType = async type => {
  const response = await fetch(`${BASE_URL_TYPE}/${type}`);

  if (response.ok) return response.json();

  throw new Error(response.status);
};

export const pokemonProps = async name => {
  const response = await axios.get(`${BASE_URL_NAME}/${name}`);
  return response.data;
};

export const fetchPokemons = type => async dispatch => {
  dispatch(pokemonsLoading());
  try {
    const response = await pokemonsType(type);
    const pokemons = response.pokemon.map(async poke => {
      const res = await axios.get(poke.pokemon.url);
      return res.data;
    });
    const pokemonsData = await Promise.all(pokemons);
    const payload = pokemonsData.map(data => ({
      name: data.name,
      image: data.sprites.front_default,
    }));
    dispatch(getPokemonsSuccess(payload));
    dispatch(changeType(type));
    return response;
  } catch (e) {
    dispatch(getPokemonsError(e));
    return e;
  }
};

export const getPokemon = name => async dispatch => {
  dispatch(getSinglePokemonLoading());
  try {
    const response = await pokemonProps(name);
    const pokemon = {
      name: response.name,
      abilities: response.abilities,
      sprites: response.sprites,
      stats: response.stats,
    };
    dispatch(getSinglePokemonSuccess(pokemon));
    return pokemon;
  } catch (e) {
    dispatch(getSinglePokemonError(e));
    return e;
  }
};
