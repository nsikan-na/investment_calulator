import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="mt-14 pb-20 bg-gray-200 pt-10 md:pb-10 ">
      <div className="xl:flex  xl:mx-auto 2xl:w-7/12">
        <Image
          width="100%"
          height="100%"
          alt="ramsey logo"
          src="/images/logo-fade.png"
          className="w-9/12 mx-auto mb-8 md:w-3/12 md:mb-4r xl:scale-75  "
        />
        <div className="text-blue-700 text-sm mx-auto w-10/12 text-center font-medium flex flex-wrap justify-evenly space-x-3 md:space-x-1 xl:content-center xl:-space-x-4 xl:-translate-x-20">
          <span className="hover:text-sky-400 cursor-pointer hover:underline">
            Get Started
          </span>
          <span className="hover:text-sky-400 cursor-pointer hover:underline">
            Careers
          </span>
          <span className="hover:text-sky-400 cursor-pointer hover:underline">
            Contact Us
          </span>
          <span className="hover:text-sky-400 cursor-pointer hover:underline">
            Newsletter
          </span>
          <span className="hover:text-sky-400 cursor-pointer hover:underline">
            NewsRoom
          </span>
          <span className="hover:text-sky-400 cursor-pointer hover:underline">
            Ramsey Press
          </span>
          <span className="hover:text-sky-400 cursor-pointer hover:underline">
            About
          </span>
        </div>
        <div className="text-center pt-10 pb-14 flex justify-center space-x-6 md:space-x-4 md:pt-7 md:pb-10  xl:-translate-x-24 xl:space-x-2">
          <span className="bg-gray-300 rounded-full p-1 xl:p-4 xl:scale-75 hover:scale-110 hover:bg-gray-300 cursor-pointer">
            <FacebookIcon className="xl:scale-150" />
          </span>
          <span className="bg-gray-300 rounded-full p-1 xl:p-4 xl:scale-75 hover:scale-110 hover:bg-gray-300 cursor-pointer">
            <TwitterIcon className="xl:scale-150" />
          </span>
          <span className="bg-gray-300 rounded-full p-1 xl:p-4 xl:scale-75 hover:scale-110 hover:bg-gray-300 cursor-pointer">
            <YouTubeIcon className="xl:scale-150" />
          </span>
          <span className="bg-gray-300 rounded-full p-1 xl:p-4 xl:scale-75 hover:scale-110 hover:bg-gray-300 cursor-pointer">
            <InstagramIcon className="xl:scale-150" />
          </span>
        </div>
      </div>
      <div>
        <div className="pt-0.5 bg-gray-300 w-11/12 mx-auto"></div>
        <div className="pt-3 text-xs w-11/12 mx-auto mb-3 font-medium flex flex-col justify-center md:flex-row 2xl:w-7/12">
          <div className="  text-center my-3 md:w-full md:text-left ">
            <span className=" hover:text-gray-500 cursor-pointer">
              Debit Card Policy
            </span>
            <span className="mx-2">|</span>
            <span className=" hover:text-gray-500 cursor-pointer">
              Privacy Policy
            </span>
            <span className="mx-2">|</span>
            <span className=" hover:text-gray-500 cursor-pointer">
              Terms of Use
            </span>
          </div>
          <div className="text-xs font-medium text-center w-full  md:text-right md:my-3">
            @ 2022 Lampo spancensing, LLC. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
