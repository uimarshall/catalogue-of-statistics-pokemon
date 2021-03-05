import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';
import DisplayPokemon from '../../components/DisplayPokemon';

describe('DisplayPokemon Component', () => {
  test('renders DisplayPokemon component without crashing', () => {
    const nonExist = 'No such text';

    render(<Router><DisplayPokemon /></Router>);

    expect(screen.queryByText(nonExist)).toBeNull();
  });
});

describe('Proper Rendering', () => {
  test('renders DisplayPokemon component correctly', () => {
    render(<Router><DisplayPokemon /></Router>);

    expect(screen.queryByText(/raticate/)).toBeNull();
  });
});
describe('toHaveAttribute', () => {
  test('whether the given element has an attribute or not', () => {
    const { getByTestId } = render(<Router><DisplayPokemon /></Router>);

    const img = getByTestId('pok-img');
    const button = getByTestId('details-button');
    expect(img).toHaveAttribute('src', 'legendary-pokemon-200.png');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).not.toHaveAttribute('type', 'btn');
  });
});
