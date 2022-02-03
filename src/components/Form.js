import React, { useState, useContext } from "react";
import { ResultContext } from "../Context/ResultContext";
import "./Input.css";

export default function Investment() {
  const {
    investment,
    setYears,
    setInvestment,
    setInvestFood,
    years,
    contributions,
    setInvestMoney,
    setInitialBal,
    setContributions,
    setGrowth,
    setInvestCoffee,
    growth,
    initialBal,
    initialBalPer,
    contributionsPer,
    setContributionsPer,
    setGrowthPer,
    setInitialBalPer,
  } = useContext(ResultContext);
  const calcInvestment = (e) => {
    const [curAge, retireAge, principal, monthlyDeposit, interestRate] =
      e.target;

    setInvestment(
      principal.value *
        Math.pow(
          1 + interestRate.value / 100 / 12,
          12 * (retireAge.value - curAge.value)
        ) +
        monthlyDeposit.value *
          ((Math.pow(
            1 + interestRate.value / 100 / 12,
            12 * (retireAge.value - curAge.value)
          ) -
            1) /
            (interestRate.value / 100 / 12))
    );
    setInvestMoney(
      Intl.NumberFormat().format(
        Math.ceil(
          principal.value *
            Math.pow(
              1 + interestRate.value / 100 / 12,
              12 * (retireAge.value - curAge.value)
            ) +
            (parseInt(monthlyDeposit.value) + 100) *
              ((Math.pow(
                1 + interestRate.value / 100 / 12,
                12 * (retireAge.value - curAge.value)
              ) -
                1) /
                (interestRate.value / 100 / 12)) -
            investment
        )
      )
    );
    setInvestCoffee(
      Intl.NumberFormat().format(
        Math.ceil(
          principal.value *
            Math.pow(
              1 + interestRate.value / 100 / 12,
              12 * (retireAge.value - curAge.value)
            ) +
            (parseInt(monthlyDeposit.value) + 128) *
              ((Math.pow(
                1 + interestRate.value / 100 / 12,
                12 * (retireAge.value - curAge.value)
              ) -
                1) /
                (interestRate.value / 100 / 12)) -
            investment
        )
      )
    );
    setInvestFood(
      Intl.NumberFormat().format(
        Math.ceil(
          principal.value *
            Math.pow(
              1 + interestRate.value / 100 / 12,
              12 * (retireAge.value - curAge.value)
            ) +
            (parseInt(monthlyDeposit.value) + 200) *
              ((Math.pow(
                1 + interestRate.value / 100 / 12,
                12 * (retireAge.value - curAge.value)
              ) -
                1) /
                (interestRate.value / 100 / 12)) -
            investment
        )
      )
    );
    setYears(retireAge.value - curAge.value);
    setInitialBal(Intl.NumberFormat().format(Math.ceil(principal.value)));
    setContributions(
      Intl.NumberFormat().format(Math.ceil(years * 12 * monthlyDeposit.value))
    );
    setGrowth(
      Intl.NumberFormat().format(
        Math.ceil(investment - Math.ceil(years * 12 * monthlyDeposit.value))
      )
    );
    setInitialBalPer(Math.ceil((principal.value / Number(investment)) * 100));
    setContributionsPer(
      Math.ceil(
        ((years * 12 * monthlyDeposit.value) / Number(investment)) * 100
      )
    );
    setGrowthPer(100 - (initialBalPer + contributionsPer));
  };

  return (
    <div className="w-10/12 mx-auto md:px-3 md:w-4/12 md:mx-0 lg:w-6/12 xl:w-5/12 xl:bg-white">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calcInvestment(e);
        }}
      >
        <h2 className="font-bold text-4xl pt-10 pb-6">
          Enter Your Information
        </h2>
        <label className="font-bold ">Enter your current age.</label>
        <br />
        <input
          className="input text-xl pl-4 py-1 rounded-md w-5/12 mt-1 mb-5 md:w-6/12 lg:w-4/12 xl:w-3/12"
          type="number"
          name="curAge"
        />
        <br />
        <label className="font-bold ">Enter the age you plan to retire.</label>
        <br />
        <input
          className="input text-xl pl-4 py-1 rounded-md w-5/12 mt-1 mb-1 md:w-6/12 lg:w-4/12 xl:w-3/12"
          type="number"
          name="retireAge"
        />
        <p className="text-sm font-bold text-gray-500">
          If you were born in 1960 or later, 67 years old is the age at which
          you can retire with full benefits.
        </p>
        <br />
        <label className="font-bold ">
          About how much money do you currently have in investment?
        </label>
        <br />
        <input
          className="input text-xl pl-8 py-1 rounded-md w-9/12 mt-1 mb-1 md:w-full lg:w-8/12 xl:w-6/12"
          type="number"
          name="principal"
        />
        <p className="text-sm font-bold text-gray-500">
          This should be the total of all your investment accounts including
          401(k)s, IRAs, mutual funds, etc.
        </p>
        <br />
        <label className="font-bold ">
          How much will you contribute monthly?
        </label>
        <br />
        <input
          className="input text-xl pl-8 py-1 rounded-md w-9/12 mt-1 mb-1 md:w-full lg:w-8/12 xl:w-6/12"
          type="number"
          name="monthlyDeposit"
        />
        <p className="text-sm font-bold text-gray-500">
          This is the amount you invest each month. We recommend investing 15%
          of your paycheck.
        </p>
        <br />
        <label className="font-bold ">
          What do you think your annual return will be?
        </label>
        <br />
        <input
          className="input text-xl pl-8 py-1 rounded-md w-9/12 mt-1 mb-1 md:w-full lg:w-8/12 xl:w-6/12"
          type="number"
          name="interestRate"
        />
        <p className="text-sm font-bold text-gray-500">
          This is the return your investment will generate over time.
          Historically, the 30-year return of the S&P 500 has been roughly
          10-12%.
          <a href="http://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html">
            <span className="text-blue-700 font-bold text-xs">1</span>
          </a>
        </p>
        <button className="text-white font-extrabold bg-sky-600 px-7 py-3 rounded-md my-6 shadow md:px-5 md:py-2">
          Calculate
        </button>
      </form>
    </div>
  );
}
