import React, { Component } from "react";
import * as echarts from "echarts";

var myChart = echarts.init(document.getElementById("chart"));

myChart.setOption({
  title: {
    text: "ECharts Getting Started Example",
  },
  tooltip: {},
  xAxis: {
    data: ["shirt", "cardigan", "chiffon", "pants", "heels", "socks"],
  },
  yAxis: {},
  series: [
    {
      name: "sales",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
});

class Dashboard extends Component {
  render() {
    return (
      <>
        <div id="chart"></div>
        <h1>Hello</h1>
      </>
    );
  }
}

export default Dashboard;
