interface Menu {
  name: string;
  path: string;
}

export const menuList: Menu[] = [
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

interface Social {
  name: string;
  url: string;
  width: number;
  height: number;
}

export const socials: Social[] = [
  {
    name: "github",
    url: "https://github.com/ruedasjnthn",
    width: 25,
    height: 24,
  },
  {
    name: "twitter",
    url: "https://twitter.com/jaydi_dev",
    width: 24,
    height: 24,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/jonathan-ruedas-461b5513a",
    width: 24,
    height: 19.5,
  },
];
