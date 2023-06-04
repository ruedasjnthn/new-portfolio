import Image from "next/image";

import Menubar from "./menubar";

import { menuList } from "@/app/data/menu";

const Header = () => {
  return (
    <header className="mt-8 flex h-8 w-full items-center justify-between px-8 md:mt-16 md:px-10 xl:px-40">
      <Image src="/images/icons/logo-dark.png" width={60} height={32} alt="" />
      <ul className="hidden gap-x-11 md:flex">
        {menuList.map((menu, index) => {
          return (
            <li
              key={index}
              className="cursor-pointer text-xs text-primary-gray-blue hover:text-primary-cyan"
            >
              {menu.name}
            </li>
          );
        })}
      </ul>
      <Menubar />
    </header>
  );
};

export default Header;
