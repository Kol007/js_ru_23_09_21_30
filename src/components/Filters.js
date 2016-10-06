import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import RangePicker from './RangePicker'


class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    state = {
        selected: null
    }

    handleChange = selected => this.setState({ selected })

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <div>
                <Select
                    options = {options}
                    value = {this.state.selected}
                    onChange = {this.handleChange}
                    multi={true}
                />
                <RangePicker />

            </div>
        )
    }
}

export default Filters