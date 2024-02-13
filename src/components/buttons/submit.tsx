function Button({
   text,
   bgcolor,
   onClick,
   classN,
 }: {
   text: string;
   bgcolor: string;
   onClick: () => void;
   classN: string;
 }) {
   return (
     <button
       type="submit"
       className={`rounded-md bg-${bgcolor} py-4 px-9 text-base font-medium transition duration-300 ease-in-out hover:shadow-signUp ${classN}  `}
       onClick={onClick}
     >
       {text}
     </button>
   );
 }
 
 export default Button;
 