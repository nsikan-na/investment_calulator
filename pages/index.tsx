import React, { useState } from "react";
import Investment from "../components/Investment";
import { ResultContext } from "../context";
export default function App() {
  // estimated investment value
  const [investment, setInvestment] = useState<number>(0);

  // SAVED AN EXTRA $100 PER MONTH value
  const [investMoney, setInvestMoney] = useState<number>(0);

  // GAVE UP DAILY COFFEE PURCHASE value
  const [investCoffee, setInvestCoffee] = useState<number>(0);

  // GAVE UP WEEKLY RESTAURANT VISITS value
  const [investFood, setInvestFood] = useState<number>(0);

  // difference between retirement age and current age
  const [years, setYears] = useState<number>(0);

  // dollar amount for initial balance
  const [initialBal, setInitialBal] = useState<number>(0);

  // dollar amount for contributions
  const [contributions, setContributions] = useState<number>(0);

  // dollar amount for growth
  const [growth, setGrowth] = useState<number>(0);

  // percent for initial balance
  const [initialBalPer, setInitialBalPer] = useState<number>(0);

  // percent for growth
  const [growthPer, setGrowthPer] = useState<number>(0);

  // percent for contributions
  const [contributionsPer, setContributionsPer] = useState<number>(0);

  // placeholder for the chart or the chart is form is handled
  const [displayChart, setDisplayChart] = useState<JSX.Element>(
    <div className="p-40"></div>
  );
  //millionaire sentence next below graph
  const [mill, setMill] = useState<string>("");
  // state of if the form is submitted or not
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  return (
    <div>
      <ResultContext.Provider
        value={{
          investment,
          setInvestment,
          setInvestMoney,
          investMoney,
          setInvestCoffee,
          investCoffee,
          setInvestFood,
          investFood,
          years,
          setYears,
          growth,
          initialBal,
          setGrowth,
          setInitialBal,
          contributions,
          setContributions,
          initialBalPer,
          setInitialBalPer,
          growthPer,
          setGrowthPer,
          contributionsPer,
          setContributionsPer,
          displayChart,
          setDisplayChart,
          mill,
          setMill,
          formSubmitted,
          setFormSubmitted,
        }}
      >
        <Investment />
      </ResultContext.Provider>
    </div>
  );
}
