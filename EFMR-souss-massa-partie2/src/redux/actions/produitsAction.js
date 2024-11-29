export function addProduitAction(newProduit){
    return {
        type:"ADD_PRODUIT",
        payload:newProduit
    }
}

export function deleteProduitAction(newProduit){
    return {
        type:"DELETE_PRODUIT",
        payload:newProduit
    }
}