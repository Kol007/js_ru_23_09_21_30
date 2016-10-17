import { DELETE_ARTICLE, ADD_COMMENT  } from '../constants'
import { normalizedArticles } from '../fixtures'
import { arrayToMap } from '../store/helpers'
import { Record } from 'immutable'

export default (articles = arrayToMap(normalizedArticles), action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return Object.keys(articles)
        .filter(id => id != payload.id)
        .reduce((acc, id) => ({...acc, [id]: articles[id]}), {})
    case ADD_COMMENT: {
      const { articleId, generateId} = payload

      // FIXME mutation
      articles[articleId].comments.push(generateId)

      return Object.keys(articles).reduce((acc, id) => ({...acc, [id]: articles[id]}), {})
    }

  }
  return articles
}