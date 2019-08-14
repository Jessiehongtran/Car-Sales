

export const addFeature = (addAction) => {
    console.log('action addFeature was invoked')
    return {type: 'ADD_FEATURE', payload: addAction}
}