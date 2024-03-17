import React from "react";

const ItemCard = ({ title, imageLink }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-4 w-[180px]">
        <img
          className="w-full h-full object-contain"
          src={imageLink}
          alt={title}
          srcset=""
        />
        <h3>{title}</h3>
        <div className="flex gap-2 text-sm">
          <p>Learn</p>
          <p>Order</p>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
