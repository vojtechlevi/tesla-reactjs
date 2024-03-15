import React from "react";
import HeroSlider from "./HeroSlider";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto/Homepage-Model-Y-Promo-Desktop-v2.mp4"
        />
        <HeroSlider />
      </div>
      <div className="w-full h-screen relative">
        <img
          className="w-full h-full object-cover"
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop"
          alt=""
          srcset=""
        />
        <div className=" absolute w-full h-full top-0 flex justify-end items-center flex-col">
          <div className=" flex flex-col justify-center items-center mb-[320px]">
            <h2 className="text-5xl font-normal">Model Y</h2>
            <p className="text-lg font-medium">From $36,490*</p>
            <p className="text-xs">After Federal Tax Credit</p>
          </div>
          <div className="mb-14 max-w-[90%]">
            <div className="text-sm flex flex-col md:flex-row justify-center items-center mb-10 w-full">
              <button className="bg-slate-50 p-2 px-8 rounded font-medium text-md w-full">
                Shop Available
              </button>
              <button className=" bg-gray-500 text-slate-50 p-2 px-10 mt-4 md:mt-0 md:ml-6 w-full rounded font-medium text-md">
                Demo Drive
              </button>
            </div>
            <p className="text-xs text-center">
              *Price before incentives is $43,990, excluding taxes and fees.
              Subject to change.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-screen relative">
        <img
          className="w-full h-full object-cover"
          src="https://digitalassets-secure.tesla.com/image/upload/f_auto,q_auto/xufyfcvqhmq36szytod7.jpg"
          alt=""
          srcset=""
        />
        <div className=" absolute w-full h-full top-0 flex justify-end items-center flex-col">
          <div className=" flex flex-col justify-center items-center mb-[320px]">
            <h2 className="text-3xl font-light">Reengineered</h2>
            <p className="text-5xl font-medium">Model 3</p>
            <p className="text-lg font-light">Lease starting at $329/mo*</p>
          </div>
          <div className="mb-14 max-w-[90%]">
            <div className="text-sm flex flex-col md:flex-row justify-center items-center mb-10 w-full">
              <button className="bg-slate-200 p-2 px-8 rounded font-medium text-md w-full">
                Custom Order
              </button>
              <button className=" bg-gray-700 text-slate-50 p-2 px-8 mt-4 md:mt-0 md:ml-6 rounded font-medium text-md w-full">
                Demo Drive
              </button>
            </div>
            <p className="text-xs text-center">
              *Excludes taxes and fees with price subject to change. Available
              in select states. <span className="underline">See Details</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-screen relative">
        <img
          className="w-full h-full object-cover"
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD"
          alt=""
          srcset=""
        />
        <div className=" absolute w-full h-full top-0 flex justify-end items-center flex-col">
          <div className=" flex flex-col justify-center items-center mb-[310px]">
            <h2 className="text-5xl font-normal">Model X</h2>
            <p className="text-lg font-medium">From $68,590*</p>
            <p className="text-xs">
              After Federal Tax Credit & Est. Gas Savings
            </p>
          </div>
          <div className="mb-14 max-w-[90%]">
            <div className="text-sm flex flex-col md:flex-row justify-center items-center mb-10 w-full">
              <button className="bg-slate-50 p-2 px-8 rounded font-medium text-md w-full">
                Custom Order
              </button>
              <button className=" bg-gray-500 text-slate-50 p-2 px-10 mt-4 md:mt-0 md:ml-6 w-full rounded font-medium text-md">
                Demo Drive
              </button>
            </div>
            <p className=" text-white text-xs text-center mt-2">
              *Price before incentives and savings is $79,990, excluding taxes
              and fees. Subject to change.
            </p>
            <p className="underline text-white text-xs text-center">
              Learn about est. gas savings.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-screen relative">
        <img
          className="w-full h-full object-cover"
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD-6.22.jpg"
          alt=""
          srcset=""
        />
        <div className=" absolute w-full h-full top-0 flex justify-end items-center flex-col">
          <div className=" flex flex-col justify-center items-center mb-[310px]">
            <h2 className="text-5xl font-normal">Model S</h2>
            <p className="text-lg font-medium">From $71,090*</p>
            <p className="text-xs">After Est. Gas Savings</p>
          </div>
          <div className="mb-14 max-w-[90%]">
            <div className="text-sm flex flex-col md:flex-row justify-center items-center mb-10 w-full">
              <button className="bg-slate-50 p-2 px-8 rounded font-medium text-md w-full">
                Custom Order
              </button>
              <button className=" bg-gray-500 text-slate-50 p-2 px-10 mt-4 md:mt-0 md:ml-6 w-full rounded font-medium text-md">
                Demo Drive
              </button>
            </div>
            <p className=" text-xs text-center mt-2">
              *Price before incentives and savings is $79,990, excluding taxes
              and fees. Subject to change.
            </p>
            <p className="underline text-xs text-center">
              Learn about est. gas savings.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-screen relative">
        <img
          className="w-full h-full object-cover"
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Cybertruck-Desktop.jpg"
          alt=""
          srcset=""
        />
        <div className=" absolute w-full h-full top-0 flex justify-end items-center flex-col">
          <div className="mb-14 w-[90%]">
            <div className="text-sm flex flex-col md:flex-row justify-center items-center mb-10 w-full">
              <button className="bg-slate-50 p-2 px-8 rounded font-medium text-md w-full md:w-[300px]">
                Order Now
              </button>
              <button className=" bg-gray-800 text-slate-50 p-2 px-10 mt-4 md:mt-0 md:ml-6 w-full rounded font-medium text-md md:w-[300px]">
                Demo Drive
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen relative">
        <img
          className="w-full h-full object-cover"
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarPanels-01-Desktop"
          alt=""
          srcset=""
        />
        <div className=" absolute w-full h-full top-0 flex justify-end items-center flex-col">
          <div className=" flex flex-col justify-center items-center mb-[310px]">
            <h2 className="text-4xl text-white font-normal">Solar Panels</h2>
            <p className="text-md text-white underline font-thin ">
              Schedule a Virtual Consultation
            </p>
          </div>
          <div className="mb-14 w-[90%]">
            <div className="text-sm flex flex-col md:flex-row justify-center items-center mb-10 w-full">
              <button className="bg-slate-50 p-2 px-8 rounded font-medium text-md w-full md:w-[200px]">
                Order Now
              </button>
              <button className=" bg-gray-500/40 backdrop-blur-sm text-slate-50 p-2 px-10 mt-4 md:mt-0 md:ml-6 w-full rounded font-medium text-md md:w-[200px]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen relative">
        <img
          className="w-full h-full object-cover"
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Desktop-Global"
          alt=""
          srcset=""
        />
        <div className=" absolute w-full h-full top-0 flex justify-end items-center flex-col">
          <div className=" flex flex-col justify-center items-center mb-[310px]">
            <h2 className="text-4xl font-normal">Solar Roof</h2>
            <p className="text-md font-thin ">
              Produce Clean Energy From Your Roof
            </p>
          </div>
          <div className="mb-14 w-[90%]">
            <div className="text-sm flex flex-col md:flex-row justify-center items-center mb-10 w-full">
              <button className="bg-slate-50 p-2 px-8 rounded font-medium text-md w-full md:w-[200px]">
                Order Now
              </button>
              <button className=" bg-gray-500/40 backdrop-blur-sm text-slate-50 p-2 px-10 mt-4 md:mt-0 md:ml-6 w-full rounded font-medium text-md md:w-[200px]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen relative">
        <img
          className="w-full h-full object-cover"
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-01-Desktop.jpg"
          alt=""
          srcset=""
        />
        <div className=" absolute w-full h-full top-0 flex justify-end items-center flex-col">
          <div className=" flex flex-col justify-center items-center mb-[310px]">
            <h2 className="text-4xl font-normal">Powerwall</h2>
          </div>
          <div className="mb-14 w-[90%]">
            <div className="text-sm flex flex-col md:flex-row justify-center items-center mb-10 w-full">
              <button className="bg-slate-50 p-2 px-8 rounded font-medium text-md w-full md:w-[200px]">
                Order Now
              </button>
              <button className=" bg-gray-500/40 backdrop-blur-sm text-slate-50 p-2 px-10 mt-4 md:mt-0 md:ml-6 w-full rounded font-medium text-md md:w-[200px]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen relative">
        <img
          className="w-full h-full object-cover"
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg"
          alt=""
          srcset=""
        />
        <div className=" absolute w-full h-full top-0 flex justify-end items-center flex-col">
          <div className=" flex flex-col justify-center items-center mb-[430px]">
            <h2 className="text-4xl font-normal">Accessories</h2>
          </div>
          <div className="mb-14 w-[90%]">
            <div className="text-sm flex flex-col md:flex-row justify-center items-center mb-10 w-full">
              <button className="bg-slate-50 p-2 px-8 rounded font-medium text-md w-full md:w-[200px]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
