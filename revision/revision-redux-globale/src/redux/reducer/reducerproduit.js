const initialState = {
    produit:{
        id:'',
        nom:"",
        categorie:{id:'',libelle:""},
        quantite:'',
        prix:''
    },

    categorie:[{
        id:1,
        libelle:"femme"
    },{
        id:2,
        libelle:"homme"
    },{
        id:3,
        libelle:"enfent"
    }],

    produits:[{
        id:1,
        nom:"ordinateur portable",
        categorie:{id:4,libelle:"enfent"},
        quantite:15,
        prix:5000
    },{
        id:2,
        nom:"ordinateur portable",
        categorie:{id:4,libelle:"homme"},
        quantite:15,
        prix:5000
    }]
}

function reducerProduit(state=initialState,action){
    switch(action.type){
        case "AJOUTER_PRODUIT":
            state.categorie.map(function(item){
                if(item.id == action.payload.categorie.id){
                    action.payload.categorie.libelle = item.libelle
                }
            })

            return {...state,produits:[...state.produits,action.payload]}

        case "SUPPRIMER_PRODUIT":
            const _produits = state.produits.filter(function(item){
                return item.id !== action.payload
            })

            return {...state,produits:_produits}

        case "MODIFIE_PRODUIT":
            state.categorie.map(function(item){
                if(item.id == action.payload.categorie.id){
                    action.payload.categorie.libelle = item.libelle;
                }
            })

            const listProduit = state.produits.map(function(item){
                if(item.id == action.payload.id){
                    item = action.payload
                }
                return item
            })

            return {...state,produits:listProduit}

        default:
            return state
    }
}


export default reducerProduit