import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { filterSelect } from '../AC/filters'
import { connect } from 'react-redux'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        id: PropTypes.string
    };

    handleChange = (selected) => {
        this.props.filterSelect(selected)
    }

    render() {
        const { articles, selected } = this.props

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options = {options}
            value = {selected}
            onChange = {this.handleChange}
        />
    }
}

export default connect(state => ({
    selected: state.filters.selected
}), { filterSelect })(SelectFilter)