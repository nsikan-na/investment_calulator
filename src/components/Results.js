import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function Results() {
  return (
    <div className="text-center ">
      <div style={{ backgroundImage: `url(/images/stripes.png)` }}>
        <div className="w-screen  pb-10">
          <div className=" mx-auto bg-gray-50 shadow-md w-10/12">
            <div className="mx-auto  w-8/12 ">
              <h2 className="font-bold text-4xl pt-10 pb-6">Your Results</h2>
              <div className="text-gray-500 font-bold text-left ">
                <img src="images/savings.jpg" className="inline" />
                ESTIMATED RETIREMENT SAVINGS
              </div>
              <p className="w-7/12 text-base font-medium text-left">
                In 19 years, your investment could be worth:
              </p>
              <div className="py-0.5 bg-gray-200 my-5"></div>
              <div className="text-center">
                <div className="text-lime-400 font-semibold pb-8">
                  <span>
                    <AttachMoneyIcon className=" -translate-y-4 translate-x-1" />
                  </span>
                  <span className="text-4xl">1,000,000</span>
                </div>
                <img src="/images/landscape.jpg" className=" mx-auto mb-4" />
                <div className="font-bold text-xl text-center mb-7">
                  Want to make a plan to meet your investment goals?
                </div>
                <button className="bg-sky-600 rounded-md text-white px-4 py-2 text-lg font-bold mb-6">
                  Work with a Pro
                </button>
                <img src="/images/money.jpg" className=" mx-auto mb-4" />
                <div className="font-bold text-xl text-center mb-7">
                  Are you saving enough to retire the way you want?
                </div>
                <button className="bg-sky-600 rounded-md text-white px-4 py-2 text-lg font-bold mb-6">
                  Find Out
                </button>
                <img src="/images/list.jpg" className=" mx-auto mb-4" />

                <div className="font-bold text-xl text-center mb-7">
                  Is money stress stopping you from investing more?
                </div>
                <button className="bg-sky-600 rounded-md text-white px-4 py-2 text-lg font-bold mb-6">
                  Take Control
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center shadow pb-12">
          <div>
            <div className="font-bold text-lg text-gray-500 ">
              INITIAL BALANCE
            </div>
            <AttachMoneyIcon className="inline scale-75 -translate-y-3 translate-x-1" />
            <div className="font-bold text-3xl inline">4,000</div>
            <div className="text-2xl">0% of Total</div>
          </div>
          <div>
            <div className="font-bold text-lg text-gray-500 mt-7">
              CONTRIBUTIONS
            </div>
            <AttachMoneyIcon className="inline scale-75 -translate-y-3 translate-x-1" />
            <div className="font-bold text-3xl inline">342,000</div>
            <div className="text-2xl">33% of Total</div>
          </div>
          <div>
            <div className="font-bold text-lg text-gray-500 mt-7">GROWTH</div>
            <AttachMoneyIcon className="inline scale-75 -translate-y-3 translate-x-1" />
            <div className="font-bold text-3xl inline">694,557</div>
            <div className="text-2xl">67% of Total</div>
          </div>
        </div>
      </div>
      <div className="shadow pb-8 bg-white pt-6">
        <img src="images/chartplaceholder.jpg" />
      </div>
      <div className="w-9/12 mx-auto pb-10">
        <h2 className="font-bold text-4xl my-7">What if I...</h2>
        <div className="pb-5">
          <img src="/images/money2.jpg" className=" mx-auto mb-4" />
          <div className="font-bold text-xl text-gray-700 mb-2">
            SAVED AN EXTRA $100 PER MONTH.
          </div>
          <p className="text-xl text-gray-700 mb-2">
            Adds $100 a month in contributions, but creates
          </p>
          <div className="text-lime-400 font-semibold ">
            <AttachMoneyIcon className="inline scale-75 -translate-y-3 translate-x-1" />
            <span className="font-bold text-3xl inline">44,801</span>
          </div>
          <p>in additional growth</p>
        </div>
        <div className="pb-5">
          <img src="/images/coffee.jpg" className=" mx-auto mb-4" />
          <div className="font-bold text-xl text-gray-700 mb-2">
            GAVE UP DAILY COFFEE PURCHASES.
          </div>
          <p className="text-xl text-gray-700 mb-2">
            Adds $128 a month in contributions, but creates
          </p>
          <div className="text-lime-400 font-semibold ">
            <AttachMoneyIcon className="inline scale-75 -translate-y-3 translate-x-3" />
            <span className="font-bold text-3xl inline"> 57,345</span>
          </div>
          <p>in additional growth</p>
        </div>
        <div>
          <img src="/images/plate.jpg" className=" mx-auto mb-4" />
          <div className="font-bold text-xl text-gray-700 mb-2">
            GAVE UP WEEKLY RESTAURANT VISITS.
          </div>
          <p className="text-xl text-gray-700 mb-2">
            Adds $200 a month in contributions, but creates
          </p>
          <div className="text-lime-400 font-semibold ">
            <AttachMoneyIcon className="inline scale-75 -translate-y-3 translate-x-3" />
            <span className="font-bold text-3xl inline"> 89,603</span>
          </div>
          <p>in additional growth</p>
        </div>
      </div>
    </div>
  );
}
