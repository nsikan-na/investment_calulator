import React, { useContext } from "react";
import { ResultContext } from "../context";
import Image from "next/image";

export default function CTA() {
  const { investment, formSubmitted } = useContext(ResultContext);
  return (
    <div className={`2xl:w-7/12 `}>
      <div className="xl:bg-gray-200 2xl:w-screen">
        <div
          className={`2xl:w-7/12 2xl:mx-auto ${
            !formSubmitted ? "hidden" : "block"
          }`}
        >
          <div
            style={{ backgroundImage: `url(/images/cta1.jpg)` }}
            className="text-center  text-white bg-no-repeat bg-cover xl:mx-24 "
          >
            <div className=" xl:w-6/12 xl:text-left xl:px-auto xl:py-16  xl:mx-auto">
              <h2 className="w-10/12 font-bold text-4xl pt-10 pb-6 mx-auto ">
                Now build a plan to reach{" "}
                {`$${Intl.NumberFormat().format(Math.ceil(investment))}.`}
              </h2>
              <p className="w-10/12 font-semibold mx-auto">
                Now that you've calculated your estimated retirement savings,
                your next step is to use a Smartvestor Pro to build your custom
                retirement plan.
              </p>
              <button className="bg-emerald-500 px-4 py-2 rounded-md my-4 xl:mb-8 xl:ml-10 hover:bg-emerald-400">
                Find a Pro Now
              </button>
            </div>
          </div>
          <div className="xl:bg-white xl:mx-24 xl:mb-24 2xl:mb-16 ">
            <div className=" text-center text-lg w-9/12 mx-auto pt-8 pb-14 ">
              <div className="font-bold ">
                Retirement and Investment Guidance
              </div>
              <div className="inline sm:flex justify-center md:my-4">
                <Image
                  width="100%"
                  height="100%"
                  alt="list icon"
                  src="/images/list2.jpg"
                  className="mx-auto md:m-0 "
                />
                <div className="font-medium pt-2 md:ml-6">
                  Custom retirement and investment plans
                </div>
              </div>
              <div className="inline sm:flex justify-center  md:my-4  ">
                <Image
                  width="100%"
                  height="100%"
                  alt="people icon"
                  src="/images/people.jpg"
                  className="mx-auto md:m-0 xl:-ml-10"
                />
                <div className="font-medium pt-2 md:ml-6">
                  Real-life,helpful people you can call
                </div>
              </div>
              <div className="inline sm:flex justify-center  md:my-4  ">
                <Image
                  width="100%"
                  height="100%"
                  alt="grid icon"
                  src="/images/square.jpg"
                  className="mx-auto md:m-0 xl:-ml-16"
                />
                <div className="font-medium pt-2 md:ml-6">
                  Hundreds of investment options
                </div>
              </div>
              <div className="inline sm:flex justify-center   md:my-4 ">
                <Image
                  width="100%"
                  height="100%"
                  alt="shaking hands icon"
                  src="/images/hands.jpg"
                  className="mx-auto md:m-0 xl:-ml-36"
                />
                <div className="font-medium pt-2 md:ml-6">
                  Zero hard-sell pitches
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto xl:bg-white xl:w-full ">
          <div className="xl:w-9/12 xl:mx-auto 2xl:w-5/12">
            <h2 className="font-bold text-2xl pt-4 pb-6 xl:text-3xl xl:pt-10 ">
              What is an investment calculator for?
            </h2>
            <p className="font-medium xl:text-xl">
              An investment calculator is a simple way to estimate how your
              money will grow if you keep investing at the rate you're going
              right now.
            </p>
            <br />
            <p className="font-medium xl:text-xl">
              But remember—an investment calculator doesn't replace professional
              advice! If you need help with your investments, we recommend
              working with an expert who'll help you understand what you're
              investing in. If that's your next step, we can help you{" "}
              <span className="underline text-blue-600 hover:text-sky-400 cursor-pointer hover:underline">
                connect with a pro
              </span>{" "}
              near you.
            </p>
            <div>
              <div className="font-bold text-2xl pb-6 pt-8 xl:text-3xl ">
                How much money am I really going to need?
              </div>
              <p className="font-medium xl:text-xl">
                The real question is—what do you really want to do? Do you want
                to travel the world? Spend more time with your family? Get that
                beach or mountain house you always dreamed about? C'mon, don't
                limit yourself!
              </p>
              <br />
              <p className="font-medium xl:text-xl">
                Got your vision?{" "}
                <span className="underline text-blue-600 hover:text-sky-400 cursor-pointer hover:underline">
                  Figure out how much you'll need to make it a reality
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
