import React from 'react';
import { Route } from 'react-router-dom';
import { ROUTES } from './constants';
import { Navigation } from './components';

const App = () => {
  return (
    <>
      {ROUTES.map(({ path, component }) => (
        <Route
          key={path}
          path={path}
          exact={path === '/'}
          component={component}
        />
      ))}
      <Navigation />
    </>
  );
};

export default App;
