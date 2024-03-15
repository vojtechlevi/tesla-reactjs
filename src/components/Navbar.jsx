import React from "react";
import { useState } from "react";

import { CircleHelp } from "lucide-react";
import { Globe } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import MobileNavItems from "./nav/nav-mobile/MobileNavItems";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div
        className={`absolute top-0 left-0 z-20 flex justify-between items-center w-full text-white px-8 py-4 transform transition-all duration-500 ease-in-out ${
          menu ? "hidden" : ""
        }`}
      >
        <h2 className={`lg:text-xl tracking-[20px] cursor-pointer `}>TESLA</h2>
        <div className={`gap-6 hidden lg:flex `}>
          <p className="cursor-pointer">Vehicles</p>
          <p>Energy</p>
          <p>Charging</p>
          <p>Discover</p>
          <p>Shop</p>
        </div>
        <div className={`hidden lg:flex `}>
          <div className="p-2  hover:bg-black/10 rounded cursor-pointer ">
            <CircleHelp size={22} />
          </div>
          <div className="p-2  hover:bg-black/10 rounded cursor-pointer">
            <Globe size={22} />
          </div>
          <div className="p-2 hover:bg-black/10 rounded cursor-pointer">
            <CircleUserRound size={22} />
          </div>
        </div>
        <button
          onClick={handleMenu}
          className=" text-sm px-4 py-[5px] bg-black/10 rounded backdrop-blur-sm cursor-pointer lg:hidden "
        >
          Menu
        </button>
      </div>

      <MobileNavItems menu={menu} setMenu={setMenu} />
    </>
  );
};

export default Navbar;
