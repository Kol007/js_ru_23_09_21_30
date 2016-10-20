import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, LOAD_ARTICLE, START, SUCCESS, FAIL } from '../constants'

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadArticle(id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: { id }
        })

        setTimeout(() => {
            fetch(`/api/article/${id}`)
              .then((response) => response.json())
              .then((response) => dispatch({
                    type: LOAD_ARTICLE + SUCCESS,
                    payload: { id },
                    response
              }))
              .catch((error) => {
                  console.log('---', error);
              })
        }, 1000)
    }
}