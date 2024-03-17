import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCard from "../ItemCard";
import ItemLinks from "../ItemLinks";

const DesktopVehicles = ({ hoverVehicles, setHoverVehicles }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (hoverVehicles) {
      setIsTransitioning(true);
      const timeoutId = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // 500ms is the duration of the transition
      return () => clearTimeout(timeoutId); // Clean up the timeout if the component is unmounted
    }
  }, [hoverVehicles]);

  return (
    <>
      <div
        onMouseEnter={() => setHoverVehicles(false)}
        className={`absolute top-0 z-10 left-0 w-full h-screen transform transition-all duration-400 ease-in-out ${
          hoverVehicles || isTransitioning ? "backdrop-blur-sm" : ""
        }`}
      ></div>
      <div
        onMouseLeave={() => setHoverVehicles(false)}
        className={`absolute top-0 left-0 w-full h-1/2  bg-white flex justify-center items-center z-20 transform transition-all duration-500 ease-in-out ${
          hoverVehicles || isTransitioning
            ? "opacity-100 visible "
            : "opacity-0 invisible"
        }`}
      >
        <div className={`flex px-4 gap-4 flex-wrap  w-[620px]`}>
          <Link to="/models">
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
        </div>
        <div className="w-[1px] h-80 bg-gray-400 mx-10"></div>

        <div className="w-52 gap-2 flex flex-col text-xs">
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
    </>
  );
};

export default DesktopVehicles;
