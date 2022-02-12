import React, { useState, useContext, useEffect } from "react";
import { ResultContext } from "../Context/ResultContext";
import "./Input.css";
import QuickChart from "quickchart-js/build/quickchart.esm.js";
import { CircularProgress } from "@material-ui/core";

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
    years,
    setDataArr,
    dataArr,
    chartYears,
    setChartYears,
    setDisplayChart,
    setFormSubmitted,
    setMill,
  } = useContext(ResultContext);
  const [curAge, setCurAge] = useState("");
  const [retireAge, setRetireAge] = useState(67);
  const [principal, setPrincipal] = useState("");
  const [monthlyDeposit, setMonthlyDeposit] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [handleSubmit, setHandleSubmit] = useState(false);
  const [data, setData] = useState(false);
  const [test, setTest] = useState(false);
  const [colorArr, setColorArr] = useState([]);
  const [curAgeError, setCurAgeError] = useState("hidden");
  const [curAgeErrorMsg, setCurAgeErrorMsg] = useState(null);
  const [retireAgeError, setRetireAgeError] = useState("hidden");
  const [retireAgeErrorMsg, setRetireAgeErrorMsg] = useState(null);
  const [principalError, setPrincipalError] = useState("hidden");
  const [principalErrorMsg, setPrincipalErrorMsg] = useState(null);
  const [monthlyDepositError, setMonthlyDepositError] = useState("hidden");
  const [monthlyDepositErrorMsg, setMonthlyDepositErrorMsg] = useState(null);
  const [interestRateError, setInterestRateError] = useState("hidden");
  const [interestRateErrorMsg, setInterestRateErrorMsg] = useState(null);
  const [formError, setFormError] = useState("hidden");

  function isNumeric(value) {
    //checks if value is numeric
    //returns boolean value
    return /^-?\d+$/.test(value);
  }

  useEffect(() => {
    switch (true) {
      case curAge < 0: {
        setCurAgeError("block");
        setCurAgeErrorMsg("Current age must be greater than 0.");
        break;
      }
      case curAge > 100: {
        setCurAgeError("block");
        setCurAgeErrorMsg("Current age must less than 100.");
        break;
      }
      case retireAge > curAge: {
        setRetireAgeError("hidden");
        setCurAgeError("hidden");
        break;
      }

      default: {
        setCurAgeError("hidden");
        setCurAgeErrorMsg(null);
      }
    }
    switch (true) {
      case retireAge < 0: {
        setRetireAgeError("block");
        setRetireAgeErrorMsg("Retire age must be greater than 0.");
        break;
      }
      case retireAge > 100: {
        setRetireAgeError("block");
        setRetireAgeErrorMsg("Retire age must less than 100.");
        break;
      }
      case Number(retireAge) < Number(curAge): {
        setRetireAgeError("block");
        setRetireAgeErrorMsg("Current age can't be greater than retire age");
        break;
      }

      default: {
        setRetireAgeError("hidden");
        setRetireAgeErrorMsg(null);
      }
    }
    switch (true) {
      default: {
        setPrincipalError("hidden");
        setPrincipalErrorMsg(null);
      }
    }
    switch (true) {
      case monthlyDeposit < 0: {
        setMonthlyDepositError("block");
        setMonthlyDepositErrorMsg("Deposit must be greater than 0.");
        break;
      }

      default: {
        setMonthlyDepositError("hidden");
        setMonthlyDepositErrorMsg(null);
      }
    }
    switch (true) {
      case interestRate < 0: {
        setInterestRateError("block");
        setInterestRateErrorMsg("Rate must be greater than 0.");
        break;
      }
      case interestRate > 100: {
        setInterestRateError("block");
        setInterestRateErrorMsg("Rate must be less than 100.");
        break;
      }

      default: {
        setInterestRateError("hidden");
        setInterestRateErrorMsg(null);
      }
    }

  }, [curAge, retireAge, principal, monthlyDeposit, interestRate]);

  useEffect(() => {
    if (!handleSubmit) return;
    setHandleSubmit(false);
    switch (true) {
      case !isNumeric(curAge): {
        setCurAgeError("block");
        setCurAgeErrorMsg("Please enter numbers only.");
        break;
      }
      case !isNumeric(principal): {
        setPrincipalError("block");
        setPrincipalErrorMsg("Please enter numbers only.");
        break;
      }
      case !isNumeric(retireAge): {
        setRetireAgeError("block");
        setRetireAgeErrorMsg("Please enter numbers only.");
        break;
      }
      case !isNumeric(monthlyDeposit): {
        setMonthlyDepositError("block");
        setMonthlyDepositErrorMsg("Please enter numbers only.");
        break;
      }
      case !isNumeric(interestRate): {
        setInterestRateError("block");
        setInterestRateErrorMsg("Please enter numbers only.");
        break;
      }
    }
    if (curAgeErrorMsg != null) {
      setFormError("block");
      return;
    }

    if (retireAgeErrorMsg != null) {
      setFormError("block");
      return;
    }

    if (principalErrorMsg != null) {
      setFormError("block");
      return;
    }

    if (monthlyDepositErrorMsg != null) {
      setFormError("block");
      return;
    }

    if (interestRateErrorMsg != null) {
      setFormError("block");
      return;
    }

    setFormError("hidden");
    setFormSubmitted(true);
    setInvestment(
      principal *
        Math.pow(1 + interestRate / 100 / 12, 12 * (retireAge - curAge)) +
        monthlyDeposit *
          ((Math.pow(1 + interestRate / 100 / 12, 12 * (retireAge - curAge)) -
            1) /
            (interestRate / 100 / 12))
    );
  }, [handleSubmit]);

  useEffect(() => {
    if (!investment) return;
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
    setColorArr([]);
    setDataArr([]);
    setChartYears([]);
    setData(!data);
  }, [investment]);

  useEffect(() => {
    if (!data) return;
    setTest(!test);
    const curYear = new Date().getFullYear();
    // console.log(curYear);
    for (let i = 1; i <= years; i++) {
      setDataArr((prevDataArr) => [
        ...prevDataArr,
        Math.ceil(
          principal * Math.pow(1 + interestRate / 100 / 12, 12 * i) +
            monthlyDeposit *
              ((Math.pow(1 + interestRate / 100 / 12, 12 * i) - 1) /
                (interestRate / 100 / 12))
        ),
      ]);
      setChartYears((prevChartYears) => [...prevChartYears, curYear + i]);
    }
  }, [data]);

  useEffect(() => {
    if (!test) return;
    const s = dataArr.find((x) => {
      return x > 1000000;
    });
    const y = dataArr.findIndex((x) => {
      return x === s;
    });
    if (s > 1000000) {
      setMill(
        `You will be a millionaire in ${y + 1} years. (${
          new Date().getFullYear() + y + 1
        }: $${Intl.NumberFormat().format(dataArr[y])})`
      );
    } else {
      setMill("");
    }
    setColorArr(
      dataArr.map((data) => {
        return data === s ? "rgb(2 132 199)" : "rgb(132 204 22)";
      })
    );
  }, [test]);

  useEffect(() => {
    if (colorArr.length === 0) return;
    const myChart = new QuickChart();
    myChart
      .setConfig({
        type: "bar",
        data: {
          labels: [...chartYears],
          datasets: [{ data: [...dataArr], backgroundColor: [...colorArr] }],
        },
        options: {
          legend: { display: false },
          scales: {
            yAxes: [
              {
                ticks: {
                  // Include a dollar sign in the ticks
                  callback: function (value, index, values) {
                    return value > 1000 && value < 1000000
                      ? `$${value / 1000}K`
                      : value === 0
                      ? "$0"
                      : `$${value / 1000000}M`;
                  },
                },
              },
            ],
          },
        },
      })
      .setWidth(800)
      .setHeight(400);

    const displayChart = async () => {
      try {
        setDisplayChart(
          <div className="p-40">
            <CircularProgress />
          </div>
        );
        await fetch(myChart.getUrl()).then((x) => {
          setTimeout(() => {
            setDisplayChart(<img src={x.url} className="mx-auto w-11/12" />);
          }, 500);
        });
      } catch (err) {
        console.log(err);
      }
    };
    displayChart();

    setData(false);
    setTest(false);
    setHandleSubmit(false);
  }, [colorArr]);

  return (
    <div className="w-10/12 mx-auto md:px-3 md:w-4/12 md:mx-0 lg:w-6/12 xl:w-5/12 xl:bg-white">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setHandleSubmit(!handleSubmit);
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
          min="0"
          max="100"
          value={curAge}
          onChange={(e) => {
            setCurAge(e.target.value);
          }}
        />
        <div className={` text-sm font-bold text-red-600 ${curAgeError}`}>
          {curAgeErrorMsg}
        </div>
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
          min="0"
          max="100"
          value={retireAge}
          onChange={(e) => {
            setRetireAge(e.target.value);
          }}
        />
        <div className={`text-sm font-bold text-red-600 ${retireAgeError}`}>
          {retireAgeErrorMsg}
        </div>
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
            value={principal}
            onChange={(e) => {
              setPrincipal(e.target.value);
            }}
          />
        </div>

        <div className={`text-sm font-bold text-red-600 ${principalError}`}>
          {principalErrorMsg}
        </div>
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
            value={monthlyDeposit}
            min="0"
            onChange={(e) => {
              setMonthlyDeposit(e.target.value);
            }}
          />
        </div>
        <div
          className={`text-sm font-bold text-red-600 ${monthlyDepositError}`}
        >
          {monthlyDepositErrorMsg}
        </div>
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
            name="interestRate"
            min="0"
            value={interestRate}
            onChange={(e) => {
              setInterestRate(e.target.value);
            }}
          />
          <i className="text-xl -translate-x-10 translate-y-2 relative">%</i>
        </div>
        <div className={`text-sm font-bold text-red-600 ${interestRateError}`}>
          {interestRateErrorMsg}
        </div>
        <p className="text-sm font-bold text-gray-500">
          This is the return your investment will generate over time.
          Historically, the 30-year return of the S&P 500 has been roughly
          10-12%.
          <a href="http://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html">
            <span className="text-blue-700 font-bold text-xs">1</span>
          </a>
        </p>
        <button className="text-white font-extrabold bg-sky-600 px-7 py-3 rounded-md my-6 shadow md:px-5 md:py-2 hover:bg-sky-500 ">
          Calculate
        </button>
        <div className={`text-sm font-bold text-red-600 ${formError}`}>
          Please check form inputs
        </div>
      </form>
    </div>
  );
}
