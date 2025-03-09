import { createSlice } from "@reduxjs/toolkit";

const produitSlice = createSlice({
    name:"counter",
    initialState:{
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
    },

    reducer:{
        ajouterProduit:(state,action)=>{
            state.produits.push(action.payload)
        },
        supprimerProduit:(state,action)=>{
            const _produits = state.produits.filter(function(item){
                return item.id !== action.payload
            })
            
            state.produits = _produits
        },
        modifieProduit:(state,action)=>{
            const _produits = state.produits.map(function(item){
                if(item.id == action.payload.id){
                    item = action.payload
                }
                return item
            })
            state.produit = _produits
        }
    }
})

export default produitSlice.reducer;
export const {ajouterProduit,supprimerProduit,modifieProduit} = produitSlice.actions