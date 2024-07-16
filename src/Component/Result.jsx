import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.jsx";
const Result = ({ Investment }) => {
  const reasultData = calculateInvestmentResults(Investment);

  const startingInvest =
    reasultData[0].valueEndOfYear -
    reasultData[0].interest -
    reasultData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {reasultData.map((item) => {
          const totalInvest =
            item.valueEndOfYear -
            item.annualInvestment * item.year -
            startingInvest;
          const toalAmountInvested = item.valueEndOfYear - totalInvest;
          return (
            <tr key={item.year} className="center">
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInvest)}</td>
              <td>{formatter.format(toalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
