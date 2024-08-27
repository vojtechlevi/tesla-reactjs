import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({
  title,
  imageLink,
  pageLink,
  className,
  toggleMenu,
  setActiveMenu,
}) => {
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center my-4 mx-auto w-[180px] transform transition-all duration-500 ease-in-out ${className} `}
      >
        <Link to={pageLink} onClick={setActiveMenu || toggleMenu}>
          <img
            className="w-full h-full object-contain"
            src={imageLink}
            alt={title}
            srcset=""
          />
        </Link>
        <h3>{title}</h3>
        <div className="flex gap-2 text-sm text-center justify-center">
          <Link to={pageLink} onClick={setActiveMenu}>
            <p>Learn</p>
          </Link>
          <p>Order</p>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
