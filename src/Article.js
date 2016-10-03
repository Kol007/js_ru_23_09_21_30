import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import toggleOpen from './decorators/toggleOpen'


const Article = (props) => {
  const { article, isOpen, openArticle } = props
  const body = isOpen ? <section>{article.text}<CommentList comments = {article.comments} /></section> : null

  return (
    <div>
      <h3 onClick = {openArticle}>{article.title}</h3>
      {body}
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    id:     PropTypes.string.isRequired,
    title:  PropTypes.string.isRequired,
    text:   PropTypes.string,
    date:   PropTypes.string
  }).isRequired
};

export default Article;
