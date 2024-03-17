import React from "react";
import ItemNav from "../ItemNav";
import ItemLinks from "../ItemLinks";

const MobileDiscover = ({ menu, setMenu, setSelectedItem }) => {
  return (
    <>
      <div
        className={`absolute w-full h-screen top-0 z-10 left-0 bg-white overflow-scroll`}
      >
        <ItemNav
          title="Discover"
          menu={menu}
          setMenu={setMenu}
          setSelectedItem={setSelectedItem}
        />
        <div className={`flex px-4 flex-wrap justify-center `}>
          <div className="w-full gap-6 flex flex-col mb-10 mt-4">
            <ItemLinks title="Demo Drive" />
            <ItemLinks title="Insurance" />
            <ItemLinks title="Video Guides" />
            <ItemLinks title="Customer Stories" />
            <ItemLinks title="Events" />
            <ItemLinks title="Find Us" />
            <ItemLinks title="Trip Planner" />
            <ItemLinks title="Find a Collision Center" />
            <ItemLinks title="Find a Certified Installer" />
            <ItemLinks title="About" />
            <ItemLinks title="Careers" />
            <ItemLinks title="Investor Relations" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileDiscover;
