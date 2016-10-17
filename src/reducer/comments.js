import { ADD_COMMENT } from '../constants'
import { normalizedComments} from '../fixtures'
import { arrayToMap } from '../store/helpers'

export default (comments = arrayToMap(normalizedComments), action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case ADD_COMMENT: {
            const { user, text, generateId } = payload

            return {...comments, [generateId]: {user, text, id: generateId}}
        }
    }

    return comments
}