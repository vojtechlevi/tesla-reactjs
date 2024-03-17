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

  // desktop menu
  const [hoverVehicles, setHoverVehicles] = useState(false);
  const [hoverEnergy, setHoverEnergy] = useState(false);
  const [hoverCharging, setHoverCharging] = useState(false);

  return (
    <>
      <div
        className={`absolute top-0 left-0 z-30  flex justify-between items-center w-full px-8 py-4 transform transition-all duration-500 ease-in-out ${
          menu
            ? "hidden"
            : hoverVehicles
            ? "text-black"
            : hoverEnergy
            ? "text-black"
            : hoverCharging
            ? "text-black"
            : "block text-white"
        }`}
      >
        <Link to="/">
          <h2 className={`lg:text-xl tracking-[20px] cursor-pointer `}>
            TESLA
          </h2>
        </Link>
        <div className={`gap-6 hidden lg:flex `}>
          <p
            onMouseEnter={() => setHoverVehicles(true)}
            onMouseLeave={() => setHoverVehicles(false)}
            className="relative cursor-pointer hover:bg-gray-500/10 p-2 rounded"
          >
            Vehicles
          </p>
          <p
            onMouseEnter={() => setHoverEnergy(true)}
            onMouseLeave={() => setHoverEnergy(false)}
            className="relative cursor-pointer hover:bg-gray-500/10 p-2 rounded"
          >
            Energy
          </p>
          <p
            onMouseEnter={() => setHoverCharging(true)}
            onMouseLeave={() => setHoverCharging(false)}
            className="relative cursor-pointer hover:bg-gray-500/10 p-2 rounded"
          >
            Charging
          </p>
          <p className="relative cursor-pointer hover:bg-gray-500/10 p-2 rounded">
            Discover
          </p>
          <p className="relative cursor-pointer hover:bg-gray-500/10 p-2 rounded">
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
      {hoverVehicles && (
        <DesktopVehicles
          hoverVehicles={hoverVehicles}
          setHoverVehicles={setHoverVehicles}
        />
      )}
      <DesktopEnergy
        hoverEnergy={hoverEnergy}
        setHoverEnergy={setHoverEnergy}
      />
      <DesktopCharging
        hoverCharging={hoverCharging}
        setHoverCharging={setHoverCharging}
      />
      {menu && <MobileNavItems menu={menu} toggleMenu={toggleMenu} />}
    </>
  );
};

export default Navbar;
