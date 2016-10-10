import { FILTER_SELECT, FILTER_DATERANGE } from '../constants'

export default (filters = {selected: null, from: null, to: null}, action) => {
  const { type, payload } = action

  switch (type) {
    case FILTER_SELECT:
      filters.selected = payload.selected
      return filters
    case FILTER_DATERANGE:
      console.log('---', payload.range);
      filters.from = payload.range.from
      filters.to = payload.range.to
      return filters
  }

  return filters
}