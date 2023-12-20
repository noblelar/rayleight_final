import { IMenuItem } from "./types";
// , Option, FormControlItem

export const menuItems: IMenuItem[] = [
  {
    id: "home",
    label: "Welcome",
    path: "/",
    submenu: [],
    submenuof: "",
  },
  {
    id: "newhere",
    label: "New Here?",
    path: "/newhere",
    submenu: [],
    submenuof: "",
  },
  {
    id: "services",
    label: "Services",
    path: "/services",
    submenu: [],
    submenuof: "",
  },
  {
    id: "activities",
    label: "Activities",
    path: "/activities",
    submenu: [],
    submenuof: "",
  },
  {
    id: "events",
    label: "Event",
    path: "/events",
    submenu: [],
    submenuof: "",
  },

  {
    id: "hallhire",
    label: "Hall Hire",
    path: "/hallhire",
    submenu: [],
    submenuof: "events",
  },
  {
    id: "resources",
    label: "Resources",
    path: "/resources",
    submenu: [],
    submenuof: "",
  },
  {
    id: "aboutus",
    label: "About Us",
    path: "/aboutus",
    submenu: [],
    submenuof: "",
  },
  {
    id: "contact",
    label: "Contact",
    path: "/contact",
    submenu: [],
    submenuof: "",
  },
  // ! End of main menus
  //  * Subnavs

  {
    id: "history",
    label: "History",
    path: "/history",
    submenu: [],
    submenuof: "aboutus",
  },

  {
    id: "baptismal",
    label: "Baptismal & Holy Communion",
    path: "/baptismal",
    submenu: [],
    submenuof: "services",
  },
  // {
  //   id: "holycommunion",
  //   label: "Holy Communion",
  //   path: "/holycommunion",
  //   submenu: [],
  //   submenuof: "services",
  // },
  {
    id: "weddings",
    label: "Weddings",
    path: "/weddings",
    submenu: [],
    submenuof: "services",
  },
  {
    id: "funerals",
    label: "Funerals & Bereavement",
    path: "/funerals",
    submenu: [],
    submenuof: "services",
  },
  {
    id: "childrensessions",
    label: "Children Sessions",
    path: "/childrensessions",
    submenu: [],
    submenuof: "activities",
  },
  {
    id: "youthprogramme",
    label: "Youth Programme",
    path: "/youthprogramme",
    submenu: [],
    submenuof: "activities",
  },
  {
    id: "adultprogramme",
    label: "Adult programme",
    path: "/adultprogramme",
    submenu: [],
    submenuof: "activities",
  },
  {
    id: "community",
    label: "Community ",
    path: "/community",
    submenu: [],
    submenuof: "activities",
  },

  {
    id: "donate",
    label: "Donate ",
    path: "/donate",
    submenu: [],
    submenuof: "resources",
  },
  {
    id: "newsletters",
    label: "News Letters",
    path: "/newsletters",
    submenu: [],
    submenuof: "resources",
  },
  {
    id: "safeguarding",
    label: "Safeguarding",
    path: "/safeguarding",
    submenu: [],
    submenuof: "resources",
  },

  {
    id: "faqs",
    label: "FAQs",
    path: "/faqs",
    submenu: [],
    submenuof: "contact",
  },
];

// ! Resources Subnavs
