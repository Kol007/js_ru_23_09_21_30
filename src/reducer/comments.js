import { arrayToMap } from '../store/helpers'
import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, LOAD_COMMENTS, SUCCESS, START } from '../constants'
import { Record, Map } from 'immutable'

const CommentModel = Record({
  id: null,
  user: '',
  text: ''
})

const defaultState = new Map({
  entities: new Map({}),
  // чтобы знать, какие ИД комментов соответсвуют каким страницам
  pages: new Map({}),
  total: 0,
  loadedPages: [],
  loading: false
})

export default (comments = defaultState, action) => {
  const { type, payload, response, error, generatedId } = action

  switch (type) {
    case ADD_COMMENT:
      return comments.setIn(['entities', generatedId], new CommentModel({...payload.comment, id: generatedId}))

    case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
      return comments.update('entities', entities =>
        entities.merge(arrayToMap(response, comment => new CommentModel(comment)))
      )

    case LOAD_COMMENTS + START:
      return comments.set('loading', true)

    case LOAD_COMMENTS + SUCCESS:
      const { page } = payload
      return comments
        .update('entities', entities =>
          entities.merge(arrayToMap(response.records, comment => new CommentModel(comment)))
        )
        .update('pages', pages =>
          pages.set(page, response.records.map(item => item.id))
        )
        .update('loadedPages', loadedPages => [...loadedPages, page] )
        .set('total', response.total)
        .set('loading', false)

  }

  return comments
}