import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, FAIL } from '../constants'

export function addComment(comment, articleId) {
  return {
    type: ADD_COMMENT,
    payload: {
      articleId, comment
    },
    generateId: true
  }
}

export function loadCommentsByArticleId(aid) {
  return {
    type: LOAD_COMMENTS,
    callAPI: `/api/comment?article=${aid}`
  }
}

export function loadCommentsByArticleIdThunk(aid) {
  return (dispatch) => {
    dispatch({
      type: LOAD_COMMENTS + START,
      payload: { aid }
    })

    setTimeout(() => {
      fetch(`/api/comment?article=${aid}`)
        .then((response) => response.json())
        .then((response) => dispatch({
          type: LOAD_COMMENTS + SUCCESS,
          payload: { aid },
          response
        }))
        .catch((error) => {
          dispatch({
            type: LOAD_COMMENTS + FAIL,
            payload: { aid },
            error
          })
        })
    }, 1500)
  }
}