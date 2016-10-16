import { FILTER_SELECT, FILTER_DATERANGE } from '../constants'

export function filterSelect(selected) {
  return {
    type: FILTER_SELECT,
    payload: { selected }
  }
}

export function filterDaterange(dateRange) {
  return {
    type: FILTER_DATERANGE,
    payload: { dateRange }
  }
}