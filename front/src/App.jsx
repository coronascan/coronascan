import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { ROUTES } from './constants';
import { Navigation } from './components';
import ResultContext from './contexts/ResultContext';

const App = () => {
  const { color } = useContext(ResultContext);
  return (
    <>
      <Navigation />
      <main style={{ background: color }}>
        {ROUTES.map(({ path, component, exact }) => (
          <Route key={path} path={path} exact={exact} component={component} />
        ))}
      </main>
    </>
  );
};

export default App;
