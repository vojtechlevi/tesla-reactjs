import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCard from "../ItemCard";
import ItemLinks from "../ItemLinks";

const DesktopVehicles = ({ activeMenu, setActiveMenu, className }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (activeMenu) {
      setIsTransitioning(true);
      const timeoutId = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [activeMenu]);

  useEffect(() => {
    if (activeMenu === "vehicles") {
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
        className={`absolute top-0 left-0 w-full h-52 mt-52  flex justify-center items-center transform transition-all duration-500 ease-in-out ${className} ${
          activeMenu === "vehicles" ? "z-20" : "z-0"
        }`}
      >
        <div className={`flex px-4 gap-4 flex-wrap w-[620px] `}>
          <ItemCard
            className={`${animate ? "do-animation" : "opacity-0"}`}
            title="Model S"
            pageLink="/modelS"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png"
          />
          <ItemCard
            className={`${animate ? "do-animation-2" : "opacity-0"}`}
            title="Model 3"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3-LHD.png"
            pageLink="/model3"
          />
          <ItemCard
            className={`${animate ? "do-animation-3" : "opacity-0"}`}
            title="Model X"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png"
            pageLink="/modelx"
          />
          <ItemCard
            className={`${animate ? "do-animation-4" : "opacity-0"}`}
            title="Model Y"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png"
            pageLink="/modely"
          />
          <ItemCard
            className={`${animate ? "do-animation-5" : "opacity-0"}`}
            title="Cybertruck"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Cybertruck-1x.png"
            pageLink="/cybertruck"
          />
          <ItemCard
            className={`${animate ? "do-animation-6" : "opacity-0"}`}
            title="Help Me Choose"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-HMC-RedBlue-LHD.png"
            pageLink="/choose"
          />
        </div>
        <div className="w-[1px] h-80 bg-gray-400 mx-10"></div>

        <div className="w-52 gap-2 flex flex-col text-xs">
          <ItemLinks
            title="Inventory"
            className={`${animate ? "do-animation" : "opacity-0"}`}
          />
          <ItemLinks
            title="Used Cars"
            className={`${animate ? "do-animation-2" : "opacity-0"}`}
          />
          <ItemLinks
            title="Demo Drive"
            className={`${animate ? "do-animation-3" : "opacity-0"}`}
          />
          <ItemLinks
            title="Trade-in"
            className={`${animate ? "do-animation-4" : "opacity-0"}`}
          />
          <ItemLinks
            title="Compare"
            className={`${animate ? "do-animation-5" : "opacity-0"}`}
          />
          <ItemLinks
            title="Help Me Charge"
            className={`${animate ? "do-animation-6" : "opacity-0"}`}
          />
          <ItemLinks
            title="Fleet"
            className={`${animate ? "do-animation-7" : "opacity-0"}`}
          />
          <ItemLinks
            title="Semi"
            className={`${animate ? "do-animation-8" : "opacity-0"}`}
          />
          <ItemLinks
            title="Roadster"
            className={`${animate ? "do-animation-9" : "opacity-0"}`}
          />
        </div>
      </div>
    </>
  );
};

export default DesktopVehicles;
