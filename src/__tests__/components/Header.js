import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';
import PokemonFilter from '../../components/PokemonFilter';

const handleFilterChange = () => { ''; };

describe('Header Component', () => {
  test('renders Header component without crashing', () => {
    const nonExist = 'No such text';

    render(<Header><PokemonFilter onClick={handleFilterChange}/></Header>);

    expect(screen.queryByText(nonExist)).toBeNull();
  });
});
describe('Proper Rendering', () => {
  test('renders Header component correctly', () => {
    render(<Header><PokemonFilter onClick={handleFilterChange}/></Header>);

    expect(screen.queryByText(/Run faster now/)).toBeNull();
  });
});

