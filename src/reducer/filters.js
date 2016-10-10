import { FILTER_SELECT, FILTER_DATERANGE } from '../constants'

export default (filters = {selected: null, from: null, to: null}, action) => {
  const { type, payload } = action

  switch (type) {
    case FILTER_SELECT:
      //мутировать состояние - очень плохая практика. Делай Object.assign({}, filters, payload)
      //по этому ничего и не срабатывает, редакс думает, что ничего не поменялось
      filters.selected = payload.selected
      return filters
    case FILTER_DATERANGE:
      //аналогично
      console.log('---', payload.range);
      filters.from = payload.range.from
      filters.to = payload.range.to
      return filters
  }

  return filters
}
