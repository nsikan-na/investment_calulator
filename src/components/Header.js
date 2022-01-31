import React from "react";

export default function Header() {
  return (
    <div className="bg-gray-200 pb-8 p-1">
    <div className="w-11/12 mx-auto mt-6 ">
      <h1 className="font-black text-5xl mb-5">Investment Calculator</h1>
      <div className="bg-yellow-400 p-0.5 w-3/12"></div>
      <p className="mt-3 text-2xl font-medium">
        Put your current investment totals, your contributions and your annual
        rate of return into the investment calculator, and we'll show you how
        much you can expect to have in your investment portfolio over time.
      </p>
    </div>
    </div>
  );
}
