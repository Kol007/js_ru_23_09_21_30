import { normalizedComments } from '../fixtures'
import { arrayToMap } from '../store/helpers'
import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, FAIL } from '../constants'
import { Record, Map } from 'immutable'

const CommentModel = Record({
  id: null,
  user: '',
  text: ''
})

const defaultState = new Map({
  entities: new Map({}),
  loading: false,
  loaded: false,
  aid: null
})

export default (comments = defaultState, action) => {
  const { type, payload, response, error, generatedId } = action

  switch (type) {
    case ADD_COMMENT:
      return comments.setIn(['entities', generatedId], new CommentModel({...payload.comment, id: generatedId}))

    case LOAD_COMMENTS + START:
      return comments.set('loading', true)

    case LOAD_COMMENTS + SUCCESS:
      return comments
        .set('entities', arrayToMap(response, comment => new CommentModel(comment)))
        .set('loading', false)
        .set('loaded', true)
        .set('aid', payload.aid)
  }

  return comments
}