import React, { useState, useContext, useEffect } from "react";
import { ResultContext } from "../Context/ResultContext";
import "./Input.css";

export default function Investment() {
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
  } = useContext(ResultContext);
  const [curAge, setCurAge] = useState('');
  const [retireAge, setRetireAge] = useState(67);
  const [principal, setPrincipal] = useState('');
  const [monthlyDeposit, setMonthlyDeposit] = useState('');
  const [interestRate, setInterestRate] = useState('');


  useEffect(()=>{
    if(!curAge)return
    if (!retireAge)return
    if(!principal)return
    if(!monthlyDeposit)return
    if(!interestRate)return
    setInvestment(
      principal *
        Math.pow(1 + interestRate / 100 / 12, 12 * (retireAge - curAge)) +
        monthlyDeposit *
          ((Math.pow(1 + interestRate / 100 / 12, 12 * (retireAge - curAge)) -
            1) /
            (interestRate / 100 / 12))
    );


},[curAge,retireAge,principal,monthlyDeposit,interestRate])

  useEffect(() => {
    if(!investment)return
    setInvestMoney(
      Intl.NumberFormat().format(
        Math.ceil(
          principal *
            Math.pow(1 + interestRate / 100 / 12, 12 * (retireAge - curAge)) +
            (parseInt(monthlyDeposit) + 100) *
              ((Math.pow(
                1 + interestRate / 100 / 12,
                12 * (retireAge - curAge)
              ) -
                1) /
                (interestRate / 100 / 12)) -
            investment
        )
      )
    );
    setInvestCoffee(
      Intl.NumberFormat().format(
        Math.ceil(
          principal *
            Math.pow(1 + interestRate / 100 / 12, 12 * (retireAge - curAge)) +
            (parseInt(monthlyDeposit) + 128) *
              ((Math.pow(
                1 + interestRate / 100 / 12,
                12 * (retireAge - curAge)
              ) -
                1) /
                (interestRate / 100 / 12)) -
            investment
        )
      )
    );
    setInvestFood(
      Intl.NumberFormat().format(
        Math.ceil(
          principal *
            Math.pow(1 + interestRate / 100 / 12, 12 * (retireAge - curAge)) +
            (parseInt(monthlyDeposit) + 200) *
              ((Math.pow(
                1 + interestRate / 100 / 12,
                12 * (retireAge - curAge)
              ) -
                1) /
                (interestRate / 100 / 12)) -
            investment
        )
      )
    );
    setYears(retireAge - curAge);
    setInitialBal(Intl.NumberFormat().format(Math.ceil(principal)));
    setContributions(
      Intl.NumberFormat().format(
        Math.ceil((retireAge - curAge) * 12 * monthlyDeposit)
      )
    );
    setGrowth(
      Intl.NumberFormat().format(
        Math.ceil(
          investment - Math.ceil((retireAge - curAge) * 12 * monthlyDeposit)
        )
      )
    );
    setInitialBalPer(Math.ceil((principal / Number(investment)) * 100));
    setContributionsPer(
      Math.ceil(
        (((retireAge - curAge) * 12 * monthlyDeposit) / Number(investment)) *
          100
      )
    );
    setGrowthPer(
      100 -
        (Math.ceil((principal / Number(investment)) * 100) +
          Math.ceil(
            (((retireAge - curAge) * 12 * monthlyDeposit) /
              Number(investment)) *
              100
          ))
    );
  }, [investment]);

  return (
    <div className="w-10/12 mx-auto md:px-3 md:w-4/12 md:mx-0 lg:w-6/12 xl:w-5/12 xl:bg-white">
      <form
        onSubmit={(e) => {
          e.preventDefault();
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
          value={curAge}
          onChange={(e) => {setCurAge(e.target.value)}}
        />
        <br />
        <label className="font-bold ">Enter the age you plan to retire.</label>
        <br />
        <input
          className="input text-xl pl-4 py-1 rounded-md w-5/12 mt-1 mb-1 md:w-6/12 lg:w-4/12 xl:w-3/12"
          type="number"
          name="retireAge"
          value={retireAge}
          onChange={(e) => {setRetireAge(e.target.value)}}
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
          value={principal}
          onChange={(e) => {setPrincipal(e.target.value)}}
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
          value={monthlyDeposit}
          onChange={(e) => {setMonthlyDeposit(e.target.value)}}
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
          value={interestRate}
          onChange={(e) => {setInterestRate(e.target.value)}}
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
