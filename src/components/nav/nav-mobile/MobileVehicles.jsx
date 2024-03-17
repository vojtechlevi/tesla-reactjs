import React from "react";
import ItemNav from "../ItemNav";
import ItemCard from "../ItemCard";
import ItemLinks from "../ItemLinks";
import { Link } from "react-router-dom";

const MobileVehicles = ({
  menu,
  toggleMenu,
  selectedItem,
  setSelectedItem,
}) => {
  return (
    <>
      <div
        className={`absolute w-full h-screen top-0 z-10 left-0 bg-white overflow-scroll ${
          selectedItem === 1 ? "opacity-100" : "opacity-0" ////why is this not working?
        }`}
      >
        <ItemNav
          title="Vehicles"
          menu={menu}
          setMenu={toggleMenu}
          setSelectedItem={setSelectedItem}
        />
        <div className={`flex px-4 flex-wrap justify-center `}>
          <Link to="/models" onClick={toggleMenu}>
            <ItemCard
              title="Model S"
              imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png"
            />
          </Link>
          <ItemCard
            title="Model 3"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3-LHD.png"
          />
          <ItemCard
            title="Model X"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png"
          />
          <ItemCard
            title="Model Y"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png"
          />
          <ItemCard
            title="Cybertruck"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Cybertruck-1x.png"
          />
          <ItemCard
            title="Help Me Choose"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-HMC-RedBlue-LHD.png"
          />

          <div className="w-full h-[1px] mx-2 my-10 bg-slate-500/50"></div>
          <div className="w-full gap-6 flex flex-col mb-10 text-xl">
            <ItemLinks title="Inventory" />
            <ItemLinks title="Used Cars" />
            <ItemLinks title="Demo Drive" />
            <ItemLinks title="Trade-in" />
            <ItemLinks title="Compare" />
            <ItemLinks title="Help Me Charge" />
            <ItemLinks title="Fleet" />
            <ItemLinks title="Semi" />
            <ItemLinks title="Roadster" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileVehicles;
