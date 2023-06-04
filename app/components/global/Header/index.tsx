import Image from "next/image";
import Menubar from "./menubar";

interface Menu {
  name: string;
  path: string;
}

const menuList: Menu[] = [
  {
    name: "HOME",
    path: "",
  },
  {
    name: "PORTFOLIO",
    path: "",
  },
  {
    name: "CONTACT ME",
    path: "",
  },
];

const Header = () => {
  return (
    <section className="mt-8 flex h-8 w-full items-center justify-between px-8 md:mt-16 md:px-10 xl:px-40">
      <Image src="/images/logo.png" width={60} height={32} alt="" />
      <ul className="hidden gap-x-11 md:flex">
        {menuList.map((menu, index) => {
          return <li key={index}>{menu.name}</li>;
        })}
      </ul>
      <Menubar />
    </section>
  );
};

export default Header;
