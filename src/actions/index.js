

export const addFeature = (feature) => {
    console.log('action addFeature was invoked')
    return {type: 'ADD_FEATURE', payload: feature}
}

export const removeFeature = (id) => {
    console.log('id', id)
    return {type: 'REMOVE_FEATURE', payload: id}
}

export const increasePrice = (price) => {
    return {type: 'INCREASE_PRICE', payload: price}
}

export const reducePrice = (price) => {
    return {type: 'REDUCE_PRICE', payload: price}
}

export const updatePrice = (add,remove) => {
    return {type: 'UPDATE_PRICE', payload1: add, payload2: remove}
}