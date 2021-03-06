import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Image from "next/image";
export default function NavBar() {
  return (
    <div className="w-screen py-2 shadow-md 2xl:w-7/12 2xl:mx-auto 2xl:shadow-none">
      <div className="flex xl:hidden">
        <Image
          width="400%"
          height="100%"
          alt="ramsey logo"
          src="/images/logo.png"
          className="object-contain justify-start left-0 "
        />
        <div className="w-screen justify-end flex">
          <SearchIcon className="text-sky-600 m-3 scale-125 justify-end hover:text-sky-400 cursor-pointer" />
          <nav className="text-sky-600 font-bold my-3 mr-4 text-lg right-0 justify-end md:mr-7 md:ml-3 md:text-lg hover:text-sky-400 cursor-pointer hover:underline">
            MENU
          </nav>
        </div>
      </div>

      <div className="hidden xl:block mx-32 ">
        <div className="flex ">
          <div className="py-3 w-full  ">
            <Image
              width="400%"
              height="100%"
              alt="ramsey logo"
              src="/images/logo.png"
              className="object-contain  "
            />
          </div>
          <div className="  self-center flex w-9/12 justify-end">
            <input
              type="text"
              placeholder="Search"
              className="font-medium rounded-md input px-3 py-2 hover:cursor-pointer"
            />
            <span>
              <SearchIcon className="text-sky-600 m-3 scale-125 justify-end hover:text-sky-400 cursor-pointer -translate-x-12" />
            </span>
            <a className=" text-sky-700 font-bold text-md w-full text-center pt-2 truncate hover:text-sky-400 cursor-pointer hover:underline">
              Sign In
            </a>
            <button className="text-white bg-sky-700 px-1 rounded-md -mt-2 ml-6 w-full font-bold 2xl:whitespace-nowrap  hover:bg-sky-600 cursor-pointer hover:underline">
              Get Started
            </button>
          </div>
        </div>
        <div>
          <div className="pt-1 bg-gray-100 my-1"></div>
          <ul className="flex justify-evenly space-x-3 text-lg font-bold text-sky-600 py-4 w-max">
            <li className="hover:text-sky-400 cursor-pointer hover:underline">
              Guided Plans
            </li>
            <li className="hover:text-sky-400 cursor-pointer hover:underline">
              Shows
            </li>
            <li className="hover:text-sky-400 cursor-pointer hover:underline">
              Personalities
            </li>
            <li className="hover:text-sky-400 cursor-pointer hover:underline">
              Trusted Pros
            </li>
            <li className="hover:text-sky-400 cursor-pointer hover:underline">
              FreeTools
            </li>
            <li className="hover:text-sky-400 cursor-pointer hover:underline">
              Articles
            </li>
            <div className="cursor-pointer hover:underline hover:text-sky-400 ">
              <ShoppingCartIcon className="text-gray-400 -mt-1 " />
              <li className="inline pl-1  cursor-pointer ">Store</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
