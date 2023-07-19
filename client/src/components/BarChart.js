import React from "react";
import { Chart } from "react-google-charts";

const BarChart = ({ data }) => {
  return (
    <Chart
      chartType="BarChart"
      data={data}
      options={{
        title: "Track's Features",
        chartArea: { width: "60%" },
        hAxis: {
          title: "Features",
          textStyle: { color: "white" },
        },
        vAxis: {
          title: "Values",
          textStyle: { color: "white" },
        },
        backgroundColor: "transparent",
        series: { 0: { role: "style" } },
        fontName: "Arial",
        fontSize: 14,
        legend: "none",
        titleTextStyle: { color: "white" },
      }}
      width="100%"
      height="25rem"
    />
  );
};

export default BarChart;
