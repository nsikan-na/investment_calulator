import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function NavBar() {
  return (
    <div className='w-screen py-2 shadow-md'>
      <div className="flex">
        <img src="/images/logo.jpg" className='flex-3 object-contain'/>
        
        <SearchIcon className='text-sky-600 m-3 scale-125'/>

        {/* <ArrowForwardIosIcon/> */}

          <nav className="text-sky-600 font-bold my-3 mx-2 text-xl right-0">MENU</nav>
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
  );
}
