const QuickChart = require("quickchart-js");
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const {
        curAge,
        retireAge,
        monthlyDeposit,
        principal,
        interestRate,
      }: {
        curAge: number;
        retireAge: number;
        monthlyDeposit: number;
        principal: number;
        interestRate: number;
      } = JSON.parse(JSON.stringify(req.body));

      //validation for form using guard clauses
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
      const years: number = retireAge - curAge;
      //get years by dividing reitrement age by current age

      //calculate the estimated investment amount
      const investment: number =
        principal * Math.pow(1 + interestRate / 100 / 12, 12 * years) +
        monthlyDeposit *
          ((Math.pow(1 + interestRate / 100 / 12, 12 * years) - 1) /
            (interestRate / 100 / 12));

      const calcInvest = (amt: number): string => {
        //calculate the difference in investment amount based when monthly deposit changes
        return Intl.NumberFormat().format(
          Math.ceil(
            principal * Math.pow(1 + interestRate / 100 / 12, 12 * years) +
              (monthlyDeposit + amt) *
                ((Math.pow(1 + interestRate / 100 / 12, 12 * years) - 1) /
                  (interestRate / 100 / 12)) -
              investment
          )
        );
      };
      // SAVED AN EXTRA $100 PER MONTH(100) value
      const investMoney: string = calcInvest(100);

      //GAVE UP DAILY COFFEE PURCHASES(128)  value
      const investCoffee: string = calcInvest(128);

      //GAVE UP WEEKLY RESTAURANT VISITS(200) value
      const investFood: string = calcInvest(200);

      //calculate initial bal dollars
      const initialBal: string = Intl.NumberFormat().format(
        Math.ceil(principal)
      );

      //calculate growth dollars
      const growth: string = Intl.NumberFormat().format(
        Math.ceil(investment - Math.ceil(years * 12 * monthlyDeposit))
      );

      //calculate contributions dollars
      const contributions: string = Intl.NumberFormat().format(
        Math.ceil((retireAge - curAge) * 12 * monthlyDeposit)
      );

      //calculate percent of initial Balance
      const initialBalPer: number = Math.ceil(
        (principal / Number(investment)) * 100
      );
      //calculate percent of contributions
      const contributionsPer: number = Math.ceil(
        (((retireAge - curAge) * 12 * monthlyDeposit) / Number(investment)) *
          100
      );
      //calculate percent of growth
      const growthPer: number =
        100 -
        (Math.ceil((principal / Number(investment)) * 100) +
          Math.ceil(
            (((retireAge - curAge) * 12 * monthlyDeposit) /
              Number(investment)) *
              100
          ));

      // get the date
      const curYear: number = new Date().getFullYear();

      // array of investment amounts  for the chart
      const dataArr: number[] = [];
      // array of investment amounts  for the chart
      const chartYears: number[] = [];
      for (let i = 1; i <= years; i++) {
        //populate the arrays
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

      //year the user will become a millionaire
      const millYear: number | undefined = dataArr.find(
        (year: number): boolean => {
          return year > 1000000;
        }
      );

      //get the index when the user will be a millionaire
      const millYearIndex: number | undefined = dataArr.findIndex(
        (year: number): boolean => {
          return year === millYear;
        }
      );
      let mill: string;
      //find out is the user will become a millionaire
      if (millYear && millYear > 1000000) {
        mill = `You will be a millionaire in ${millYearIndex + 1} years. (${
          new Date().getFullYear() + millYearIndex + 1
        }: $${Intl.NumberFormat().format(dataArr[millYearIndex])})`;
      } else {
        mill = "";
      }

      // array of string to show a blue chart for the millionaire year
      const colorArr: string[] = dataArr.map((data) => {
        return data === millYear ? "rgb(2 132 199)" : "rgb(132 204 22)";
      });

      if (colorArr.length === 0) return;

      // configure the chart
      const myChart: any = new QuickChart()
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
                    callback: function (value: number) {
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
      // fetch the chart
      const fetchChart: Response = await fetch(myChart.getUrl());
      const chartURL: string = fetchChart.url;

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
    } catch (err: any) {
      console.log(err);
    }
  }
}
