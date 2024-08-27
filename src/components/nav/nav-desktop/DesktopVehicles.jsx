import React from "react";
import { useState, useEffect } from "react";
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
        className={`absolute z-10 top-0 left-0 w-full h-screen transform transition-all duration-600 ease-in-out ${
          activeMenu || isTransitioning ? "backdrop-blur-sm" : ""
        }`}
      ></div>
      <div
        onMouseLeave={() => setActiveMenu(false)}
        className={`absolute top-0 left-0 w-full h-2/3 flex justify-center items-center transform transition-all duration-500 ease-in-out ${className} ${
          activeMenu === "vehicles" ? "z-20" : "z-0"
        }`}
      >
        <div className={`flex gap-4 flex-wrap w-[620px] mb-10  `}>
          <ItemCard
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            className={`${animate ? "do-animation" : "opacity-0"}`}
            title="Model S"
            pageLink="/modelS"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png"
          />
          <ItemCard
            setActiveMenu={setActiveMenu}
            className={`${animate ? "do-animation-2" : "opacity-0"}`}
            title="Model 3"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3-LHD.png"
            pageLink="/model3"
          />
          <ItemCard
            setActiveMenu={setActiveMenu}
            className={`${animate ? "do-animation-3" : "opacity-0"}`}
            title="Model X"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png"
            pageLink="/modelX"
          />
          <ItemCard
            setActiveMenu={setActiveMenu}
            className={`${animate ? "do-animation-4" : "opacity-0"}`}
            title="Model Y"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png"
            pageLink="/modelY"
          />
          <ItemCard
            setActiveMenu={setActiveMenu}
            className={`${animate ? "do-animation-5" : "opacity-0"}`}
            title="Cybertruck"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Cybertruck-1x.png"
            pageLink="/cybertruck"
          />
          <ItemCard
            setActiveMenu={setActiveMenu}
            className={`${animate ? "do-animation-6" : "opacity-0"}`}
            title="Help Me Choose"
            imageLink="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-HMC-RedBlue-LHD.png"
            pageLink="/choose"
          />
        </div>
        <div className="w-[1px] h-80 bg-gray-400 mx-20"></div>

        <div className="w-52 my-20 gap-2 flex flex-col text-xs">
          <ItemLinks
            setActiveMenu={setActiveMenu}
            className={`${animate ? "do-animation" : "opacity-0"}`}
            title="Inventory"
            pageLink="/new"
          />
          <ItemLinks
            setActiveMenu={setActiveMenu}
            className={`${animate ? "do-animation-2" : "opacity-0"}`}
            title="Used Cars"
            pageLink="/used"
          />
          <ItemLinks
            setActiveMenu={setActiveMenu}
            className={`${animate ? "do-animation-3" : "opacity-0"}`}
            title="Demo Drive"
            pageLink="/drive"
          />
          <ItemLinks
            setActiveMenu={setActiveMenu}
            className={`${animate ? "do-animation-4" : "opacity-0"}`}
            title="Trade-in"
            pageLink="/tradein"
          />
          <ItemLinks
            setActiveMenu={setActiveMenu}
            className={`${animate ? "do-animation-5" : "opacity-0"}`}
            title="Compare"
            pageLink="/compare"
          />
          <ItemLinks
            setActiveMenu={setActiveMenu}
            className={`${animate ? "do-animation-6" : "opacity-0"}`}
            title="Help Me Charge"
            pageLink="/charge"
          />
          <ItemLinks
            setActiveMenu={setActiveMenu}
            className={`${animate ? "do-animation-7" : "opacity-0"}`}
            title="Fleet"
            pageLink="/fleet"
          />
          <ItemLinks
            setActiveMenu={setActiveMenu}
            className={`${animate ? "do-animation-8" : "opacity-0"}`}
            title="Semi"
            pageLink="/semi"
          />
          <ItemLinks
            setActiveMenu={setActiveMenu}
            className={`${animate ? "do-animation-9" : "opacity-0"}`}
            title="Roadster"
            pageLink="/roadster"
          />
        </div>
      </div>
    </>
  );
};

export default DesktopVehicles;
