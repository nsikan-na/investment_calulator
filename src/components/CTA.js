import React from "react";

export default function CTA() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(/images/cta1.jpg)` }}
        className="text-center  text-white bg-no-repeat bg-cover"
      >
        <h2 className="w-10/12 font-bold text-4xl pt-10 pb-6 mx-auto ">
          Now build a plan to reach $1,040,557
        </h2>
        <p className="w-10/12 font-semibold mx-auto">
          Now that you've calculated your estimated retirement savings, your
          next step is to use a Smartvestor Pro to build your custom retirement
          plan.
        </p>
        <button className="bg-emerald-400 px-4 py-2 rounded-md my-4">
          Find a Pro Now
        </button>
      </div>
      <div className=" text-center text-lg w-9/12 mx-auto pt-8 pb-14">
        <div className="font-bold">Retirement and Investment Guidance</div>
        <img src='/images/list2.jpg' className='mx-auto'/>
        <div className="font-medium">Custom retirement and investment plans</div>
        <img src='/images/people.jpg' className='mx-auto'/>
        <div className="font-medium">Real-life,helpful people you can call</div>
        <img src='/images/square.jpg' className='mx-auto'/>
        <div className="font-medium">Hundreds of investment options</div>
        <img src='/images/hands.jpg' className='mx-auto'/>
        <div className="font-medium">Zero hard-sell pitches</div>
      </div>
      <div className="w-10/12 mx-auto">
        <h2 className="font-bold text-2xl pb-6">What is an investment calculator for?</h2>
        <p className="font-medium">
          An investment calculator is a simple way to estimate how your money
          will grow if you keep investing at the rate you're going right now.
        </p>
        <br/>
        <p className="font-medium">
          But remember—an investment calculator doesn't replace professional
          advice! If you need help with your investments, we recommend working
          with an expert who'll help you understand what you're investing in. If
          that's your next step, we can help you <span className="underline text-blue-600">connect with a pro</span>{" "}
          near you.
        </p>
      <div>
        <div className="font-bold text-2xl pb-6 pt-8">How much money am I really going to need?</div>
        <p className="font-medium">
          The real question is—what do you really want to do? Do you want to
          travel the world? Spend more time with your family? Get that beach or
          mountain house you always dreamed about? C'mon, don't limit yourself!
        </p>
        <br/>
        <p className="font-medium">
          Got your vision?{" "}
          <span className="underline text-blue-600">Figure out how much you'll need to make it a reality</span>.
        </p>
      </div>
      </div>
    </div>
  );
}
