"use client";
import { useState } from "react";

import { menuList } from "../../data/menu";

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button
        className={`flex min-h-full flex-col gap-y-1`}
        onClick={handleToggle}
      >
        <div
          className={`h-[1px] w-6 bg-primary-gray-blue transition-all ${
            isOpen ? "translate-y-[4.625px] -rotate-45" : "translate-y-0"
          } duration-300 ease-in-out`}
        />
        <div
          className={`h-[1px] w-6 bg-primary-gray-blue ${
            isOpen ? "opacity-0" : "opacity-1"
          } transition-opacity duration-100 ease-in-out`}
        />
        <div
          className={`h-[1px] w-6 bg-primary-gray-blue transition-all ${
            isOpen ? "-translate-y-[4.625px] rotate-45" : "translate-y-0"
          } duration-300 ease-in-out`}
        />
      </button>
      <div
        className={`absolute flex h-48 w-56 -translate-x-[12.5rem] translate-y-6 flex-col justify-center bg-primary-gray-blue ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        } transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-center gap-y-8">
          {menuList.map((menu, index) => {
            return (
              <li key={index} className="cursor-pointer text-xs text-white">
                {menu.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menubar;
