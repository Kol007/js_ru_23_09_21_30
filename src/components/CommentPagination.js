import React, {Component, PropTypes} from 'react';
import { loadPaginationComments } from '../AC/comments'
import Comment from './Comment'
import Loader from './Loader'
import { connect } from 'react-redux'
import { getRelationMy } from '../store/helpers'
import { Link } from 'react-router'

class CommentPagination extends Component {
  static propTypes = {
    page: PropTypes.number,
    // from connect
    comments: PropTypes.array,
  };

  componentDidMount(nextProps, nextContext) {
    const { loadPaginationComments, loadedPages, page = 1 } = this.props
    if (!~loadedPages.indexOf(page)) loadPaginationComments(page)
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const { loadPaginationComments, loadedPages, loading, page } = nextProps
    if (!~loadedPages.indexOf(page) && !loading) loadPaginationComments(page)
  }


  render() {
    const { page, comments, total, loading } = this.props

    if (loading) return <Loader/>

    // limit лучше брать из конфиг стора думаю...
    const limit = 5

    let pager = [];
    for(let i = 1; i <= Math.ceil(total / limit); i++) {
      pager.push(<li key = {i}><Link to = {`/comment/${i}`} >{i}</Link></li>)
    }

    if (!comments || !comments.length) return (
      <div>
        <h2>Wrong page!</h2>
        {pager}
      </div>
    )

    const content = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)

    return (
      <div>
        <h2>CommentPagination: currentPage - {page}</h2>

        <ul>
          {content}
        </ul>

        <ul>
          {pager}
        </ul>

      </div>
    );
  }
}

export default connect((state, props) => {
  return ({
    comments: getRelationMy(state.comments, 'comments', state, ['pages', props.page || 1]),

    pages: state.comments.get('pages'),
    total: state.comments.get('total'),
    loadedPages: state.comments.get('loadedPages'),
    loading: state.comments.get('loading'),

    // Здесь может както лучше задать дефолт..
    page: props.page || 1
})}, { loadPaginationComments })(CommentPagination)
