import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const LinearComparisonChart = (props) => {

    const options = {
        chart: {
            type: 'column',
            backgroundColor: 'transparent'
        },
        title: {
            text: 'Monthly traffic of operators'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: [
                'فروردین',
                'اردیبهشت',
                'خرداد',
                'تیر',
                'مرداد',
                'شهریور',
                'مهر',
                'آبان',
                'آذر',
                'دی',
                'بهمن',
                'اسفند'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0"> <b>{series.name}</b>: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: props.data
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default LinearComparisonChart;
