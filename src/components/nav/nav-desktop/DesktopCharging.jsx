import React from "react";
import { useState, useEffect } from "react";

import ItemCard from "../ItemCard";
import ItemLinks from "../ItemLinks";

const DesktopCharging = ({ hoverCharging, setHoverCharging }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  useEffect(() => {
    if (hoverCharging) {
      setIsTransitioning(true);
      const timeoutId = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // 500ms is the duration of the transition
      return () => clearTimeout(timeoutId); // Clean up the timeout if the component is unmounted
    }
  }, [hoverCharging]);
  return (
    <>
      <div
        onMouseLeave={() => setHoverCharging(false)}
        className={`absolute top-0 z-10 left-0 w-full h-screen transform transition-all duration-500 ease-in-out ${
          hoverCharging || isTransitioning ? "backdrop-blur-sm" : ""
        }`}
      ></div>
      <div
        onMouseLeave={() => setHoverCharging(false)}
        className={`absolute top-0 left-0 w-full h-1/2 bg-white flex justify-center  items-center z-20 transform transition-all duration-500 ease-in-out ${
          hoverCharging || isTransitioning
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <div className={`flex px-4 gap-4 flex-wrap w-[620px]`}>
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
        </div>
        <div className="w-[1px] h-80 bg-gray-400 mx-10"></div>

        <div className="w-52 gap-2 flex flex-col text-xs">
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
    </>
  );
};

export default DesktopCharging;
