import React from "react";
import { Link } from "react-router-dom";

import ItemNav from "../ItemNav";
import ItemCard from "../ItemCard";
import ItemLinks from "../ItemLinks";

const MobileEnergy = ({ menu, toggleMenu, selectedItem, setSelectedItem }) => {
  return (
    <>
      <div
        className={`absolute w-full h-screen top-0 z-50 left-0 bg-white overflow-scroll`}
      >
        <ItemNav
          title="Energy"
          menu={menu}
          toggleMenu={toggleMenu}
          setSelectedItem={setSelectedItem}
        />
        <div className={`flex px-4 flex-wrap justify-center `}>
          <Link to="/" onClick={toggleMenu}>
            <ItemCard
              title="Solar Panels"
              imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Panels.png"
            />
          </Link>
          <ItemCard
            title="Solar Roof"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Roof.png"
          />
          <ItemCard
            title="Power Wall"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Powerwall-US.png"
          />
          <ItemCard
            title="Megapack"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Megapack.png"
          />

          <div className="w-full h-[1px] mx-2 my-10 bg-slate-500/50"></div>
          <div className="w-full gap-6 flex flex-col">
            <ItemLinks title="Schedule a Consultation" />
            <ItemLinks title="Why Solar" />
            <ItemLinks title="Incentives" />
            <ItemLinks title="Support" />
            <ItemLinks title="Partner with Tesla" />
            <ItemLinks title="Commercial" />
            <ItemLinks title="Utilities" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileEnergy;
