import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { ResultContext } from "../context";
import { CircularProgress } from "@material-ui/core";
const QuickChart = require("quickchart-js");
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Image from "next/image";
export default function Investment() {
  const router = useRouter();
  const {
    investment,
    setYears,
    setInvestment,
    setInvestFood,
    setInvestMoney,
    setInitialBal,
    setContributions,
    setGrowth,
    setInvestCoffee,
    setContributionsPer,
    setGrowthPer,
    setInitialBalPer,
    setDisplayChart,
    setFormSubmitted,
    setMill,
  } = useContext(ResultContext);
  const [error, setError] = useState("");
  const [spinner, setSpinner] = useState(false);
  async function handleForm(e) {
    setSpinner(true);
    setDisplayChart(
      <div className="p-40">
        <CircularProgress />
      </div>
    );
    const response = await fetch(`/api/form`, {
      method: "POST",
      body: JSON.stringify({
        curAge: e.target.curAge.value,
        retireAge: e.target.retireAge.value,
        principal: e.target.principal.value,
        monthlyDeposit: e.target.monthlyDeposit.value,
        interestRate: e.target.interestRate.value,
      }),
      header: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const {
      investment,
      investMoney,
      investCoffee,
      investFood,
      initialBal,
      initialBalPer,
      growth,
      growthPer,
      contributionsPer,
      contributions,
      chartURL,
      mill,
      years,
    } = data;
    router.push("#chart");
    setInvestment(investment);
    setInvestMoney(investMoney);
    setInvestCoffee(investCoffee);
    setInvestFood(investFood);
    setInitialBal(initialBal);
    setInitialBalPer(initialBalPer);
    setGrowth(growth);
    setGrowthPer(growthPer);
    setContributionsPer(contributionsPer);
    setMill(mill);
    setFormSubmitted(true);
    setYears(years);
    setContributions(contributions);
    setDisplayChart(
      <img
        src={chartURL}
        width="100%"
        height="100%"
        alt="chart "
        className="mx-auto w-11/12"
      />
    );

    setSpinner(false);
    if (!data.success) {
      setError(data.message);
    }
  }

  return (
    <div className="w-10/12 mx-auto md:px-3 md:w-4/12 md:mx-0 lg:w-6/12 xl:w-5/12 xl:bg-white">
      <form
        onChange={() => {
          setError("");
        }}
        onSubmit={(e) => {
          e.preventDefault();
          handleForm(e);
        }}
      >
        <h2 className="font-bold text-4xl pt-10 pb-6">
          Enter Your Information
        </h2>
        <label className="font-bold hover:cursor-pointer" htmlFor="curAge">
          Enter your current age.
        </label>
        <br />
        <input
          className="input text-xl pl-4 py-1 rounded-md w-5/12 mt-1 mb-5 md:w-6/12 lg:w-4/12 xl:w-3/12 hover:cursor-pointer"
          type="number"
          id="curAge"
          name="curAge"
          value="20"
          min="0"
          max="100"
        />
        <div className={` text-sm font-bold text-red-600 `}></div>
        <br />
        <label className="font-bold hover:cursor-pointer" htmlFor="retireAge">
          Enter the age you plan to retire.
        </label>
        <br />
        <input
          className="input text-xl pl-4 py-1 rounded-md w-5/12 mt-1 mb-1 md:w-6/12 lg:w-4/12 xl:w-3/12 hover:cursor-pointer"
          type="number"
          name="retireAge"
          id="retireAge"
          value="67"
          min="0"
          max="100"
        />
        <div className={`text-sm font-bold text-red-600 `}></div>
        <p className="text-sm font-bold text-gray-500">
          If you were born in 1960 or later, 67 years old is the age at which
          you can retire with full benefits.
        </p>
        <br />
        <label className="font-bold hover:cursor-pointer" htmlFor="principal">
          About how much money do you currently have in investment?
        </label>
        <br />
        <div className="flex">
          <i className="text-xl translate-x-5 translate-y-2 relative">$</i>
          <input
            className="input text-xl pl-8 py-1 rounded-md w-9/12 mt-1 mb-1 md:w-full lg:w-8/12 xl:w-6/12 hover:cursor-pointer"
            type="number"
            name="principal"
            id="principal"
            value="300"
          />
        </div>

        <div className={`text-sm font-bold text-red-600 `}></div>
        <p className="text-sm font-bold text-gray-500">
          This should be the total of all your investment accounts including
          401(k)s, IRAs, mutual funds, etc.
        </p>
        <br />
        <label
          className="font-bold hover:cursor-pointer"
          htmlFor="monthlyDeposit"
        >
          How much will you contribute monthly?
        </label>
        <br />
        <div className="flex">
          <i className="text-xl translate-x-5 translate-y-2 relative">$</i>
          <input
            className="input text-xl pl-8 py-1 rounded-md w-9/12 mt-1 mb-1 md:w-full lg:w-8/12 xl:w-6/12 hover:cursor-pointer"
            type="number"
            name="monthlyDeposit"
            id="monthlyDeposit"
            min="0"
            value="500"
          />
        </div>
        <div className={`text-sm font-bold text-red-600 `}></div>
        <p className="text-sm font-bold text-gray-500">
          This is the amount you invest each month. We recommend investing 15%
          of your paycheck.
        </p>
        <br />
        <label
          className="font-bold hover:cursor-pointer"
          htmlFor="interestRate"
        >
          What do you think your annual return will be?
        </label>
        <br />
        <div className="flex">
          <input
            className="input text-xl pl-5 py-1 rounded-md w-9/12 mt-1 mb-1 md:w-full lg:w-8/12 xl:w-6/12 hover:cursor-pointer"
            type="number"
            id="interestRate"
            value="10"
            name="interestRate"
            min="0"
          />
          <i className="text-xl -translate-x-10 translate-y-2 relative">%</i>
        </div>
        <div className={`text-sm font-bold text-red-600 `}></div>
        <p className="text-sm font-bold text-gray-500">
          This is the return your investment will generate over time.
          Historically, the 30-year return of the S&P 500 has been roughly
          10-12%.
          <a href="http://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html">
            <span className="text-blue-700 font-bold text-xs">1</span>
          </a>
        </p>
        <br />
        {error ? (
          <div className={`text-sm font-bold text-red-600 `}>{error}</div>
        ) : (
          ""
        )}
        {spinner ? (
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          </Button>
        ) : (
          <button className="text-white font-extrabold bg-sky-600 px-7 py-3 rounded-md my-6 shadow md:px-5 md:py-2 hover:bg-sky-500 ">
            Calculate
          </button>
        )}
      </form>
    </div>
  );
}
