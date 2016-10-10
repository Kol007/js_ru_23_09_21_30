import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css';
import { filterDaterange } from '../AC/filters'
import { connect } from 'react-redux'


class DatePicker extends Component {
    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, {from: this.props.from, to: this.props.to})
        this.props.filterDaterange(range)
    }

    render() {
        const { from, to } = this.props;

        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(state => ({
    from: state.filters.from,
    to: state.filters.to
}), { filterDaterange })(DatePicker)