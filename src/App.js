/* eslint-disable no-unused-vars */
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HOME, POKEMON_DETAILS, NOT_FOUND } from './constants/routes';
import './App.css';
import Spinner from './utils/Spinner';
import PokemonItems from './containers/PokemonItems';
import Card from './containers/Card';

// const Home = lazy(() => import('./components/DisplayPokemon'));
const PokemonDetails = lazy(() => import('./components/PokemonDetails'));
const Error404Page = lazy(() => import('./components/Error404Page'));

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route exact path={HOME}>
            <Suspense fallback={Spinner()}>
              <Home />
            </Suspense>
          </Route> */}
          <Route exact path="/" component={PokemonItems} />
          <Route path="/pokemon/:name" component={Card} />
          <Route path={POKEMON_DETAILS}>
            <Suspense fallback={Spinner()}>
              <PokemonDetails />
            </Suspense>
          </Route>
          <Route path={NOT_FOUND}>
            <Suspense fallback={Spinner()}>
              <Error404Page />
            </Suspense>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
