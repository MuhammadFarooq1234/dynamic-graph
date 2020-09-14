import React, {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';

import '../styles/Graph.css';

export default function Graph(props) {

    const interestRates = [1.3, 1.5, 1.7];

    const chartOptions= {
        scales: {
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                    display: false
                }
            }],
            yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                    drawBorder: false,
                },
                ticks: { min: 0, max: 1600, stepSize: 400, display: false},
            }]
        },
        legend:{
            display:false,
            position:'top'
        },
        elements: {
            point:{
                radius: 0
            }
        }
    }

    let chartData =
    {
        labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            label: 'Sales',
            fill: true,
            lineTension: 0.5,
            backgroundColor: '#f4e4c9',
            borderColor: '#f4e4c9',
            borderWidth: 2,
            data: []
          },
          {
            label: 'Revenue',
            fill: true,
            lineTension: 0.5,
            backgroundColor: '#f0d09b',
            borderColor: '#f0d09b',
            borderWidth: 2,
            data: []
          },
          {
            label: 'Profit',
            fill: true,
            lineTension: 0.5,
            backgroundColor: '#eab562',
            borderColor: '#eab562',
            borderWidth: 1  ,
            data: []
          }
        ]
      }

    function setChartData() {
        for (let i = 0; i < 3; i ++) {
            let newData = [];
            for (let j = 1; j <= 5; j++) {
                newData.push(props.value * (Math.pow(interestRates[i], j)));
            }
            chartData.datasets[i].data = newData;
        }
    }

    setChartData();

      const [data, setData] = useState(chartData);
      const [value, setValue] = useState(props.value);

    useEffect(() => {

        for (let i = 0; i < 3; i ++) {
            let newData = [];
            for (let j = 1; j <= 5; j++) {
                newData.push(props.value * (Math.pow(interestRates[i], j)));
            }
            chartData.datasets[i].data = newData;
        }
        setData(chartData);
      }, [props.value]); // Only re-run the effect if count changes

    return (

        <div className="Graph">
            <Line
                data={data}
                options={chartOptions}
            />
        </div>


    )







}
