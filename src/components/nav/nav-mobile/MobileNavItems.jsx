import React, { useState } from "react";

import { X } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Globe } from "lucide-react";
import { CircleUserRound } from "lucide-react";

import MobileVehicles from "./MobileVehicles";
import MobileEnergy from "./MobileEnergy";
import MobileCharging from "./MobileCharging";
import MobileDiscover from "./MobileDiscover";

const MobileNavItems = ({ menu, toggleMenu }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItem = (i) => {
    setSelectedItem(i);
  };

  return (
    <>
      {selectedItem === 1 ? (
        <MobileVehicles
          menu={menu}
          toggleMenu={toggleMenu}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      ) : selectedItem === 2 ? (
        <MobileEnergy
          menu={menu}
          toggleMenu={toggleMenu}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      ) : selectedItem === 3 ? (
        <MobileCharging
          menu={menu}
          toggleMenu={toggleMenu}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      ) : selectedItem === 4 ? (
        <MobileDiscover
          menu={menu}
          toggleMenu={toggleMenu}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      ) : (
        <div
          className={`w-full h-screen absolute top-0 left-0 z-40 bg-white transform transition-opacity duration-500 ease-in-out lg:hidden ${
            menu ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute right-7 top-4 hover:bg-black/10 p-1 rounded active:border active:border-slate-950 "
          >
            <X />
          </button>
          <div className="absolute top-20 w-full flex justify-center items-center">
            <div className="flex flex-col w-[92%] justify-between text-xl items-center gap-4">
              <div
                onClick={() => handleItem(1)}
                className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer"
              >
                <h2>Vehicles</h2>
                <ChevronRight />
              </div>

              <div
                onClick={() => handleItem(2)}
                className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer"
              >
                <h2>Energy</h2>
                <ChevronRight />
              </div>
              <div
                onClick={() => handleItem(3)}
                className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer"
              >
                <h2>Charging</h2>
                <ChevronRight />
              </div>
              <div
                onClick={() => handleItem(4)}
                className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer"
              >
                <h2>Discover</h2>
                <ChevronRight />
              </div>
              <div className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer">
                <h2>Shop</h2>
              </div>
              <div className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer">
                <h2>Support</h2>
              </div>
              <div
                onClick={() => handleItem(5)}
                className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer"
              >
                <div className="flex gap-4 items-center">
                  <Globe />
                  <div>
                    <h2>United States</h2>
                    <p className="text-sm text-gray-500">English</p>
                  </div>
                </div>
                <ChevronRight />
              </div>
              <div className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer">
                <div className="flex gap-4">
                  <CircleUserRound />
                  <h2>Account</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavItems;
