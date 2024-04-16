
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const LinearBlueChart = (props) => {

    const options = {
        chart: {
            zoomType: 'x',
            height: 380,
            backgroundColor: 'transparent'
        },
        title: {
            text: '' +
                'Online operators bandwidth traffic'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            visible: true,
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        credits: {
            enabled: false
        },

        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: '',
            data: props.data
        }]
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default LinearBlueChart;
