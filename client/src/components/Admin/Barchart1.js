// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import 'chart.js/auto';


// function Barchart1(props) {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const myChartRef = chartRef.current.getContext('2d');

//     new Chart(myChartRef, {
//       type: 'bar',
//       data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [
//           {
//             label: 'Sales',
//             data: [86, 67, 91, 53, 64, 70, 91],
//             backgroundColor: 'rgba(255, 99, 132, 0.2)',
//             borderColor: 'rgba(255, 99, 132, 1)',
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         scales: {
//           yAxes: [
//             {
//               ticks: {
//                 beginAtZero: true,
//               },
//             },
//           ],
//         },
//       },
//     });
//   }, []);

//   return <canvas ref={chartRef} />;
// }

// export default Barchart1;
