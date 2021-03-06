import { Map } from 'immutable'

export function getRelation(entity, relation, storeState) {
    if (!entity[relation] || !storeState[relation]) return []
    return entity[relation].map(id => storeState[relation].getIn(['entities', id]))
}

export function getRelationMy(entity, relation, storeState, index) {
    if (!entity.getIn(index) || !storeState[relation]) return []
    return entity.getIn(index).map(id => storeState[relation].getIn(['entities', id]))
}


export function arrayToMap(arr, mapper = (f) => f) {
    return arr.reduce((acc, entity) => acc.set(entity.id, mapper(entity)), new Map({}))
}
/*
export function arrayToMapNew(arr, Record) {
    return arr.reduce((acc, entity) => ({...acc, [entity.id]: Record(entity)}), {})
}
*/