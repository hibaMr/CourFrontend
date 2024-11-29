
const initState = {
    produits:[
        {ref:1,nom:'PC HP',categorie:'Informatique'},
        {ref:2,nom:'SKYWORTH',categorie:'TV'}
    ]
}

function produitsReducer(state=initState,action){
    switch (action.type){
        case "ADD_PRODUIT":
            return {...state,produits:[...state.produits,action.payload]}

        case "DELETE_PRODUIT":
            const newProduit = state.produits.filter(function(item){
                return item.ref !== action.payload.ref
            })
            return {...state,produits:newProduit}

        default:
            return state
    }

}

export default produitsReducer;