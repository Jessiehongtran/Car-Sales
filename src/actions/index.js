

export const addFeature = (feature) => {
    console.log('action addFeature was invoked')
    return {type: 'ADD_FEATURE', payload: feature}
}