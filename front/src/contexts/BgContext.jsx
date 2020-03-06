import React, { createContext, useState } from 'react';

const BgContext = createContext({
  color: '#fff',
  changeBg: () => {},
});

export const BgProvider = ({ children }) => {
  const [bg, setBg] = useState('#fff');

  const value = {
    color: bg,
    changeBg: setBg,
  };

  return <BgContext.Provider value={value}>{children}</BgContext.Provider>;
};

export default BgContext;
