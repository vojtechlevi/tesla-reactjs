import React from "react";
import { useState, useEffect } from "react";

import ItemCard from "../ItemCard";
import ItemLinks from "../ItemLinks";

const DesktopEnergy = ({ activeMenu, setActiveMenu, className }) => {
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
    if (activeMenu === "energy") {
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
        className={`absolute top-0 left-0 w-full h-1/2  flex justify-center  items-center transform transition-all duration-500 ease-in-out ${className} ${
          activeMenu === "energy" ? "z-20" : "z-0"
        }`}
      >
        <div className={`flex px-4 gap-4 flex-wrap w-[620px]`}>
          <ItemCard
            className={`${animate ? "do-animation" : "opacity-0"}`}
            title="Solar Panels"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Panels.png"
          />
          <ItemCard
            className={`${animate ? "do-animation-2" : "opacity-0"}`}
            title="Solar Roof"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Roof.png"
          />
          <ItemCard
            className={`${animate ? "do-animation-3" : "opacity-0"}`}
            title="Power Wall"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Powerwall-US.png"
          />
          <ItemCard
            className={`${animate ? "do-animation-4" : "opacity-0"}`}
            title="Megapack"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Megapack.png"
          />
        </div>
        <div className="w-[1px] h-80 bg-gray-400 mx-10"></div>

        <div className="w-52 gap-2 flex flex-col text-xs">
          <ItemLinks
            title="Schedule a Consultation"
            className={`${animate ? "do-animation" : "opacity-0"}`}
          />
          <ItemLinks
            title="Why Solar"
            className={`${animate ? "do-animation-2" : "opacity-0"}`}
          />
          <ItemLinks
            title="Incentives"
            className={`${animate ? "do-animation-3" : "opacity-0"}`}
          />
          <ItemLinks
            title="Support"
            className={`${animate ? "do-animation-4" : "opacity-0"}`}
          />
          <ItemLinks
            title="Partner with Tesla"
            className={`${animate ? "do-animation-5" : "opacity-0"}`}
          />
          <ItemLinks
            title="Commercial"
            className={`${animate ? "do-animation-6" : "opacity-0"}`}
          />
          <ItemLinks
            title="Utilities"
            className={`${animate ? "do-animation-7" : "opacity-0"}`}
          />
        </div>
      </div>
    </>
  );
};

export default DesktopEnergy;
