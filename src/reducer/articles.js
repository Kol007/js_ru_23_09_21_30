import { DELETE_ARTICLE, ADD_COMMENT  } from '../constants'
import { normalizedArticles } from '../fixtures'
import { arrayToMap, arrayToMapNew } from '../store/helpers'
import { Record, Map } from 'immutable'

const ArticlesRecord = Record({
  id: '0',
  date: '',
  title: '',
  text: '',
  comments: []
})

export default (articles = arrayToMapNew(normalizedArticles, ArticlesRecord), action) => {
  const { type, payload } = action

  // console.log('---', normalizedArticles, articles);


  switch (type) {
    case DELETE_ARTICLE:
      return Object.keys(articles)
        .filter(id => id != payload.id)
        .reduce((acc, id) => ({...acc, [id]: articles[id]}), {})
    case ADD_COMMENT: {
      const { articleId, generateId} = payload
      const comments = articles[articleId].get('comments')
      // FIXME mutation
      articles[articleId] = articles[articleId].set('comments', [...comments, generateId])

      return articles
    }

  }
  return articles
}