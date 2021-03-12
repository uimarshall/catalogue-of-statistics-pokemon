import { FILTER_TYPE } from '../actions/actionTypes';

const initialState = 'normal';

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_TYPE:
      return action.category;
    default:
      return state;
  }
};

export const getPokemonType = category => category;
