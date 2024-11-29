import { createSlice } from "@reduxjs/toolkit";

const achatsSlice = createSlice({
    name:"counter",
    initialState:{
        user:{id:1,username:"Hiba"},

        clients :[{ numero : 1, nom :'N1', prenom :'P1' }],
        
        produits :[{codeProduit :1, intitule :"Produit1",prix: 10,quantite:20}, {codeProduit :2, intitule:' Produit2', prix :20,quantite:59}, {codeProduit :3, intitule : 'Produit3', prix :30,quantite:60}],

        achats:[{numero :1, codeProduit :1, qte :5}],

        facture :[],

        objetProduit:[],


        categorie:[],
        fournisseurs:[]
    },
    reducers:{
        ajouterAchat:(state,action)=>{
            state.achats.push(action.payload)
        }
    }

})

export const {ajouterAchat} = achatsSlice.actions

export default achatsSlice.reducer