import React from "react";

import HeroSlider from "../../HeroSlider";
const ModelS = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center ">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto/Homepage-Model-Y-Promo-Desktop-v2.mp4"
        />
      </div>
    </>
  );
};

export default ModelS;
