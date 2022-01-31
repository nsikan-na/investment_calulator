import React, { useState } from "react";
import "./Form.css";

export default function Investment() {
  const [investment, setInvestment] = useState("");
  const calcInvestment = (e) => {
    const [curAge, retireAge, principal, monthlyDeposit, interestRate] =
      e.target;

    setInvestment(
      Math.round(
        principal.value *
          Math.pow(
            1 + (interestRate.value/100) / 12,
            12 * (retireAge.value - curAge.value)
          ) +
          monthlyDeposit.value *
            ((Math.pow(
              1 + (interestRate.value/100) / 12,
              12 * (retireAge.value - curAge.value)
            ) -
              1) /
              ((interestRate.value/100) / 12))
      )
    );
    if (!investment) return;
    const nf = Intl.NumberFormat();
    console.log(nf.format(investment));
  };
  return (
    <div className="w-10/12 mx-auto">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calcInvestment(e);
        }}
      >
        <h2 className="font-bold text-4xl pt-10 pb-6">
          Enter Your Information
        </h2>
        <label className="font-semibold text-lg">Enter your current age.</label>
        <br />
        <input
          className="input text-xl pl-4 py-2 rounded-md w-5/12 mt-1 mb-5"
          type="number"
          name="curAge"
          value="20"
        />
        <br />
        <label className="font-semibold text-lg">
          Enter the age you plan to retire.
        </label>
        <br />
        <input
          className="input text-xl pl-4 py-2 rounded-md w-5/12 mt-1 mb-1"
          type="number"
          name="retireAge"
          value="50"
        />
        <p className="text-sm font-semibold text-gray-500">
          If you were born in 1960 or later, 67 years old is the age at which
          you can retire with full benefits.
        </p>
        <br />
        <label className="font-semibold text-lg">
          About how much money do you currently have in investment?
        </label>
        <br />
        <input
          className="input text-xl pl-8 py-2 rounded-md w-9/12 mt-1 mb-1"
          type="number"
          name="principal"
          value="4000"
        />
        <p className="text-sm font-semibold text-gray-500">
          This should be the total of all your investment accounts including
          401(k)s, IRAs, mutual funds, etc.
        </p>
        <br />
        <label className="font-semibold text-lg">
          How much will you contribute monthly?
        </label>
        <br />
        <input
          className="input text-xl pl-8 py-2 rounded-md w-9/12 mt-1 mb-1"
          type="number"
          name="monthlyDeposit"
          value="1500"
        />
        <p className="text-sm font-semibold text-gray-500">
          This is the amount you invest each month. We recommend investing 15%
          of your paycheck.
        </p>
        <br />
        <label className="font-semibold text-lg">
          What do you think your annual return will be?
        </label>
        <br />
        <input
          className="input text-xl pl-8 py-2 rounded-md w-9/12 mt-1 mb-1"
          type="number"
          name="interestRate"
          value="10"
        />
        <p className="text-sm font-semibold text-gray-500">
          This is the return your investment will generate over time.
          Historically, the 30-year return of the S&P 500 has been roughly
          10-12%.
          <a href="http://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html">
            <span className="text-blue-700 font-bold text-xs">
              1
            </span>
          </a>
        </p>
        <button className="text-white font-extrabold bg-sky-600 px-7 py-3 rounded-md my-6 shadow">Calculate</button>
        <div className="p-0.5 bg-lime-300"></div>
      </form>
    </div>
  );
}
