import React, { Component, PropTypes } from 'react'
import Article from './Article'
import accordion from './../decorators/accordion'
import { connect } from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        //from store
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        toggleItem: PropTypes.func.isRequired,
        isItemOpen: PropTypes.func.isRequired
    };

    render() {
        const { articles, toggleItem, isItemOpen } = this.props

        const articleComponents = articles.map(article => (
            <li key={article.id} >
                <Article article = {article} isOpen = {isItemOpen(article.id)} openArticle = {toggleItem(article.id)} />
            </li>))

        return (
            <ul>
                {articleComponents}
            </ul>
        )
    }
}

export default connect(state => ({
    articles: helperFilter(state)
}))(accordion(ArticleList))


// Helpers

function helperFilter (state){
    const { articles, filters } = state
    const articleList = Object.keys(articles).map(id => articles[id])
    const selected  = filters.selected
    const { from, to } = filters.dateRange

    return articleList.filter(article => {
        const published = Date.parse(article.date)
        console.log('--f-', selected, article.id, selected.includes(article.id));
        return (!selected.length || selected.includes(article.id)) &&
          (!from || !to || (published > from && published < to))
    })
}