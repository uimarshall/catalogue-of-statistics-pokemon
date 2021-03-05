import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';
import { getPokemonsError, getAllPokemons, getPokemonPending } from '../reducers/pokemonsReducer';
import { getPokemon } from '../actions/pokemonActions';
import PokemonDetails from '../components/PokemonDetails';
import AlertDismissible from '../utils/Alert';

const Card = ({ fetchPokemon, data }) => {
  const { error, pending, pokemons = [] } = data;

  const { name } = useParams();

  useEffect(() => {
    fetchPokemon(name);
  }, []);

  if (error) {
    return (
      <div className="error">
        render(
        <AlertDismissible />
        );
      </div>
    );
  }
  if (pending) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="warning" />
      </div>
    );
  }
  if (pokemons.length === 1) {
    return <PokemonDetails pokemon={pokemons[0]} />;
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Spinner animation="border" variant="warning" />
    </div>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPokemon: getPokemon,
}, dispatch);

const mapStateToProps = state => ({
  data: {
    error: getPokemonsError(state.data),
    pokemons: getAllPokemons(state.data),
    pending: getPokemonPending(state.data),
  },
});

Card.defaultProps = {
  data: {
    error: null,
    pending: true,
    pokemons: [],
  },
};

Card.propTypes = {
  data: PropTypes.shape({
    error: PropTypes.objectOf(PropTypes.string),
    pending: PropTypes.bool,
    pokemons: PropTypes.arrayOf(PropTypes.object),
  }),
  fetchPokemon: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
