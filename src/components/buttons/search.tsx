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
      return "absolute";
    } else {
      return "hidden";
    }
  }

  return (
    <div className=" flex bg-primaryColor border-2 rounded-full items-end justify-end  ">
      <form className=" m-auto flex justify-center">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className={`outline-0 px-4 py-2 border-2 rounded-tl-full rounded-bl-full rounded-r-full border-primaryColor top-[6rem] right-2 m-auto static bg-backgroundColor ${addClass()} `}
        />
        <label
          htmlFor="search"
          onClick={setSearch}
          className="mx-auto size-10 flex items-center justify-center cursor-pointer "
        >
          <RiSearch2Line className="text-[1.2rem]  text-backgroundColor bg-primaryColor" />
        </label>
      </form>
    </div>
  );
};

export default Search;
