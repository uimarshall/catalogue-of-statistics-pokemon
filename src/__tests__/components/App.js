/* eslint-disable import/no-duplicates */
import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from '../../App';
import Link from '../../App';
import store from '../../store';

describe('App', () => {
  test('renders App component', () => {
    const nonExist = 'No such text';

    render(<Provider store={store}><App /></Provider>);

    expect(screen.queryByText(nonExist)).toBeNull();
  });

  afterEach(cleanup);

  it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><Link to="/">Home</Link></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><Link to="/details">PokemonDetails</Link></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><Link to="*">Error404Page</Link></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
