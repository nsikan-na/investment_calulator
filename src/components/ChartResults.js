import React, { useContext, useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { ResultContext } from "../Context/ResultContext";

export default function ChartResults() {
  const {
    chartDataArr,
    investment,
    setDataArr,
    setChartYears,
    setChartDataArr,
  } = useContext(ResultContext);
  const [chart, setChart] = useState();

  const options = {
    legend: { position: "none" },
    colors: ["#84cc16"],
    histogram: { lastBucketPercentile: 5 },
  };

  useEffect(() => {
    if (chartDataArr.length === 0) return;
    setChart(
      <Chart
        chartType="Bar"
        width="90%"
        height="90%"
        data={chartDataArr}
        options={options}
      />
    );
    setDataArr([""]);
    setChartYears([""]);
    setChartDataArr([]);
  }, [chartDataArr,investment]);


  return <>{chart}</>;
}
