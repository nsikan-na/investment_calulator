const QuickChart = require("quickchart-js");
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { curAge, retireAge, monthlyDeposit, principal, interestRate } =
        JSON.parse(req.body);
      if (
        !curAge ||
        !retireAge ||
        !monthlyDeposit ||
        !principal ||
        !interestRate
      ) {
        return res.json({
          success: false,
          message: "Please complete all fields!",
        });
      }
      if (
        isNaN(curAge) ||
        isNaN(retireAge) ||
        isNaN(monthlyDeposit) ||
        isNaN(principal) ||
        isNaN(interestRate)
      ) {
        return res.json({
          success: false,
          message: "Inputs must be numbers!",
        });
      }
      if (curAge < 0) {
        return res.json({
          success: false,
          message: "Age can't be less than 0!",
        });
      }
      if (retireAge < 0) {
        return res.json({
          success: false,
          message: "Retirement age can't be less than 0!",
        });
      }
      if (curAge > 100) {
        return res.json({
          success: false,
          message: "Age can't be greater than 100!",
        });
      }
      if (retireAge > 100) {
        return res.json({
          success: false,
          message: "Retirement age can't be greater than 100!",
        });
      }
      if (curAge >= retireAge) {
        return res.json({
          success: false,
          message: "Retirement Age cant be less than current age!",
        });
      }
      if (monthlyDeposit < 0) {
        return res.json({
          success: false,
          message: "Monthly Deposit can't be less than 0!",
        });
      }
      if (interestRate < 0) {
        return res.json({
          success: false,
          message: "Interest Rate can't be less than 0!",
        });
      }
      if (interestRate > 100) {
        return res.json({
          success: false,
          message: "Interest Rate can't be greater than 100!",
        });
      }
      const years = retireAge - curAge;

      const investment =
        principal * Math.pow(1 + interestRate / 100 / 12, 12 * years) +
        monthlyDeposit *
          ((Math.pow(1 + interestRate / 100 / 12, 12 * years) - 1) /
            (interestRate / 100 / 12));

      function calcInvest(amt) {
        return Intl.NumberFormat().format(
          Math.ceil(
            principal * Math.pow(1 + interestRate / 100 / 12, 12 * years) +
              (parseInt(monthlyDeposit) + amt) *
                ((Math.pow(1 + interestRate / 100 / 12, 12 * years) - 1) /
                  (interestRate / 100 / 12)) -
              investment
          )
        );
      }

      const investMoney = calcInvest(100);
      const investCoffee = calcInvest(128);
      const investFood = calcInvest(200);

      const initialBal = Intl.NumberFormat().format(Math.ceil(principal));
      const growth = Intl.NumberFormat().format(
        Math.ceil(investment - Math.ceil(years * 12 * monthlyDeposit))
      );
      const contributions = Intl.NumberFormat().format(
        Math.ceil((retireAge - curAge) * 12 * monthlyDeposit)
      );
      const initialBalPer = Math.ceil((principal / Number(investment)) * 100);
      const contributionsPer = Math.ceil(
        (((retireAge - curAge) * 12 * monthlyDeposit) / Number(investment)) *
          100
      );
      const growthPer =
        100 -
        (Math.ceil((principal / Number(investment)) * 100) +
          Math.ceil(
            (((retireAge - curAge) * 12 * monthlyDeposit) /
              Number(investment)) *
              100
          ));
      const curYear = new Date().getFullYear();
      const dataArr = [];
      const chartYears = [];
      for (let i = 1; i <= years; i++) {
        dataArr.push(
          Math.ceil(
            principal * Math.pow(1 + interestRate / 100 / 12, 12 * i) +
              monthlyDeposit *
                ((Math.pow(1 + interestRate / 100 / 12, 12 * i) - 1) /
                  (interestRate / 100 / 12))
          )
        );
        chartYears.push(curYear + i);
      }

      const s = dataArr.find((x) => {
        return x > 1000000;
      });
      const y = dataArr.findIndex((x) => {
        return x === s;
      });
      let mill;
      if (s > 1000000) {
        mill = `You will be a millionaire in ${y + 1} years. (${
          new Date().getFullYear() + y + 1
        }: $${Intl.NumberFormat().format(dataArr[y])})`;
      } else {
        mill = "";
      }
      const colorArr = dataArr.map((data) => {
        return data === s ? "rgb(2 132 199)" : "rgb(132 204 22)";
      });
      if (colorArr.length === 0) return;
      const myChart = new QuickChart();
      const x = myChart
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

      const fetchChart = await fetch(x.getUrl());
      const chartURL = fetchChart.url;
      return res.json({
        success: true,
        investment,
        investMoney,
        investCoffee,
        investFood,
        initialBal,
        initialBalPer,
        growth,
        growthPer,
        contributionsPer,
        chartURL,
        mill,
        years,
        contributions,
      });
    } catch (err) {
      console.log(err);
    }
  }
}
