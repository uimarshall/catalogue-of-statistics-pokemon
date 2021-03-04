import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaCheckCircle } from 'react-icons/fa';
import '../assets/css/PokemonDetails.css';
import picture from '../assets/images/icon.svg';

function PokemonDetails({ pokemon }) {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <section className="pokemon-details">
      <img src={pokemon.sprites.front_default ? pokemon.sprites.front_default : picture} alt={pokemon.name} className="pokemon-pic w-100 d-block m-auto" />
      <div className="dish-details">
        <h2>
          Pokemon Name:
          <span className="text-info text-success font-weight-bold">{pokemon.name}</span>
        </h2>
        <h2 className="dish-desc w-50 text-left px-2">Abilities:</h2>
        <ul className="album-desc">
          {pokemon.abilities.map(item => (
            <li key={item.ability.name} className="abilities mr-2 p-2 rounded font-weight-bold h4">
              <FaCheckCircle className="icon-color" />
              {''}
              {item.ability.name}
            </li>
          ))}
        </ul>
        <div className="d-flex flex-column align-items-start">
          <h2 className="text-center mb-2">Stats:</h2>
          <ul className="d-flex flex-wrap">
            {pokemon.stats.map(stats => (
              <li key={stats.stat.name} className="stats mb-3 bg-yellow mr-2 p-2 rounded font-weight-bold">
                <span>
                  {stats.stat.name}
                  :
                </span>
                {' '}
                {stats.base_stat}
              </li>
            ))}
          </ul>
          <button type="button" className="btn btn-secondary learn-more" onClick={handleGoBack}>Go back</button>
        </div>
      </div>
    </section>

  );
}

PokemonDetails.defaultProps = {
  pokemon: {
    name: 'pikachu',
    abilities: [],
    stats: [],
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' },
    back_default: '',
  },
};

PokemonDetails.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    abilities: PropTypes.arrayOf(PropTypes.object),
    stats: PropTypes.arrayOf(PropTypes.object),
    sprites: PropTypes.shape({
      back_default: PropTypes.string,
      front_default: PropTypes.string,
    }),
  }),
};

export default PokemonDetails;
