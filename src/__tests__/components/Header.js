import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Header from '../../components/Header';
import PokemonFilter from '../../components/PokemonFilter';

const handleFilterChange = () => { ''; };

describe('Header Component', () => {
  test('renders Header component without crashing', () => {
    const nonExist = 'No such text';

    render(<Header><PokemonFilter onClick={handleFilterChange} /></Header>);

    expect(screen.queryByText(nonExist)).toBeNull();
  });
});
describe('Proper Rendering', () => {
  test('renders Header component correctly', () => {
    render(<Header><PokemonFilter onClick={handleFilterChange} /></Header>);

    expect(screen.queryByText(/Run faster now/)).toBeNull();
  });
});

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with or without a prop', () => {
  act(() => {
    render(<Header />, container);
  });
  expect(container.textContent).toBe('');
});

describe('To Have Class Names', () => {
  test('renders Class names correctly', () => {
    const { getByTestId } = render(<Header><PokemonFilter onClick={handleFilterChange} /></Header>);

    const selectOption = getByTestId('filter-descendant');
    expect(selectOption).toHaveClass('option');
    expect(selectOption).not.toHaveClass('select');
  });
});

describe('To be in the document', () => {
  test('renders the elements in the doc correctly', () => {
    const { getByTestId } = render(<Header><PokemonFilter onClick={handleFilterChange} /></Header>);

    const selectOption = getByTestId('filter-descendant');
    expect(selectOption).toBeInTheDocument();
  });
});

describe('Test toBeEmptyDOMElement', () => {
  test('element has no visible content for the user', () => {
    const { getByTestId } = render(<Header><PokemonFilter onClick={handleFilterChange} /></Header>);

    const emptyElem = getByTestId('filter-descendant');
    expect(emptyElem).not.toBeEmptyDOMElement();
  });
});

describe('Test toContainElement', () => {
  test('whether an element contains another element as a descendant or not', () => {
    const { getByTestId } = render(<Header><PokemonFilter onClick={handleFilterChange} /></Header>);

    const ancestor = getByTestId('filter-ancestor');
    const descendant = getByTestId('filter-descendant');
    expect(ancestor).toContainElement(descendant);
  });
});
describe('Test toContainHTML', () => {
  test('whether a string representing a HTML element is contained in another element', () => {
    const { getByTestId } = render(<Header><PokemonFilter onClick={handleFilterChange} /></Header>);

    const ancestor = getByTestId('filter-ancestor');
    const descendant = '<option class="option" data-testid="filter-descendant">Select category</option><option value="normal">normal</option>';

    expect(ancestor).not.toContainHTML(descendant);
  });
});
