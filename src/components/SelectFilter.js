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
        console.log('---', selected);
        this.props.filterSelect(selected.map(option => option.value))
    }

    render() {
        const { articles, selected } = this.props

        console.log('--c-', selected);
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options = {options}
            value = {selected}
            multi={true}
            onChange = {this.handleChange}
        />
    }
}

export default connect(state => ({
    selected: state.filters.selected
}), { filterSelect })(SelectFilter)