import Link from "next/link";
import { menuItems } from "@/components/utils";
import { usePathname } from "next/navigation";
import { IMenuItem } from "@/components/utils/types";

let Submenus = [];
menuItems.forEach((menuI) => {
  Submenus.push(menuI.submenuof);
});

const NavBut = ({
  menu,
  idNumber,
  toggle,
}: {
  menu: IMenuItem;
  idNumber: number;
  toggle: () => void;
}) => {
  let hasSubmenu = false;

  const activePath = usePathname();

  // const [eventValue, setEventValue] = useState(false);

  const handleActiveNav = (path: string) => {
    if (activePath == path) {
      return "text-primaryColor max-lg:bg-backgroundColor max-lg:text-[2rem]  ";
    }
  };

  return (
    <li
      className={` hover:text-primaryColor hover:scale-110 max-lg:text-backgroundColor max-lg:text-[1.6rem] font-mulish ${handleActiveNav(
        menu.path
      )} my-[5%] `}
    > 
      <Link
        onClick={toggle}
        href={menu.path}
        className={`  ${handleActiveNav(
          menu.path
        )}  `}
      >
        
        {menu.label}

        {/* Drop Down Arrow Section */}
        </Link>

    </li>
  );
};

export default NavBut;
