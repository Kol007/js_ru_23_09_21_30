import React, { Component, PropTypes } from 'react'
import Highcharts  from 'highcharts';
import toggleOpen from './decorators/toggleOpen'

let data = {
    chart: {type: 'column'},
    title: {text: 'Количество комментариев по постам'},
    xAxis: {type: 'category'},
    legend: {enabled: false},
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {enabled: true, format: '{point.y:.1f}'}
        }
    },
}

class Chart extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    componentDidMount() {
        Highcharts.chart(this.refs.chartContainer, data);
    }

    render() {
        const { articles, isOpen, toggleOpen } = this.props
        const classHidden = isOpen ? '' : 'hidden';

        let seriesData = articles.map(item => { return {name: item.title, y: item.comments ? item.comments.length : 0} } )

        const chartSeries = [{
            name: 'Посты',
            colorByPoint: true,
            data: seriesData
        }]

        data.series = chartSeries

        return <div >
                <button onClick={toggleOpen}>Toggle Chart</button>
                <div ref = "chartContainer" className={classHidden}/>
            </div>
    }
}

export default toggleOpen(Chart)