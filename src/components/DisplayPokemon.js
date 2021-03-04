import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import uuid from 'react-uuid';
import picture from '../assets/images/legendary-pokemon-200.png';

const id = () => uuid();

const DisplayPokemon = ({ pokemon }) => (
  <section className="features">
    <Link to={`/pokemon/${pokemon.name}`} className="d-block py-2">
      <div className="feature py-2" key={id.toString()}>
        <img src={pokemon.image ? pokemon.image : picture} alt={pokemon.name} className="icon h-auto" />
        <p>{pokemon.name}</p>
        <p>
          <Button variant="warning">View Details</Button>
        </p>
      </div>
    </Link>
  </section>

);

DisplayPokemon.defaultProps = {
  pokemon: {
    name: 'legendary',
  },
};

DisplayPokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default DisplayPokemon;
