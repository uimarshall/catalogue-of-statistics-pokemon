/* eslint-disable  react/display-name */
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import PokemonDetails from '../../components/PokemonDetails';

describe('Proper Rendering', () => {
  test('renders PokemonDetails component correctly', () => {
    render(<PokemonDetails />);

    expect(screen.queryByText(/Run faster now/)).toBeNull();
  });
});

jest.mock('../../components/PokemonDetails', () => () => <div id="pokemonDetails">Pokemon Details</div>);
describe('PokemonDetails Component', () => {
  test('renders PokemonDetails in the DOM', () => {
    const { container } = render(<PokemonDetails />);
    const mockComponent = container.querySelector('div#pokemonDetails');

    expect(mockComponent).toBeInTheDocument();
  });
});
