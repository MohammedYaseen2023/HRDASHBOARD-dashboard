
import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

import { AttendCount, LateCount, AbsenceCount } from "./Signals";

function ChartPieAttend() {
   // console.log(parseInt(AttendCount));
const aa =60;
    const seriesData = [aa, 35, 5,  20 ]
    const lablesData = ['الموظفين', 'الحضور', 'الغياب', 'المتأخرين']
    const state = {

        series: seriesData,//[44, 55, 41, 17, 15],
        options: {
            labels: lablesData,
            chart: {
                type: 'donut',
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        direction: 'row',
                        position: { vertical: 'bottom', horizontal: 'middle' },

                    }
                }
            }]
        },
    };

    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="donut" />
        </div>
    );

}



function ChartPiePrecision() {

    //const seriesData = [ 55, 20, 35]
    const seriesData = [ 55, 20, 35]
    const lablesData = ['الحضور', 'المتاخرين', 'الملتزمين']
    const state = {

        series: seriesData,//[44, 55, 41, 17, 15],
        options: {
            labels: lablesData,
            chart: {
                type: 'pie',
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        direction: 'row',
                        position: { vertical: 'bottom', horizontal: 'middle' },

                    }
                }
            }]
        },
    };

    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="pie" />
        </div>
    );

}


 export { ChartPieAttend, ChartPiePrecision };