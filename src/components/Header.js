import React from "react";

import Socials from "./Socials";
import MobileNav from "./MobileNav";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    // <header className="bg-pink-200 fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center justify-between">
    //   <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
    //   <MobileNav />
    //     <nav className="hidden lg:flex gap-x-12 font-semibold">
    //       <Link
    //         to={"/"}
    //         className="text-[#696c6d] hover:text-primary transition"
    //       >
    //         خانه
    //       </Link>
    //       <Link
    //         to={"/about"}
    //         className="text-[#696c6d] hover:text-primary transition"
    //       >
    //         درباره ما
    //       </Link>
    //       <Link
    //         to={"/portfolio"}
    //         className="text-[#696c6d] hover:text-primary transition"
    //       >
    //         نمونه کار
    //       </Link>
    //       <Link
    //         to={"/contact"}
    //         className="text-[#696c6d] hover:text-primary transition"
    //       >
    //         ارتباط با ما
    //       </Link>
    //     </nav>
    //     <Link to={"/"} className="max-w-[200px]">
    //       <h1 className="text-3xl text-[#696c6d]">
    //         حسین <span className="text-red-400">آتلیه</span>
    //       </h1>
    //     </Link>
    //   </div>
    //   <Socials />
    // </header>
    <header className="bg-pink-200 fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center justify-between">
      <div className="flex items-center justify-between w-full">
        <MobileNav/>
        <nav className="hidden xl:flex gap-x-12 font-semibold">
           <Link
             to={"/"}
             className="text-[#696c6d] hover:text-primary transition"
           >
             خانه
           </Link>
           <Link
             to={"/about"}
             className="text-[#696c6d] hover:text-primary transition"
           >
             درباره ما
           </Link>
           <Link
             to={"/portfolio"}
             className="text-[#696c6d] hover:text-primary transition"
           >
             نمونه کار
           </Link>
           <Link
             to={"/contact"}
             className="text-[#696c6d] hover:text-primary transition"
           >
             ارتباط با ما
           </Link>
         </nav>
         <Socials/>
         <Link to={"/"} className="max-w-[200px]">
           <h1 className="text-3xl text-[#696c6d]">
             حسین <span className="text-red-400">آتلیه</span>
           </h1>
         </Link>
      </div>
    </header>
  )
};

export default Header;
