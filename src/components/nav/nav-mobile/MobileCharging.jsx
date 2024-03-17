import React from "react";
import ItemNav from "../ItemNav";
import ItemCard from "../ItemCard";
import ItemLinks from "../ItemLinks";

const MobileCharging = ({ menu, setMenu, setSelectedItem }) => {
  return (
    <>
      <div
        className={`absolute w-full h-screen top-0 z-10 left-0 bg-white overflow-scroll`}
      >
        <ItemNav
          title="Vehicles"
          menu={menu}
          setMenu={setMenu}
          setSelectedItem={setSelectedItem}
        />
        <div className={`flex px-4 flex-wrap justify-center `}>
          <ItemCard
            title="Charging"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Charging.png"
          />
          <ItemCard
            title="Home Charging"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Home-Charging.png"
          />
          <ItemCard
            title="Supercharging"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Supercharging-NA.png"
          />

          <div className="w-full h-[1px] mx-2 my-10 bg-slate-500/50"></div>
          <div className="w-full gap-6 flex flex-col">
            <ItemLinks title="Help Me Charge" />
            <ItemLinks title="Charging Calculator" />
            <ItemLinks title="Trip Planner" />
            <ItemLinks title="Charging With NACS" />
            <ItemLinks title="Supercharger Voting" />
            <ItemLinks title="Host a Supercharger" />
            <ItemLinks title="Commercial Charging" />
            <ItemLinks title="Host Wall Connectors" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileCharging;
