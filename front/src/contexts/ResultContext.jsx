import React, { createContext, useState } from 'react';

const ResultContext = createContext({
  target: '',
  changeTarget: () => { },
  color: '#FBFBFC',
  changeBg: () => { },
});

export const ResultProvider = ({ children }) => {
  const [target, setTarget] = useState('');
  const [bg, setBg] = useState('#FBFBFC');

  const value = {
    target,
    changeTarget: setTarget,
    color: bg,
    changeBg: setBg,
  };

  return (
    <ResultContext.Provider value={value}>{children}</ResultContext.Provider>
  );
};

export default ResultContext;
