import React from "react";
import { useState, useEffect } from "react";

import ItemCard from "../ItemCard";
import ItemLinks from "../ItemLinks";

const DesktopEnergy = ({ hoverEnergy, setHoverEnergy }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (hoverEnergy) {
      setIsTransitioning(true);
      const timeoutId = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // 500ms is the duration of the transition
      return () => clearTimeout(timeoutId); // Clean up the timeout if the component is unmounted
    }
  }, [hoverEnergy]);

  return (
    <>
      <div
        onMouseLeave={() => setHoverEnergy(false)}
        className={`absolute top-0 z-10 left-0 w-full h-screen transform transition-all duration-400 ease-in-out ${
          hoverEnergy && isTransitioning ? "backdrop-blur-sm" : ""
        }`}
      ></div>
      <div
        onMouseLeave={() => setHoverEnergy(false)}
        className={`absolute top-0 left-0 w-full h-1/2 bg-white flex justify-center  items-center z-20 transform transition-all duration-500 ease-in-out ${
          hoverEnergy || isTransitioning
            ? "opacity-100 visible"
            : "opacity-0 invisible "
        }`}
      >
        <div className={`flex px-4 gap-4 flex-wrap w-[620px]`}>
          <ItemCard
            title="Solar Panels"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Panels.png"
          />
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
        </div>
        <div className="w-[1px] h-80 bg-gray-400 mx-10"></div>

        <div className="w-52 gap-2 flex flex-col text-xs">
          <ItemLinks title="Schedule a Consultation" />
          <ItemLinks title="Why Solar" />
          <ItemLinks title="Incentives" />
          <ItemLinks title="Support" />
          <ItemLinks title="Partner with Tesla" />
          <ItemLinks title="Commercial" />
          <ItemLinks title="Utilities" />
        </div>
      </div>
    </>
  );
};

export default DesktopEnergy;
