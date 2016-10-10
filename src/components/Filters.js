import React, { Component, PropTypes } from 'react'
import DatePicker from './DatePicker'
import SelectFilter from './SelectFilter'
import { connect } from 'react-redux'

class Filter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  };

  handleStoreChange = () => {
    this.setState({
      articles: store.getState(),
      filters: store.getState()
    })
  }

  render() {
    const { articles } = this.props

    return (
      <div>
        <DatePicker />
        <SelectFilter articles = {this.props.articles} />
      </div>
    )
  }
}

export default connect(state => ({
  articles: state.articles
}))(Filter)