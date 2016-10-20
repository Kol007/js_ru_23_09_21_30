import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from './../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import Loader from './Loader'
import { connect } from 'react-redux'
import { getRelation } from '../store/helpers'
import { addComment, loadCommentsByArticleId, loadCommentsByArticleIdThunk } from '../AC/comments'

class CommentList extends  Component {
  static propTypes = {
    comments: PropTypes.object,
    //form toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  componentWillReceiveProps(nextProps) {
    const { loadCommentsByArticleId, loadCommentsByArticleIdThunk, loaded, loading, article, aid } = this.props
    // if ((!loaded && !loading)  || aid !== article.id) loadCommentsByArticleId(article.id)
    if ((!loaded && !loading) || aid !== article.id) loadCommentsByArticleIdThunk(article.id)
  }

  render() {
    const { article, loading, comments, addComment, isOpen, toggleOpen } = this.props

    if (loading) return <Loader/>

    if (!comments || !comments.size) return <div>
      <p>No comments yet</p>
      <NewCommentForm articleId = {article.id} addComment = {addComment}/>
    </div>

    const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
    const text = isOpen ? 'hide comments' : `show ${comments.size} comments`
    const body = isOpen && <div>
        <ul>{commentItems}</ul>
        <NewCommentForm articleId = {article.id} addComment = {addComment}/>
      </div>

    return (
      <div>
        <a href="#" onClick={toggleOpen}>{text}</a>
        {body}
      </div>
    )
  }
}


export default connect((state, props) => ({
  comments: state.comments.get('entities'),
  loading: state.comments.get('loading'),
  loaded: state.comments.get('loaded'),
  aid: state.comments.get('aid')
}), { addComment, loadCommentsByArticleId, loadCommentsByArticleIdThunk })(toggleOpen(CommentList))