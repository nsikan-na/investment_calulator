import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import './Input.css'

export default function NavBar() {
  return (
    <div className="w-screen py-2 shadow-md ">
      <div className="flex xl:hidden">
        <img
          src="/images/logo.jpg"
          className="object-contain justify-start left-0 "
        />
        <div className="w-screen justify-end flex">
          <SearchIcon className="text-sky-600 m-3 scale-125 justify-end " />
          <nav className="text-sky-600 font-bold my-3 mr-4 text-lg right-0 justify-end md:mr-7 md:ml-3 md:text-lg ">
            MENU
          </nav>
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

      <div className="hidden xl:block mx-32 ">
        <div className="flex ">
          <div className="py-3 w-full ">
            <img
              src="/images/logo.jpg"
              className="object-contain scale-125 "
            />
            </div>
          <div className="  self-center flex w-9/12 justify-end">
            <input type="text" placeholder="Search" className="font-medium rounded-md input px-3 py-2"/>
            <a className=" text-sky-700 font-bold text-md w-full text-center pt-2">Sign In</a>
            <button className="text-white bg-sky-700 px-1 rounded-md  -mt-2 ml-6 w-full font-bold">Get Started</button>
          </div>
        </div>
        <div>
          <div className="pt-1 bg-gray-100 my-1"></div>
        <ul className="flex justify-between text-lg font-bold text-sky-600 py-4 w-8/12">
          <li>Guided Plans</li>
          <li>Shows</li>
          <li>Personalities</li>
          <li>Trusted Pros</li>
          <li>FreeTools</li>
          <li>Articles</li>
          <div>
          <ShoppingCartIcon className="text-gray-400 -mt-1"/>
            <li className="inline pl-1">Store</li>
          </div>
        </ul>
          </div>
      </div>
    </div>
  );
}
