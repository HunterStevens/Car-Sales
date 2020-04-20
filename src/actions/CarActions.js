export const addFeatures = newFeature =>{
    console.log("addFeature function running");

    return{type:'ADD_FEATURES', payload:newFeature};
}

export const removeFeatures = deleteFeature =>{
    console.log("removeFeatures function running");
    return{type:'REMOVE_FEATURES', payload:deleteFeature};
}