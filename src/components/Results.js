import React, { useContext } from "react";
import { ResultContext } from "../Context/ResultContext";

export default function Results() {
  const {
    investment,
    investCoffee,
    investMoney,
    investFood,
    years,
    growth,
    contributions,
    initialBal,
    initialBalPer,
    contributionsPer,
    growthPer,
    displayChart,
  } = useContext(ResultContext);

  return (
    <div className="text-center md:border-gray-300 md:border md:w-full xl:bg-white">
      <div
        className=" xl:bg-gray-200 "
        style={{
          backgroundImage: `url(/images/stripes.png)`,
        }}
      >
        <div className="w-full ">
          <div className=" mx-auto bg-gray-50 shadow-md w-10/12 xl:bg-white ">
            <div className="bg-lime-500 pt-1 "></div>
            <div className="mx-auto  w-8/12 md:w-10/12 mb-5 xl:w-11/12 ">
              <h2 className="font-bold text-4xl pt-10 pb-6">Your Results</h2>
              <div className="">
                <div className="text-gray-500 font-bold text-left xl:flex  xl:pb-5 ">
                  <div className=" xl:self-center ">
                    <div className="xl:text-lg">
                      <img src="images/savings.jpg" className="inline " />
                      ESTIMATED RETIREMENT SAVINGS
                    </div>
                    <p className="w-7/12 text-base font-medium text-left md:w-9/12 xl:text-lg">
                      In {years} years, your investment could be worth:
                    </p>
                    <div className="pt-0.5 bg-gray-300 my-5 xl:hidden"></div>
                  </div>

                  <div>
                    <div className="text-center  xl:pl-32 xl:justify-self-end xl:text-left">
                      <div className="text-lime-500 font-semibold pb-8">
                        <span className="text-4xl md:text-5xl ">
                          {`$${Intl.NumberFormat().format(
                            Math.ceil(investment)
                          )}`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-11/12">
                  <div className="xl:flex xl:-mr-14">
                    <img
                      src="/images/landscape.jpg"
                      className=" mx-auto mb-4 md:scale-75 md:mb-0 xl:object-contain xl:-translate-y-3"
                    />
                    <div className="font-bold text-xl text-center mb-7 md:text-lg xl:text-left self-center xl:mx-6 xl:w-7/12">
                      Want to make a plan to meet your investment goals?
                    </div>
                    <button className="bg-sky-700 rounded-md text-white px-4 py-2 text-lg font-bold mb-6 md:text-base md:py-2 md:px-3 xl:whitespace-nowrap">
                      Work with a Pro
                    </button>
                  </div>
                  <div className="xl:flex xl:-mr-12">
                    <img
                      src="/images/money.jpg"
                      className=" mx-auto mb-4 md:scale-75 md:mb-0 xl:object-contain xl:-translate-y-3"
                    />
                    <div className="font-bold text-xl text-center mb-7 md:text-lg xl:text-left self-center xl:mx-3 xl:w-10/12 xl:ml-8">
                      Are you saving enough to retire the way you want?
                    </div>
                    <button className="bg-sky-700 rounded-md text-white px-4 py-2 text-lg font-bold mb-6 md:text-base md:py-2 md:px-9 xl:whitespace-nowrap xl:-mr-30">
                      Find Out
                    </button>
                  </div>
                  <div className="xl:flex xl:-mr-10">
                    <img
                      src="/images/list.jpg"
                      className=" mx-auto mb-4 md:scale-75 md:mb-0 xl:object-contain xl:-translate-y-3 xl:mr-3"
                    />

                    <div className="font-bold text-xl text-center mb-7 md:text-lg xl:text-left self-center xl:mx-7 ">
                      Is money stress stopping you from investing more?
                    </div>
                    <button className="bg-sky-700 rounded-md text-white mb-8 px-4 py-2 text-lg font-bold mb-6md:text-base md:py-1 md:px-3 md:mb-5 xl:whitespace-nowrap xl:w-3/12 xl:ml-1 xl:translate-x-3">
                      Take Control
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center shadow pb-12 md:grid md:w-11/12  md:shadow-none md:grid-cols-3 md:ml-3 gap-1 lg:-my-7 ">
          <div className="">
            <div className="font-bold text-lg text-gray-500 md:mt-7 md:text-base md:align-center">
              INITIAL BALANCE
            </div>
            <div className="font-bold text-3xl inline md:text-xl xl:text-2xl xl:font-extrabold">
              {`$${initialBal}`}
            </div>
            <div className="text-2xl md:text-lg md:font-medium">
              {initialBalPer}% of Total
            </div>
          </div>
          <div>
            <div className="font-bold text-lg text-gray-500 mt-7 md:text-base">
              CONTRIBUTIONS
            </div>
            <div className="font-bold text-3xl inline md:text-xl xl:text-2xl xl:font-extrabold">
              {`$${contributions}`}
            </div>
            <div className="text-2xl md:text-lg md:font-medium">
              {contributionsPer}% of Total
            </div>
          </div>
          <div>
            <div className="font-bold text-lg text-gray-500 mt-7 md:text-base">
              GROWTH
            </div>
            <div className="font-bold text-3xl inline md:text-xl xl:text-2xl xl:font-extrabold">
              {`$${growth}`}
            </div>
            <div className="text-2xl md:text-lg md:font-medium">
              {growthPer}% of Total
            </div>
          </div>
        </div>
      </div>
      <div className="shadow pb-8 bg-white pt-6 md:border-gray-300 md:shadow-none md:border-b flex justify-center items-center ">
        {displayChart}
      </div>
      <div className="w-9/12 mx-auto pb-10 ">
        <h2 className="font-bold text-4xl my-7 md:text-3xl ">What if I...</h2>
        <div className="lg:grid lg:grid-cols-3">
          <div className="pb-5">
            <img
              src="/images/money2.jpg"
              className=" mx-auto mb-4 md:scale-75 md:mb-0 lg:pb-3 xl:pb-0"
            />
            <div className="font-bold text-xl text-gray-700 mb-2 md:text-lg lg:pb-4 xl:pb-0 xl:font-extrabold">
              SAVED AN EXTRA $100 PER MONTH.
            </div>
            <p className=" text-gray-700 mb-2 font-medium">
              Adds $100 a month in contributions, but creates
            </p>
            <div className="text-lime-500 font-semibold ">
              <span className="font-bold text-2xl inline md:text-2xl xl:font-extrabold">
                {`$${investMoney}`}
              </span>
            </div>
            <p className="font-medium">in additional growth</p>
          </div>
          <div className="pb-5 lg:mx-1">
            <img
              src="/images/coffee.jpg"
              className=" mx-auto mb-4 md:scale-75 md:mb-0"
            />
            <div className="font-bold text-xl text-gray-700 mb-2 md:text-lg xl:font-extrabold">
              GAVE UP DAILY COFFEE PURCHASES.
            </div>
            <p className="text-gray-700 mb-2 font-medium">
              Adds $128 a month in contributions, but creates
            </p>
            <div className="text-lime-500 font-semibold ">
              <span className="font-bold text-2xl inline md:text-2xl xl:font-extrabold">
                {" "}
                {`$${investCoffee}`}
              </span>
            </div>
            <p className="font-medium">in additional growth</p>
          </div>
          <div>
            <img
              src="/images/plate.jpg"
              className=" mx-auto mb-4 md:scale-75 md:mb-0"
            />
            <div className="font-bold text-xl text-gray-700 mb-2 md:text-lg xl:font-extrabold">
              GAVE UP WEEKLY RESTAURANT VISITS.
            </div>
            <p className="text-gray-700 mb-2 font-medium">
              Adds $200 a month in contributions, but creates
            </p>
            <div className="text-lime-500 font-semibold ">
              {" "}
              <span className="font-bold text-2xl inline xl:font-extrabold">
                {`$${investFood}`}
              </span>
            </div>
            <p className="font-medium">in additional growth</p>
          </div>
        </div>
      </div>
    </div>
  );
}
