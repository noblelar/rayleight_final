function Button({
  text,
  bgcolor,
  a_type,
  onClick,
  classN,
}: {
  text: string;
  bgcolor: string;
  a_type: string;
  onClick: () => void;
  classN: string;
}) {
  return (
    <button
      type="submit"
      className={`rounded-md bg-${bgcolor} py-4 px-9 text-base font-medium text-backgroundColor transition duration-300 ease-in-out hover:shadow-signUp ${classN} `}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
