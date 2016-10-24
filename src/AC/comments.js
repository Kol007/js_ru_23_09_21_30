import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, LOAD_COMMENTS, START, SUCCESS } from '../constants'

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

// Лучше сделать динмаическим параметром, в конфиг сторе каком-нибудь хранить чтоли...
const LIMIT = 5

export function loadPaginationComments(page) {
  const offset = (page - 1) * LIMIT

  return {
    type: LOAD_COMMENTS,
    payload: { page },
    callAPI: `/api/comment?limit=${LIMIT}&offset=${offset}`
  }
}