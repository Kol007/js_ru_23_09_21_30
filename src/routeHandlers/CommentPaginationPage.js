import React, { Component, PropTypes } from 'react'
import CommentPagination from '../components/CommentPagination'

class CommentPaginationPage extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div>
        <div>
          <CommentPagination page = {+this.props.params.page} />
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default CommentPaginationPage