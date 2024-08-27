import React from "react";

import ItemNav from "../ItemNav";
import ItemCard from "../ItemCard";
import ItemLinks from "../ItemLinks";

const MobileVehicles = ({
  menu,
  toggleMenu,
  selectedItem,
  setSelectedItem,
}) => {
  return (
    <>
      <div
        className={`absolute w-full h-screen top-0 z-50 left-0 bg-white overflow-scroll ${
          selectedItem === 1 ? "opacity-100" : "opacity-0" ////why is this not working?
        }`}
      >
        <ItemNav
          title="Vehicles"
          menu={menu}
          toggleMenu={toggleMenu}
          setSelectedItem={setSelectedItem}
        />
        <div className={`flex px-4 p-8 flex-wrap justify-center `}>
          <ItemCard
            toggleMenu={toggleMenu}
            title="Model S"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png"
            pageLink="/modelS"
          />
          <ItemCard
            toggleMenu={toggleMenu}
            title="Model 3"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3-LHD.png"
            pageLink="/model3"
          />
          <ItemCard
            toggleMenu={toggleMenu}
            title="Model X"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png"
            pageLink="/modelX"
          />
          <ItemCard
            toggleMenu={toggleMenu}
            title="Model Y"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png"
            pageLink="/modelY"
          />
          <ItemCard
            toggleMenu={toggleMenu}
            title="Cybertruck"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Cybertruck-1x.png"
            pageLink="/cybertruck"
          />
          <ItemCard
            toggleMenu={toggleMenu}
            title="Help Me Choose"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-HMC-RedBlue-LHD.png"
            pageLink="/choose"
          />

          <div className="w-full h-[1px] mx-2 my-14 bg-slate-500/50"></div>
          <div className="w-full gap-6 flex flex-col mb-10 text-xl">
            <ItemLinks
              title="Inventory"
              pageLink="/new"
              toggleMenu={toggleMenu}
            />
            <ItemLinks
              title="Used Cars"
              pageLink="/used"
              toggleMenu={toggleMenu}
            />
            <ItemLinks
              title="Demo Drive"
              pageLink="/drive"
              toggleMenu={toggleMenu}
            />
            <ItemLinks
              title="Trade-in"
              pageLink="/tradein"
              toggleMenu={toggleMenu}
            />
            <ItemLinks
              title="Compare"
              pageLink="/compare"
              toggleMenu={toggleMenu}
            />
            <ItemLinks
              title="Help Me Charge"
              pageLink="/charge"
              toggleMenu={toggleMenu}
            />
            <ItemLinks
              title="Fleet"
              pageLink="/fleet"
              toggleMenu={toggleMenu}
            />
            <ItemLinks title="Semi" pageLink="/semi" toggleMenu={toggleMenu} />
            <ItemLinks
              title="Roadster"
              pageLink="/roadster"
              toggleMenu={toggleMenu}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileVehicles;
