import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import '../assets/css/PokemonFilter.css';

const PokemonFilter = props => {
  const pokemonMovesCategories = [
    'normal',
    'fire',
    'water',
    'grass',
    'electric',
    'ice',
    'fighting',
    'poison',
    'ground',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dark',
    'dragon',
    'steel',
    'fairy',
  ];
  const { onClick, category } = props;
  return (
    <Header>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4 col-sm-8" id="col-filter">
            <label className="text-white h4 mb-2" htmlFor="category">
              Select Pokemon Type:
              <select className="custom-select my-select my-2" name="category" value={category} onChange={e => onClick(e)}>
                <option>Select category</option>
                {pokemonMovesCategories
                  .map(type => (<option key={type} value={type}>{type}</option>))}
              </select>
            </label>

          </div>
        </div>

      </div>
    </Header>

  );
};

PokemonFilter.defaultProps = {
  category: 'normal',
};

PokemonFilter.propTypes = {
  onClick: PropTypes.func.isRequired,
  category: PropTypes.string,
};

export default PokemonFilter;
