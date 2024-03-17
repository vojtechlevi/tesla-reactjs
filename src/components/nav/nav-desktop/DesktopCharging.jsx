import React from "react";
import { useState, useEffect } from "react";

import ItemCard from "../ItemCard";
import ItemLinks from "../ItemLinks";

const DesktopCharging = ({ activeMenu, setActiveMenu, className }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (activeMenu) {
      setIsTransitioning(true);
      const timeoutId = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // 500ms is the duration of the transition
      return () => clearTimeout(timeoutId); // Clean up the timeout if the component is unmounted
    }
  }, [activeMenu]);

  useEffect(() => {
    if (activeMenu === "charging") {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [activeMenu]);
  return (
    <>
      <div
        onMouseEnter={() => setActiveMenu(false)}
        className={`absolute top-0 left-0 w-full h-screen transform transition-all duration-400 ease-in-out ${
          activeMenu || isTransitioning ? "backdrop-blur-sm" : ""
        }`}
      ></div>
      <div
        onMouseLeave={() => setActiveMenu(false)}
        className={`absolute top-0 left-0 w-full h-1/2 flex justify-center items-center transform transition-opacity duration-500 ease-in-out ${className} ${
          activeMenu === "charging" ? "z-20" : "z-0"
        }`}
      >
        <div className={`flex px-4 gap-4 flex-wrap w-[620px]`}>
          <ItemCard
            className={`${animate ? "do-animation" : "opacity-0"}`}
            title="Charging"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Charging.png"
          />
          <ItemCard
            className={`${animate ? "do-animation-2" : "opacity-0"}`}
            title="Home Charging"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Home-Charging.png"
          />
          <ItemCard
            className={`${animate ? "do-animation-3" : "opacity-0"}`}
            title="Supercharging"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Supercharging-NA.png"
          />
        </div>

        <div className="w-[1px] h-80 bg-gray-400 mx-10"></div>

        <div className="w-52 gap-2 flex flex-col text-xs">
          <ItemLinks
            title="Help Me Charge"
            className={`${animate ? "do-animation" : "opacity-0"}`}
          />
          <ItemLinks
            title="Charging Calculator"
            className={`${animate ? "do-animation-2" : "opacity-0"}`}
          />
          <ItemLinks
            title="Trip Planner"
            className={`${animate ? "do-animation-3" : "opacity-0"}`}
          />
          <ItemLinks
            title="Charging With NACS"
            className={`${animate ? "do-animation-4" : "opacity-0"}`}
          />
          <ItemLinks
            title="Supercharger Voting"
            className={`${animate ? "do-animation-5" : "opacity-0"}`}
          />
          <ItemLinks
            title="Host a Supercharger"
            className={`${animate ? "do-animation-6" : "opacity-0"}`}
          />
          <ItemLinks
            title="Commercial Charging"
            className={`${animate ? "do-animation-7" : "opacity-0"}`}
          />
          <ItemLinks
            title="Host Wall Connectors"
            className={`${animate ? "do-animation-8" : "opacity-0"}`}
          />
        </div>
      </div>
    </>
  );
};

export default DesktopCharging;
