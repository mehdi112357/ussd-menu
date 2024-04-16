import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const CircularPieChart = (props) => {

    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            backgroundColor: 'transparent'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '%<b>{point.percentage:.1f}</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<span style="font-size: 14px"><b>{point.name}</b>: {point.percentage:.1f}</span>'
                }
            }
        },
        series: [{
            name: 'اپراتور',
            colorByPoint: true,
            data: [{
                name: 'همراه اول',
                y: 51.67,
                sliced: true,
                selected: true,
                color: '#54c5d0'
            }, {
                name: 'ایرانسل',
                y: 24.77,
                color: '#f7c600'
            }, {
                name: 'رایتل',
                y: 5.86,
                color: '#942a68'
            }, {
                name: 'سایر',
                y: 1.86,
                color: '#00c946'
            }]
        }]
    };

    return <HighchartsReact highcharts={Highcharts} options={options}
                            style={{height: 300, minHeight: 300}}/>
}

export default CircularPieChart;
