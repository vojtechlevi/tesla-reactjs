import React from "react";
import { ChevronLeft, X } from "lucide-react";

const ItemNav = ({ title, menu, setMenu, setSelectedItem }) => {
  const handleItem = (i) => {
    setSelectedItem(i);
  };
  const handleMenu = () => {
    setMenu(!menu);
    if (menu) {
      handleItem(null);
    }
  };
  return (
    <>
      <div className={`flex justify-between items-center p-4 `}>
        <button
          onClick={() => handleItem(null)}
          className=" hover:bg-black/10 p-1 rounded cursor-pointer"
        >
          <ChevronLeft />
        </button>
        <h2 className="text-sm">{title}</h2>
        <button
          onClick={handleMenu}
          className=" hover:bg-black/10 p-1 rounded  "
        >
          <X />
        </button>
      </div>
    </>
  );
};

export default ItemNav;
