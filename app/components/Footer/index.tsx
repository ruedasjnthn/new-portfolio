import Image from "next/image";
import Link from "next/link";

import { menuList, socials } from "@/app/data/menu";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 flex h-[22.125rem] w-full flex-col items-center justify-center gap-y-10 bg-primary-gray-blue md:h-20 md:flex-row md:justify-between md:px-10 xl:px-40">
      <div className="flex flex-col gap-y-10 md:flex-row md:items-center md:gap-x-12">
        <Image
          src="/images/icons/logo-light.png"
          width={60}
          height={32}
          alt=""
        />
        <ul className="flex flex-col gap-y-8 md:flex-row md:gap-x-11">
          {menuList.map((menu, index) => {
            return (
              <li
                key={index}
                className="cursor-pointer text-center text-xs text-white"
              >
                {menu.name}
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="flex gap-x-4">
        {socials.map((social, index) => {
          const { name, url, width, height } = social;
          return (
            <li key={index} className="cursor-pointer">
              <Link href={url} target="_blank">
                <Image
                  src={`/images/icons/${name}.png`}
                  width={width}
                  height={height}
                  alt=""
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
