import { ChevronLeft, X } from "lucide-react";
import React from "react";

const MobileVehicles = ({ menu, setMenu, setSelectedItem }) => {
  const handleMenu = () => {
    setMenu(!menu);
    if (menu) {
      handleItem(null);
    }
    document.body.classList.toggle("overflow-hidden");
  };

  const handleItem = (i) => {
    setSelectedItem(i);
  };

  return (
    <>
      <div
        className={`absolute w-full h-screen top-0 z-100 left-0 bg-white overflow-scroll`}
      >
        <div className={`flex justify-between items-center p-4 `}>
          <button
            onClick={() => handleItem(null)}
            className=" hover:bg-black/10 p-1 rounded cursor-pointer"
          >
            <ChevronLeft />
          </button>
          <h2 className="text-sm">Vehicles</h2>
          <button
            onClick={handleMenu}
            className=" hover:bg-black/10 p-1 rounded  "
          >
            <X />
          </button>
        </div>
        <div className={`flex px-4 flex-wrap justify-center `}>
          <div className="flex flex-col justify-center items-center mt-4 w-[230px]">
            <img
              className="w-full h-full object-contain"
              src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png"
              alt=""
              srcset=""
            />
            <h3>Model S</h3>
            <div className="flex gap-2 text-sm">
              <p>Learn</p>
              <p>Order</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-4 w-[230px]">
            <img
              className="w-full h-full object-contain"
              src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3-LHD.png"
              alt=""
              srcset=""
            />
            <h3>Model 3</h3>
            <div className="flex gap-2 text-sm">
              <p>Learn</p>
              <p>Order</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-4 w-[230px]">
            <img
              className="w-full h-full object-contain"
              src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png"
              alt=""
              srcset=""
            />
            <h3>Model X</h3>
            <div className="flex gap-2 text-sm">
              <p>Learn</p>
              <p>Order</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-4 w-[230px]">
            <img
              className="w-full h-full object-contain"
              src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png"
              alt=""
              srcset=""
            />
            <h3>Model Y</h3>
            <div className="flex gap-2 text-sm">
              <p>Learn</p>
              <p>Order</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-4 w-[230px]">
            <img
              className="w-full h-full object-contain"
              src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Cybertruck-1x.png"
              alt=""
              srcset=""
            />
            <h3>Cybertruck</h3>
            <div className="flex gap-2 text-sm">
              <p>Learn</p>
              <p>Order</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-4 w-[230px]">
            <img
              className="w-full h-full object-contain"
              src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-HMC-RedBlue-LHD.png"
              alt=""
              srcset=""
            />
            <h3>Help Me Choose</h3>
            <div className="flex gap-2 text-sm">
              <p>Get Started</p>
            </div>
          </div>
          <div className="w-full h-[1px] mx-2 my-10 bg-slate-500/50"></div>
        </div>
        <div className="flex flex-col w-[92%] justify-center text-xl items-center mx-auto gap-4 mb-10">
          <div className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer">
            <h2>Inventory</h2>
          </div>
          <div className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer">
            <h2>Used Cars</h2>
          </div>
          <div className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer">
            <h2>Demo Drive</h2>
          </div>
          <div className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer">
            <h2>Trade In</h2>
          </div>
          <div className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer">
            <h2>Compare</h2>
          </div>
          <div className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer">
            <h2>Help Me Charge</h2>
          </div>
          <div className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer">
            <h2>Fleet</h2>
          </div>
          <div className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer">
            <h2>Semi</h2>
          </div>
          <div className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-500/10 rounded cursor-pointer">
            <h2>Roadster</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileVehicles;
