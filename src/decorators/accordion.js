import React from 'react'

export default function accordion(Component) {
  return class WrapperComponent extends React.Component {
    state = {
      openArticleId: null
    }

    toggleArticle = id => ev => {
      this.setState({
        openArticleId: id !== this.state.openArticleId ? id : null
      })
    }

    render() {
      return <Component {...this.props} {...this.state} toggleArticle = {this.toggleArticle} />
    }
  }
}
