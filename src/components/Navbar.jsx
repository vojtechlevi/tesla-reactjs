import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { CircleHelp } from "lucide-react";
import { Globe } from "lucide-react";
import { CircleUserRound } from "lucide-react";

import { useMenu } from "../hooks/MenuHook";
import MobileNavItems from "./nav/nav-mobile/MobileNavItems";
import DesktopVehicles from "./nav/nav-desktop/DesktopVehicles";
import DesktopEnergy from "./nav/nav-desktop/DesktopEnergy";
import DesktopCharging from "./nav/nav-desktop/DesktopCharging";

const Navbar = () => {
  const { menu, toggleMenu } = useMenu(); // mobile menu
  const [activeMenu, setActiveMenu] = useState(""); // desktop menu

  return (
    <>
      <div
        className={`absolute top-0 left-0 z-30  flex justify-between items-center w-full px-8 py-4 transform transition-all duration-200 ease-in-out ${
          menu ? "hidden" : activeMenu ? "text-black" : "block text-white "
        }`}
      >
        <Link to="/">
          <h2 className={`lg:text-xl tracking-[20px] cursor-pointer `}>
            TESLA
          </h2>
        </Link>
        <div className={`hidden lg:flex  `}>
          <p
            onMouseEnter={() => setActiveMenu("vehicles")}
            className={`relative cursor-pointer hover:bg-gray-500/10 p-2 px-4 rounded transform transition-bg duration-500`}
          >
            Vehicles
          </p>
          <p
            onMouseEnter={() => setActiveMenu("energy")}
            className="relative cursor-pointer hover:bg-gray-500/10 p-2 px-4 rounded transform transition-bg duration-500"
          >
            Energy
          </p>
          <p
            onMouseEnter={() => setActiveMenu("charging")}
            className="relative cursor-pointer hover:bg-gray-500/10 p-2 px-4 rounded transform transition-bg duration-500"
          >
            Charging
          </p>
          <p className="relative cursor-pointer hover:bg-gray-500/10 p-2 px-4 rounded">
            Discover
          </p>
          <p className="relative cursor-pointer hover:bg-gray-500/10 p-2 px-4 rounded">
            Shop
          </p>
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
          onClick={toggleMenu}
          className=" text-sm px-4 py-[5px] bg-black/10 rounded backdrop-blur-sm cursor-pointer lg:hidden "
        >
          Menu
        </button>
      </div>
      {
        <DesktopVehicles
          onMouseLeave={() => setActiveMenu(null)}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          className={`transition-all duration-400 ease-in-out ${
            activeMenu === "vehicles"
              ? "opacity-100 max-h-screen"
              : "opacity-0 max-h-screen "
          }`}
        />
      }
      {
        <DesktopEnergy
          onMouseLeave={() => setActiveMenu(null)}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          className={`transition-all duration-400 ease-in-out ${
            activeMenu === "energy"
              ? "opacity-100 max-h-screen"
              : "opacity-0 max-h-screen"
          }`}
        />
      }
      {
        <DesktopCharging
          onMouseLeave={() => setActiveMenu(null)}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          className={`transition-all duration-500 ease-in-out ${
            activeMenu === "charging"
              ? "opacity-100 max-h-screen"
              : "opacity-0 max-h-screen duration-500"
          }`}
        />
      }
      {menu && <MobileNavItems menu={menu} toggleMenu={toggleMenu} />}
      <div
        className={` ${
          activeMenu
            ? "w-full h-2/3 absolute top-0 left-0 bg-white z-10"
            : "hidden"
        }`}
      ></div>
    </>
  );
};

export default Navbar;
