import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Footer() {
  return (
    <div className="mt-14 pb-20 bg-gray-200 pt-10">
      <div>
        <img src="/images/logo-fade.png" className="w-9/12 mx-auto mb-8" />
        <div className="text-blue-700 grid grid-cols-3 text-sm mx-auto w-10/12 gap-x-1 text-center font-medium">
          <span>Get Started</span>
          <span>Careers</span>
          <span>Contact Us</span>
          <span>Newsletter</span>
          <span>NewsRoom</span>
          <span>Ramsey Press</span>
          <span></span>
          <span>About</span>
        </div>
        <div className="text-center pt-10 pb-14 space-x-8">
          <span className="bg-gray-300 rounded-full p-2"><FacebookIcon /></span>
          <span className="bg-gray-300 rounded-full p-2"><TwitterIcon /></span>
          <span className="bg-gray-300 rounded-full p-2"><YouTubeIcon /></span>
          <span className="bg-gray-300 rounded-full p-2"><InstagramIcon /></span>
        </div>
      </div>
      <div>
        <div className="py-0.5 bg-gray-300 w-11/12 mx-auto"></div>
        <div className="pt-3 text-xs w-11/12 mx-auto mb-3">
          <span>Debit Card Policy</span>
          <span className="mx-2">|</span>
          <span>Privacy Policy</span>
          <span className="mx-2">|</span>
          <span>Terms of Use</span>
        </div>
        <div className="text-xs w-11/12 mx-auto ">
          @ 2022 Lampo spancensing, LLC. All rights reserved.
        </div>
      </div>
    </div>
  );
}
