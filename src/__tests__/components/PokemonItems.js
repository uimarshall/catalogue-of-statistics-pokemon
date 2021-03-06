import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../store';
import PokemonItems from '../../containers/PokemonItems';

describe('Proper Rendering', () => {
  test('renders PokemonItems component correctly', () => {
    render(<Provider store={store}><PokemonItems /></Provider>);

    expect(screen.queryByText(/Run faster now/)).toBeNull();
  });
});

describe('PokemonItems Component', () => {
  afterEach(cleanup);

  it('should take a snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}><Router><PokemonItems /></Router></Provider>,
    );

    expect(
      asFragment(<Provider store={store}><Router><PokemonItems /></Router></Provider>),
    ).toMatchSnapshot();
  });
});
