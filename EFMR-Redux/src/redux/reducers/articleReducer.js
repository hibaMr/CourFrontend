import Facture from "../../facture/Facture"

const intialState = {
    user:{id:1,username:"Hiba"},

    clients :[{ numero : 1, nom :'N1', prenom :'P1' }],
    
    produits :[{codeProduit :1, intitule :"Produit1",prix: 10,quantite:20}, {codeProduit :2, intitule:' Produit2', prix :20,quantite:59}, {codeProduit :3, intitule : 'Produit3', prix :30,quantite:60}],

    achats:[{numero :1, codeProduit :1, qte :5}],

    facture :[],

    objetProduit:[],


    categorie:[],
    fournisseurs:[]
}



function articleReducer(state=intialState,action){
    switch(action.type){
                
        case "AJOUTER_ACHAT":
            return {...state,achats:[...state.achats,action.payload]}

        case "SUPPRIMER_ACHAT":
            const newAchats = state.achats.filter(function(item){
                return item.numero !== action.payload
            })
            return {...state,achats:newAchats}

        case "AFFICHER_ACHAT":
            const newListAchats = state.achats.filter(function(item){
                
                return item.numero == action.payload
            })


            return {...state,facture:newListAchats}

        case "GET_ACHAT":
            const newListProduits = state.produits.filter(function(item){
                
                return item.codeProduit == action.payload
            })        
            return {...state,objetProduit:newListProduits}     
        
        default:
            return state
    }

}

export default articleReducer