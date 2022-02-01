import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function Results() {
  return (
    <div className="text-center md:border-gray-300 md:border md:w-full">
      <div className="  "
        style={{
          backgroundImage: `url(/images/stripes.png)`,
        }}
      >
        <div className="w-full ">
          <div className=" mx-auto bg-gray-50 shadow-md w-10/12 " >
            <div className="bg-lime-500 pt-1"></div>
            <div className="mx-auto  w-8/12 md:w-10/12 mb-5">
              <h2 className="font-bold text-4xl pt-10 pb-6">Your Results</h2>
              <div className="text-gray-500 font-bold text-left">
                <img src="images/savings.jpg" className="inline" />
                ESTIMATED RETIREMENT SAVINGS
              </div>
              <p className="w-7/12 text-base font-medium text-left md:w-9/12">
                In 19 years, your investment could be worth:
              </p>
              <div className="pt-0.5 bg-gray-300 my-5"></div>
              <div className="text-center">
                <div className="text-lime-500 font-semibold pb-8">
                  <span>
                    <AttachMoneyIcon className=" -translate-y-4 translate-x-1 md:-translate-y-5 " />
                  </span>
                  <span className="text-4xl md:text-5xl ">1,000,000</span>
                </div>
                <img
                  src="/images/landscape.jpg"
                  className=" mx-auto mb-4 md:scale-75 md:mb-0"
                />
                <div className="font-bold text-xl text-center mb-7 md:text-lg">
                  Want to make a plan to meet your investment goals?
                </div>
                <button className="bg-sky-700 rounded-md text-white px-4 py-2 text-lg font-bold mb-6 md:text-base md:py-2 md:px-3">
                  Work with a Pro
                </button>
                <img
                  src="/images/money.jpg"
                  className=" mx-auto mb-4 md:scale-75 md:mb-0 "
                />
                <div className="font-bold text-xl text-center mb-7 md:text-lg">
                  Are you saving enough to retire the way you want?
                </div>
                <button className="bg-sky-700 rounded-md text-white px-4 py-2 text-lg font-bold mb-6 md:text-base md:py-2 md:px-9">
                  Find Out
                </button>
                <img
                  src="/images/list.jpg"
                  className=" mx-auto mb-4 md:scale-75 md:mb-0"
                />

                <div className="font-bold text-xl text-center mb-7 md:text-lg">
                  Is money stress stopping you from investing more?
                </div>
                <button className="bg-sky-700 rounded-md text-white mb-8 px-4 py-2 text-lg font-bold mb-6md:text-base md:py-1 md:px-3 md:mb-5">
                  Take Control
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center shadow pb-12 md:grid md:w-11/12  md:shadow-none md:grid-cols-3 md:ml-3 gap-1">
          <div className="">
            <div className="font-bold text-lg text-gray-500 md:mt-7 md:text-base md:align-center">
              INITIAL BALANCE
            </div>
            <AttachMoneyIcon className="inline scale-75 -translate-y-3 translate-x-1 " />
            <div className="font-bold text-3xl inline md:text-xl ">4,000</div>
            <div className="text-2xl md:text-lg md:font-medium">
              0% of Total
            </div>
          </div>
          <div>
            <div className="font-bold text-lg text-gray-500 mt-7 md:text-base">
              CONTRIBUTIONS
            </div>
            <AttachMoneyIcon className="inline scale-75 -translate-y-3 translate-x-1 " />
            <div className="font-bold text-3xl inline md:text-xl">846,000</div>
            <div className="text-2xl md:text-lg md:font-medium">
              4% of Total
            </div>
          </div>
          <div>
            <div className="font-bold text-lg text-gray-500 mt-7 md:text-base">
              GROWTH
            </div>
            <AttachMoneyIcon className="inline scale-75 -translate-y-3 translate-x-1 " />
            <div className="font-bold text-3xl inline md:text-xl">
              8,810,100
            </div>
            <div className="text-2xl md:text-lg md:font-medium">
              96% of Total
            </div>
          </div>
        </div>
      </div>
      <div className="shadow pb-8 bg-white pt-6 md:border-gray-300 md:shadow-none md:border-b md:flex md:justify-center md:align-center">
        <img src="images/chartplaceholder.jpg" />
      </div>
      <div className="w-9/12 mx-auto pb-10 ">
        <h2 className="font-bold text-4xl my-7 md:text-3xl">What if I...</h2>
        <div className="pb-5">
          <img src="/images/money2.jpg" className=" mx-auto mb-4 md:scale-75 md:mb-0" />
          <div className="font-bold text-xl text-gray-700 mb-2 md:text-lg">
            SAVED AN EXTRA $100 PER MONTH.
          </div>
          <p className=" text-gray-700 mb-2 font-medium">
            Adds $100 a month in contributions, but creates
          </p>
          <div className="text-lime-500 font-semibold ">
            <AttachMoneyIcon className="inline scale-75 -translate-y-3 translate-x-1" />
            <span className="font-bold text-2xl inline md:text-2xl">44,801</span>
          </div>
          <p className="font-medium">in additional growth</p>
        </div>
        <div className="pb-5">
          <img src="/images/coffee.jpg" className=" mx-auto mb-4 md:scale-75 md:mb-0" />
          <div className="font-bold text-xl text-gray-700 mb-2 md:text-lg">
            GAVE UP DAILY COFFEE PURCHASES.
          </div>
          <p className="text-gray-700 mb-2 font-medium">
            Adds $128 a month in contributions, but creates
          </p>
          <div className="text-lime-500 font-semibold ">
            <AttachMoneyIcon className="inline scale-75 -translate-y-3 translate-x-3" />
            <span className="font-bold text-2xl inline md:text-2xl"> 57,345</span>
          </div>
          <p className="font-medium">in additional growth</p>
        </div>
        <div>
          <img src="/images/plate.jpg" className=" mx-auto mb-4 md:scale-75 md:mb-0" />
          <div className="font-bold text-xl text-gray-700 mb-2 md:text-lg">
            GAVE UP WEEKLY RESTAURANT VISITS.
          </div>
          <p className="text-gray-700 mb-2 font-medium">
            Adds $200 a month in contributions, but creates
          </p>
          <div className="text-lime-500 font-semibold ">
            <AttachMoneyIcon className="inline scale-75 -translate-y-3 translate-x-3" />
            <span className="font-bold text-2xl inline "> 89,603</span>
          </div>
          <p className="font-medium">in additional growth</p>
        </div>
      </div>
    </div>
  );
}
