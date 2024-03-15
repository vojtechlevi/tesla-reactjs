import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="absolute top-0 left-0 flex justify-center items-center w-full text-white px-6 py-4">
        <h2 className="text-xl tracking-[20px]">TESLA</h2>
        <div className="flex gap-6 mx-96">
          <p>Vehicles</p>
          <p>Energy</p>
          <p>Charging</p>
          <p>Discover</p>
          <p>Shop</p>
        </div>
        <div className="flex">
          <p>0</p>
          <p>0</p>
          <p>0</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
