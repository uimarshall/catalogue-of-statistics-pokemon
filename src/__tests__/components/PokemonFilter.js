import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import PokemonFilter from '../../components/PokemonFilter';

const handleFilterChange = () => { ''; };
describe('PokemonFilter Component', () => {
  test('renders PokemonFilter component without crashing', () => {
    const nonExist = 'No such text';

    render(<PokemonFilter onClick={handleFilterChange} />);

    expect(screen.queryByText(nonExist)).toBeNull();
  });
});

describe('Proper Rendering', () => {
  test('renders PokemonFilter component correctly', () => {
    render(<PokemonFilter onClick={handleFilterChange} />);

    expect(screen.queryByText(/Not there/)).toBeNull();
  });
});

describe('toHaveStyle', () => {
  test('renders Class names correctly', () => {
    const { getByTestId } = render(<PokemonFilter onClick={handleFilterChange} />);

    const selectOption = getByTestId('filter-descendant');
    expect(selectOption).not.toHaveStyle({
      color: 'black',
      border: '0 none',

    });
  });
});

describe('Test toHaveTextContent', () => {
  test('check whether the given element has a text content or not', () => {
    const { getByTestId } = render(<PokemonFilter onClick={handleFilterChange} />);

    const element = getByTestId('filter-ancestor');
    expect(element).toHaveTextContent('normal');
    expect(element).not.toHaveTextContent(/^dragon$/); // to match the whole content
    expect(element).not.toHaveTextContent(/fire$/i); // to use case-insensitive match
    expect(element).not.toHaveTextContent('friend');
  });
});
describe('Test toHaveValue', () => {
  test('check whether the given form element has the specified value', () => {
    const { getByTestId } = render(<PokemonFilter onClick={handleFilterChange} />);

    const element = getByTestId('filter-ancestor');
    expect(element).not.toHaveValue(['second', 'third']);
    expect(element).toHaveDisplayValue(['normal']);
  });
});
