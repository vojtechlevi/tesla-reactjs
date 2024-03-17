import React from "react";

const ItemLinks = ({ title, className }) => {
  return (
    <>
      <div
        className={`w-full items-center px-4 py-2 hover:bg-gray-500/10 rounded cursor-pointer ${className}`}
      >
        <h2 className="w-full">{title}</h2>
      </div>
    </>
  );
};

export default ItemLinks;
