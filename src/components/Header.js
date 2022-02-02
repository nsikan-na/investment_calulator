import React from "react";

export default function Header() {
  return (
    <div className="2xl:bg-gray-200">
    <div className="bg-gray-200 pb-8 p-1 xl:pb-14 2xl:w-7/12 2xl:mx-auto">
    <div className="w-11/12 mx-auto mt-6 xl:mx-32 xl:w-10/12 ">
      <h1 className="font-black text-5xl mb-5 xl:mt-10">Investment Calculator</h1>
      <div className="bg-orange-400 p-0.5 w-3/12 md:w-20"></div>
      <p className="mt-3 text-2xl font-medium md:text-3xl md:font-normal xl:font-semibold">
        Put your current investment totals, your contributions and your annual
        rate of return into the investment calculator, and we'll show you how
        much you can expect to have in your investment portfolio over time.
      </p>
    </div>
    </div>
    </div>
  );
}
