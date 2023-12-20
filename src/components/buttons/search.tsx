import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { useState } from "react";

const Search = () => {
  const [seeSearch, ActivateSS] = useState(false);

  function setSearch() {
    ActivateSS(!seeSearch);
  }
  function addClass() {
    if (seeSearch) {
      return "max-sm:absolute";
    }else{ return 'max-sm:hidden'}
  }

  return (
    <div className="flex m-auto justify-center max-sm:justify-end border-2 rounded-tl-full rounded-bl-full lg:rounded-full border-primaryColor bg-primaryColor rounded-br-full rounded-tr-full ">
      <form className=" m-auto flex justify-center  ">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className={`outline-0 px-4 py-2 xl:w-[40rem] border-2 rounded-tl-full rounded-bl-full rounded-r-full border-primaryColor top-[6rem] m-auto sm:static bg-backgroundColor ${addClass()} `}
        />
        <label
          htmlFor="search"
          onClick={setSearch}
          className="m-auto h-[100%] cursor-pointer"
        >
          <RiSearch2Line className=" text-[2rem] mx-2 xl:w-[10rem] text-backgroundColor" />
        </label>
      </form>
    </div>
  );
};

export default Search;
