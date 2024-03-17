import React from "react";

const ItemLinks = ({ title }) => {
  return (
    <>
      <div className="w-full items-center px-4 py-2 hover:bg-gray-500/10 rounded cursor-pointer">
        <h2 className="w-full">{title}</h2>
      </div>
    </>
  );
};

export default ItemLinks;
