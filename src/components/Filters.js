import React, { Component, PropTypes } from 'react'

import DatePicker from './DatePicker'
import SelectFilter from './SelectFilter'
import RangePicker from './RangePicker'

class Filter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
        return (
            <div>
                <RangePicker />
                <SelectFilter articles = {this.props.articles} />
            </div>
        )
    }
}

export default Filter