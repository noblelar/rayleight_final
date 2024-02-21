function BlackButton({
  text,
  onClick,
  classN,
  time,
  icon,
}: {
  text: string;
  onClick: () => void;
  classN: string;
  time?: string;
  icon?: any;
}) {
  return (
    <button
      type="submit"
      className={`rounded-md py-2 px-3 text-base font-medium transition duration-300 ease-in-out hover:shadow-signUp ${classN} border flex justify-center items-center max-md:w-fit
       border-black `}
      onClick={onClick}
    >
      <span className=" !text-textColor fill-textColor pr-2  ">
        {icon ? icon : ""}
      </span>
      <span className=" text-black pr-1  ">{text + " "} </span>
      <span className=" text-textColor1">{time ? time : ""}</span>
    </button>
  );
}

export default BlackButton;


