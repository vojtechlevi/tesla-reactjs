import { useState } from "react";

export const useMenu = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  return { menu, toggleMenu };
};
