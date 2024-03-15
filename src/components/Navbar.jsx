import React from "react";
import { useState } from "react";

import { X } from "lucide-react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Globe } from "lucide-react";
import { CircleUserRound } from "lucide-react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="absolute top-0 left-0 z-20 flex justify-between items-center w-full text-white px-4 py-4 transform transition-all duration-500 ease-in-out">
        <h2 className="lg:text-xl tracking-[20px]">TESLA</h2>
        <div className=" gap-6 lg:mx-96 hidden md:flex ">
          <p>Vehicles</p>
          <p>Energy</p>
          <p>Charging</p>
          <p>Discover</p>
          <p>Shop</p>
        </div>
        <div className="hidden md:flex">
          <p>0</p>
          <p>0</p>
          <p>0</p>
        </div>
        <button
          onClick={handleMenu}
          className=" text-sm px-4 py-[5px] bg-black/10 rounded backdrop-blur-sm cursor-pointer md:hidden "
        >
          Menu
        </button>
      </div>
      <div
        className={
          menu
            ? "w-full h-screen absolute top-0 left-0 z-30 opacity-100  bg-white transform transition-all duration-500 ease-in-out md:hidden"
            : "w-full h-screen absolute top-0 left-0 -z-10 opacity-0 bg-white transform transition-all duration-500 ease-in-out md:hidden"
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
            <div className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer">
              <h2>Vehicles</h2>
              <ChevronRight />
            </div>
            <div className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer">
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

export default Navbar;
