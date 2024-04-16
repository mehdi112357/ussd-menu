import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const CirclePieChart = ({diagramData}) => {

    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            backgroundColor: '#000'
        },
        title: {
            text: '45% Europe',
            verticalAlign: 'end',
            floating: true,
            style: {
                color: '#d9d9d9',
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },

        credits: {
            enabled: false
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                borderWidth: 0,
                showInLegend: true
            }
        },
        series: [{
            name: 'Value',
            colorByPoint: true,
            innerSize: '80%',
            data: diagramData
        }]
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default CirclePieChart;
