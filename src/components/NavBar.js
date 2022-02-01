import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function NavBar() {
  return (
    <div className='w-screen py-2 shadow-md '>
      <div className='flex'>
        <img src="/images/logo.jpg" className='object-contain justify-start left-0 '/>
        <div className='w-screen justify-end flex'>
        <SearchIcon className='text-sky-600 m-3 scale-125 justify-end '/>
        <nav className="text-sky-600 font-bold my-3 mr-4 text-lg right-0 justify-end md:mr-7 md:ml-3 md:text-lg" >MENU</nav>
        {/* <ArrowForwardIosIcon/> */}

          
          {/* <CloseIcon/> */}
          {/* <div>
          <li>Guided Plans</li>
          <li>Shows</li>
          <li>Personalities</li>
          <li>Trusted Pros</li>
          <li>FreeTools</li>
          <li>Articles</li>
          <ShoppingCartIcon />
          <li>Store</li>
          <div>Sign In</div>
          <button>Get Started</button>
        </div> */}
    </div>
    </div>
    </div>
  );
}
