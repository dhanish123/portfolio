  import Link from "next/link";

  const NavLink = ({ href, title, onClick }) => {
    return (
      <Link
        href={href}
        // className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
        //      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded-md md:p-0 transition-all duration-300 
        //  hover:text-white hover:bg-[#1E1E1E] hover:border hover:border-[#00FFDD] hover:shadow-lg"
        // className="block py-1 px-[6px] text-[#ADB7BE] sm:text-xl rounded-md
        // hover:text-white hover:bg-[#1E1E1E] hover:border hover:border-[#00FFDD] hover:shadow-lg"
        className="block py-1 px-2 md:py-0.5 md:px-1.5 text-[#ADB7BE] sm:text-xl rounded-md transition-all duration-300 
           border border-transparent hover:text-white hover:bg-[#1E1E1E] hover:border-[#00FFDD] hover:shadow-lg"


        onClick={onClick}
      >
        {title}
      </Link>
    );
  };

  export default NavLink;



//   import Link from "next/link";

// const NavLink = ({ href, title, onClick }) => {
//   return (
//     <Link
//       href={href}
//       className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded-md md:p-0 transition-all duration-300 
//                  hover:text-white hover:bg-[#1E1E1E] hover:border hover:border-[#00FFDD] hover:shadow-lg"
//       onClick={onClick}
//     >
//       {title}
//     </Link>
//   );
// };

// export default NavLink;
