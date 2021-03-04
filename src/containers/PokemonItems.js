import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';
import { fetchPokemons } from '../actions/pokemonActions';
import { getPokemonsError, getAllPokemons, getPokemonsPending } from '../reducers/pokemonsReducer';
import { getPokemonType } from '../reducers/filterReducer';
import DisplayPokemon from '../components/DisplayPokemon';
import PokemonFilter from '../components/PokemonFilter';
import AlertDismissible from '../utils/Alert';

class PokemonItems extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    const { fetchPokemons } = this.props;
    fetchPokemons('normal');
  }

  handleFilterChange(e) {
    const { fetchPokemons } = this.props;
    if (e.target.value !== '') {
      fetchPokemons(e.target.value);
    }
    e.preventDefault();
  }

  render() {
    const { data, filter } = this.props;
    const { error, pending, pokemons } = data;
    if (error) {
      <AlertDismissible />;

      return (
        <div className="error">

          <AlertDismissible />

        </div>
      );
    }

    if (pending) {
      return (
        <div className="d-flex justify-content-center">
          <Spinner animation="grow" />
        </div>
      );
    }

    if (pokemons.length < 2) {
      return (
        <div className="d-flex justify-content-center">
          <Spinner animation="grow" />
        </div>
      );
    }

    return (
      <div className="pokemon-item mx-auto">
        <PokemonFilter onClick={this.handleFilterChange} category={filter} />
        <ul className="d-flex container mx-auto my-2 flex flex-wrap">
          <div className="display-pokemon row">
            {pokemons.map(pokemon => (
              <DisplayPokemon
                key={pokemon.name}
                pokemon={pokemon}
              />
            ))}
          </div>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPokemons,
}, dispatch);

const mapStateToProps = state => ({
  data: {
    error: getPokemonsError(state.data),
    pokemons: getAllPokemons(state.data),
    pending: getPokemonsPending(state.data),
  },
  filter: getPokemonType(state.filter),
});

PokemonItems.defaultProps = {
  data: {
    pending: true,
    error: null,
    pokemons: [],
  },
  filter: 'normal',
};

PokemonItems.propTypes = {
  data: PropTypes.shape({
    pending: PropTypes.bool,
    error: PropTypes.objectOf(PropTypes.string),
    pokemons: PropTypes.arrayOf(PropTypes.object),
  }),
  filter: PropTypes.string,
  fetchPokemons: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(PokemonItems);
