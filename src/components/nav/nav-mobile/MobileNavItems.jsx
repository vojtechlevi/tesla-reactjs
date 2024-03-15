import React, { useState } from "react";

import { X } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Globe } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import MobileVehicles from "./MobileVehicles";

const MobileNavItems = ({ menu = false, setMenu }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMenu = () => {
    setMenu(!menu);
    document.body.classList.toggle("overflow-hidden");
  };

  const handleItem = (i) => {
    setSelectedItem(i);
  };

  return (
    <>
      <div
        className={
          menu
            ? "w-full h-screen absolute top-0 left-0 z-30 opacity-100  bg-white transform transition-all duration-500 ease-in-out lg:hidden"
            : "w-full h-screen absolute top-0 left-0 -z-10 opacity-0 bg-white transform transition-all duration-500 ease-in-out lg:hidden"
        }
      >
        <button
          onClick={handleMenu}
          className="absolute right-6 top-4 hover:bg-black/10 p-1 rounded active:border active:border-slate-950 "
        >
          <X />
        </button>
        <div className="w-full h-full flex justify-center items-center">
          <div className="flex flex-col w-[92%] justify-between text-xl items-center gap-4">
            {selectedItem === 1 ? (
              <MobileVehicles
                menu={menu}
                setMenu={setMenu}
                setSelectedItem={setSelectedItem}
              />
            ) : (
              <div
                onClick={() => handleItem(1)}
                className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer"
              >
                <h2>Vehicles</h2>
                <ChevronRight />
              </div>
            )}
            <div
              onClick={() => handleItem(2)}
              className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer"
            >
              <h2>Energy</h2>
              <ChevronRight />
            </div>
            <div className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer">
              <h2>Charging</h2>
              <ChevronRight />
            </div>
            <div className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer">
              <h2>Discover</h2>
              <ChevronRight />
            </div>
            <div className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer">
              <h2>Shop</h2>
            </div>
            <div className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer">
              <h2>Support</h2>
            </div>
            <div className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer">
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
    </>
  );
};

export default MobileNavItems;
