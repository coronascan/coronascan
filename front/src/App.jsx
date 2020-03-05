import React, { useContext, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { ROUTES } from './constants';
import { Navigation } from './components';
import BgContext from './contexts/BgContext';

const App = () => {
  const { color } = useContext(BgContext);
  return (
    <>
      <Navigation />
      <main style={{ background: color }}>
        {ROUTES.map(({ path, component }) => (
          <Route
            key={path}
            path={path}
            exact={path === '/'}
            component={component}
          />
        ))}
      </main>
    </>
  );
};

export default App;
