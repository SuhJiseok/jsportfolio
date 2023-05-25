// NavMenuContext.js
import React, { createContext, useState } from 'react';

const NavMenuContext = createContext();

export const NavMenuProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <NavMenuContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      {children}
    </NavMenuContext.Provider>
  );
};

export default NavMenuContext;
