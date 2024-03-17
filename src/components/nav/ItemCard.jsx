import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ title, imageLink, pageLink, className }) => {
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center mt-4 w-[180px] transform transition-all duration-500 ease-in-out ${className} `}
      >
        <Link to={pageLink}>
          <img
            className="w-full h-full object-contain"
            src={imageLink}
            alt={title}
            srcset=""
          />
        </Link>
        <h3>{title}</h3>
        <div className="flex gap-2 text-sm">
          <Link to={pageLink}>
            <p>Learn</p>
          </Link>
          <p>Order</p>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
