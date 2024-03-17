import React, { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setTimeout(() => {
      setMenu((prevMenu) => !prevMenu);
    }, 500);
  };

  return (
    <MenuContext.Provider value={{ menu, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  return useContext(MenuContext);
};
