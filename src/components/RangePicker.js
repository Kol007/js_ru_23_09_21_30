import React, {Component, PropTypes} from 'react';
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class RangePicker extends Component {
  static propTypes = {};

  state = {
    from: null,
    to:   null
  }

  handleDayClick = (e, day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }

  dateToString = (date) => {
    return date ? date.getUTCFullYear().toString() + '-' + (date.getUTCMonth() + 1).toString() + '-' + date.getUTCDate() : 'x'
  }

  getRange = () => {
    return (
      <div>
        Date range is: {this.dateToString(this.state.from)} - {this.dateToString(this.state.to)}
      </div>
    )
  }

  handleResetRange = () => {
    this.setState({from: null, to: null})
  }

  render() {
    const { from, to } = this.state;

    return (
      <div>
        <DayPicker
          ref = "datepicker"
          numberOfMonths = { 3 }
          selectedDays ={ day => DateUtils.isDayInRange(day, { from, to }) }
          onDayClick = { this.handleDayClick }
        />
        <button onClick = {this.handleResetRange}>Reset</button>
        {this.getRange()}
      </div>
  );

  }
}

export default RangePicker;
