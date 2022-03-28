import React, { useContext } from "react";
import { ResultContext } from "../context";
import Image from "next/image";
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
    mill,
    formSubmitted,
  }: any = useContext(ResultContext);

  return (
    <div
      className={`text-center md:border-gray-300 md:border md:w-full xl:bg-white ${
        !formSubmitted ? "opacity-20 cursor-default" : "opacity-100"
      }`}
    >
      <div
        className=" xl:bg-gray-200 "
        style={{
          backgroundImage: `url(/images/stripes.png)`,
        }}
      >
        <div className="w-full ">
          <div className=" mx-auto bg-gray-50 shadow-md w-11/12 xl:bg-white ">
            <div className="bg-lime-500 pt-1 "></div>
            <div className="mx-auto  w-8/12 md:w-10/12 mb-5 xl:w-11/12 ">
              <h2 className="font-bold text-4xl pt-10 pb-6" id="result">
                Your Results
              </h2>
              <div>
                <div className="text-gray-500 font-bold text-left xl:flex  xl:pb-5 ">
                  <div className=" xl:self-center ">
                    <div className="xl:text-lg">
                      <Image
                        width="25%"
                        height="25%"
                        alt="savings icon"
                        src="/images/savings.jpg"
                        className="inline "
                      />
                      ESTIMATED RETIREMENT SAVINGS
                    </div>
                    <p className="w-7/12 text-base font-medium text-left md:w-9/12 lg:w-full xl:text-lg">
                      In {years} years, your investment could be worth:
                    </p>
                    <div className="pt-0.5 bg-gray-300 my-5 xl:hidden"></div>
                  </div>
                  <div className="">
                    <div className="text-center lg:justify-center lg:text-left">
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
      <div
        className=" pb-8 shadow md:border-gray-300 md:shadow-none md:border-b font-bold"
        id="chart"
      >
        <div className="  bg-white pt-6  flex justify-center items-center ">
          {displayChart}
        </div>
        <div>{mill}</div>
      </div>
      <div className="w-9/12 mx-auto pb-10 lg:w-11/12">
        <h2 className="font-bold text-4xl my-7 md:text-3xl ">What if I...</h2>
        <div className="lg:flex lg:justify-between">
          <div className="pb-5">
            <Image
              width="50%"
              height="50%"
              alt="money icon"
              src="/images/money2.jpg"
              className=" mx-auto mb-4 md:scale-75 md:mb-0 lg:pb-3 xl:pb-0"
            />
            <div className="font-bold text-xl text-gray-700 mb-2 md:text-lg lg:pb-1  xl:pb-0 xl:font-extrabold">
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
          <div className="pb-5 mx-3">
            <Image
              width="50%"
              height="50%"
              alt="coffee icon"
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
            <Image
              width="50%"
              height="50%"
              alt="food icon"
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
