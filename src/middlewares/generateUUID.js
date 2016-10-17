import ADD_COMMENT from '../constants'

export default store => next => action => {
  if (action.type == ADD_COMMENT) {
    const newAction = Object.assign({}, action, {payload: { generatedID: generateUUID() } })
    next(newAction)
    return
  }

  next(action)
}

function generateUUID() {
  var d = new Date().getTime()
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random()*16)%16 | 0
    d = Math.floor(d/16)
    return (c=='x' ? r : (r&0x3|0x8)).toString(16)
  })
}