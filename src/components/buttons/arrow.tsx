import { IoIosArrowDown } from "react-icons/io";

const Arrow = ({ hover }: { hover: boolean }) => {

  return (
    <IoIosArrowDown 
      className={` text-[1.5rem] mx-1 transition-transform transform group-hover:text-primaryColor `}
    />
  );
};
export default Arrow;
