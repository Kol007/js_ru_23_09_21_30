import { FILTER_SELECT, FILTER_DATERANGE } from '../constants'

const defaultFilters = {
  selected: [],
  dateRange: {
    from: null,
    to: null
  }
}

export default (filters = defaultFilters, action) => {
  const { type, payload } = action

  switch (type) {
    case FILTER_SELECT:
      return Object.assign({}, filters, payload)
    case FILTER_DATERANGE:
      return Object.assign({}, filters, payload)
  }

  return filters
}
