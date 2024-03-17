import React from "react";
import { useState, useEffect } from "react";

const HeroSlider = () => {
  const [show, setShow] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow((prevShow) => {
        return (prevShow + 1) % 4;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="absolute  w-full h-full top-0 flex justify-center flex-col text-white ">
        <div className="max-w-[60%] mx-auto absolute left-4 md:left-10 bottom-6 md:max-w-[400px]">
          <div className="flex gap-2 ">
            <div
              className={`w-4 h-4 rounded-full ${
                show === 0 ? "bg-white" : "bg-black/50"
              }`}
            ></div>
            <div
              className={`w-4 h-4 rounded-full ${
                show === 1 ? "bg-white" : "bg-black/50"
              }`}
            ></div>
            <div
              className={`w-4 h-4 rounded-full ${
                show === 2 ? "bg-white" : "bg-black/50"
              }`}
            ></div>
            <div
              className={`w-4 h-4 rounded-full ${
                show === 3 ? "bg-white" : "bg-black/50"
              }`}
            ></div>
          </div>
          <div className={show === 0 ? "block" : "hidden"}>
            <h2 className="text-4xl md:mt-5">
              Model Y Starting at $36,490 After Federal Tax Credit
            </h2>
            <p className="md:my-5">
              Eligible buyers qualify for a $7,500 federal tax credit. Applied
              at time of Model Y delivery.
              <span className="underline">See Details</span>
            </p>
            <button className="bg-white text-black w-full p-2 mt-4 rounded">
              Shop Available
            </button>
          </div>
          <div className={show === 1 ? "block" : " hidden"}>
            <h2 className="text-4xl md:mt-5">
              Up to 10,000 Free Supercharging Miles
            </h2>
            <p className="md:my-5">
              Take delivery of a new Model S, Model X or Model Y by March 31 and
              receive 5,000 free Supercharging miles for cash or finance
              purchases. Trade in a vehicle and receive 5,000 miles when you
              take delivery by March 31.
              <span className="underline">See Terms</span>
            </p>
            <button className="bg-white text-black w-full p-2 mt-4 rounded">
              Shop Available
            </button>
          </div>
          <div className={show === 2 ? "block" : "hidden"}>
            <h2 className="text-4xl md:mt-5">New Model 3</h2>
            <p className="md:my-5">
              Reengineered from the ground up. Be the first to get behind the
              wheel. Demo drive now.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-black w-full p-2 mt-4 rounded">
                Demo Drive
              </button>
              <button className="bg-gray-500 text-white w-full p-2 mt-4 rounded">
                Custom Order
              </button>
            </div>
          </div>
          <div className={show === 3 ? "block" : "hidden"}>
            <h2 className="text-4xl md:mt-5">Find the Tesla for You</h2>
            <p className="md:my-5">
              Discover which model is best for you based on your budget, driving
              habits and lifestyle.
            </p>
            <button className="bg-white text-black w-full p-2 mt-4 rounded">
              Help me choose
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
