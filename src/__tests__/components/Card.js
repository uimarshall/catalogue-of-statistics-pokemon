import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from '../../containers/Card';
import store from '../../store';

describe('Card Component', () => {
  test('renders Card component without crashing', () => {
    const nonExist = 'No such text';

    render(<Provider store={store}><Router><Card /></Router></Provider>);

    expect(screen.queryByText(nonExist)).toBeNull();
  });
});

describe('Card Component', () => {
  afterEach(cleanup);

  it('should take a snapshot', () => {
    const { asFragment } = render(<Provider store={store}><Router><Card /></Router></Provider>);

    expect(asFragment(<Provider store={store}><Router><Card /></Router></Provider>))
      .toMatchSnapshot();
  });
});
