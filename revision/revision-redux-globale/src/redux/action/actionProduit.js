export function AjouterProduit(newProduit){
    return{
        type:"AJOUTER_PRODUIT",
        payload:newProduit
    }
}

export function ModifieProduit(newProduit){
    return{
        type : "MODIFIE_PRODUIT",
        payload : newProduit
    }
}

export function SupprimerProduit(id){
    return{
        type:"SUPPRIMER_PRODUIT",
        payload:id
    }
}

export function FiltrerProduit(categorie){
    return{
        type:"FILTRER_PRODUIT",
        payload:categorie
    }
}



//API REDUX
// export function chargerUsersAction(){
//     return function(dispatch){
//         axios.get("https://jsonplaceholder.typicode.com/users").then
//         ((response)=>{
//             dispatch(
//                 {
//                     type:"CHARGER_USERS",
//                     payload:response.data
//                 }
//             )
//         })
//     }
// }