import React from "react";
import { Link } from "react-router-dom";

const ItemLinks = ({
  title,
  pageLink,
  className,
  setActiveMenu,
  toggleMenu,
}) => {
  return (
    <>
      <div
        className={`w-full items-center px-4 py-2 hover:bg-gray-500/10 rounded cursor-pointer ${className}`}
      >
        <Link to={pageLink} onClick={setActiveMenu || toggleMenu}>
          <h2 className="w-full">{title}</h2>
        </Link>
      </div>
    </>
  );
};

export default ItemLinks;
