import React, { useState } from "react";
import Investment from "./components/Investment";
import { ResultContext } from "./Context/ResultContext";
export default function App() {
  const [investment, setInvestment] = useState(0);
  const [investMoney, setInvestMoney] = useState(0);
  const [investCoffee, setInvestCoffee] = useState(0);
  const [investFood, setInvestFood] = useState(0);
  const [years, setYears] = useState(0);
  const [initialBal, setInitialBal] = useState(0);
  const [contributions, setContributions] = useState(0);
  const [growth, setGrowth] = useState(0);
  const [initialBalPer, setInitialBalPer] = useState(0);
  const [growthPer, setGrowthPer] = useState(0);
  const [contributionsPer, setContributionsPer] = useState(0);
  const [chartDataArr,setChartDataArr]=useState([])
  const [dataArr, setDataArr] = useState([""]);
  const [chartYears, setChartYears] = useState([""]);

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
          chartDataArr,
          setChartDataArr,
          dataArr,
          setDataArr,
          chartYears,
          setChartYears,
        }}
      >
        <Investment />
      </ResultContext.Provider>
    </div>
  );
}
