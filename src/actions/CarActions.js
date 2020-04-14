export const addFeatures = () =>{
    console.log("addFeature function running");

    return{type:'ADD_FEATURES'};
}

export const removeFeatures = feature =>{
    return{type:'REMOVE_FEATURES', payload:feature};
}