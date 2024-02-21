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
  // {
  //   id: "newhere",
  //   label: "New Here?",
  //   path: "/newhere",
  //   submenu: [],
  //   submenuof: "",
  // },

  {
    id: "aboutus",
    label: "About Us",
    path: "/aboutus",
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
  // {
  //   id: "events",
  //   label: "Event",
  //   path: "/events",
  //   submenu: [],
  //   submenuof: "",
  // },

  // {
  //   id: "hallhire",
  //   label: "Hall Hire",
  //   path: "/hallhire",
  //   submenu: [],
  //   submenuof: "events",
  // },
  // {
  //   id: "resources",
  //   label: "Resources",
  //   path: "/resources",
  //   submenu: [],
  //   submenuof: "",
  // },

  {
    id: "contact",
    label: "Contact Us",
    path: "/contact",
    submenu: [],
    submenuof: "",
  },
  {
    id: "calender",
    label: "Calender",
    path: "/calender",
    submenu: [],
    submenuof: "",
  },
  // ! End of main menus
  //  * Subnavs

  {
    id: "history",
    label: "History",
    // path: "/history",
    // path: "/aboutus/history",
    path: "/aboutus?tab=history",
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
    id: "location",
    label: "Location",
    path: "/aboutus?tab=location",
    submenu: [],
    submenuof: "aboutus",
  },

  {
    id: "weddings",
    label: "Weddings",
    path: "/aboutus?tab=weddings",
    submenu: [],
    submenuof: "aboutus",
  },

  {
    id: "baptism",
    label: "Baptism",
    path: "/aboutus?tab=baptism",
    submenu: [],
    submenuof: "aboutus",
  },

  {
    id: "funerals",
    label: "Funerals & Bereavement",
    path: "/aboutus?tab=funerals",
    submenu: [],
    submenuof: "aboutus",
  },
  {
    id: "childrensessions",
    label: "Children Sessions",
    path: "/activities?tab=childrensessions",
    submenu: [],
    submenuof: "activities",
  },
  {
    id: "youthprogramme",
    label: "Youth Programme",
    path: "/activities?tab=youthprogramme",
    submenu: [],
    submenuof: "activities",
  },
  {
    id: "adultprogramme",
    label: "Adult programme",
    path: "/activities?tab=adultprogramme",
    submenu: [],
    submenuof: "activities",
  },
  {
    id: "community",
    label: "Community ",
    path: "/activities?tab=community",
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
