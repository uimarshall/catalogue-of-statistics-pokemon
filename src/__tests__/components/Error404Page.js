import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorPage from '../../components/Error404Page';

describe('ErrorPage Component', () => {
  test('renders ErrorPage component without crashing', () => {
    const nonExist = 'No such text';

    render(<ErrorPage />);

    expect(screen.queryByText(nonExist)).toBeNull();
  });
});

describe('Proper Rendering', () => {
  test('renders Error404Page component correctly', () => {
    render(<ErrorPage />);

    expect(screen.queryByText(/404/)).not.toBeNull();
  });
});
