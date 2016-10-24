import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, START, SUCCESS } from '../constants'
import $ from 'jquery'

export function addComment(comment, articleId) {
  return {
    type: ADD_COMMENT,
    payload: {
      articleId, comment
    },
    generateId: true
  }
}

export function loadCommentsForArticle(articleId) {
  return {
    type: LOAD_COMMENTS_FOR_ARTICLE,
    payload: { articleId },
    callAPI: `/api/comment?article=${articleId}`
  }
}