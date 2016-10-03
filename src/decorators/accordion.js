import React from 'react'

export default function accordion(Component) {
  return class WrapperComponent extends React.Component {
    state = {
      //не привязывайся к названию сущности, в декораторах должен быть общий функционал. Используй, например, openItemId 
      openItemId: null
    }

    toggleArticle = id => ev => {
      this.setState({
        openItemId: id !== this.state.openItemId ? id : null
      })
    }

    render() {
      return <Component {...this.props} {...this.state} toggleArticle = {this.toggleArticle} />
    }
  }
}
