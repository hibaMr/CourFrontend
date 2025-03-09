import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajouterProduit } from "../features/counter/produitSlice";
import { Link } from "react-router-dom";

function Ajouter(){

    const categorie = useSelector((state)=>state.counter.categorie)

    const [_produit,set_Produit] = useState({
        id:'',
        nom:"",
        categorie:{id:'',libelle:""},
        quantite:'',
        prix:''
    });

    const dispatch = useDispatch();

    function ajouter(){
        dispatch(ajouterProduit({..._produit}))
    }

    return(
        <>
        <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
        <h1 class="text-center text-2xl font-bold mb-6">Forgot Password</h1>
        <form>
        <div class="mb-4">
            <label for="name" class="block text-gray-700 font-medium mb-2">Nom Produit</label>
            <input type="text" id="name" name="name"
            onChange={(e)=>set_Produit({..._produit,nom:e.target.value})}
                class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required/>
        </div>
        <div class="mb-4">
            <label for="categorie" class="block text-gray-700 font-medium mb-2">Categorie</label>
            <select id="categorie" name="categorie" 
            onChange={(e)=>set_Produit({..._produit,categorie:{..._produit.categorie,id:e.target.value}})}
             class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required>

                <option value="">Select Categorie</option>
                    {categorie.map(function(item,index){
                        return(
                        <option value={item.id} key={index} >{item.libelle}</option>
                        )
                    })}
                    
            </select>
        </div>
        <div class="mb-4">
            <label for="age" class="block text-gray-700 font-medium mb-2">Quantite Stockee</label>
            <input type="number" id="count" name="count"
            onChange={(e)=>set_Produit({..._produit,quantite:e.target.value})}
                class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required/>
        </div>

        <div class="mb-4">
            <label for="prix" class="block text-gray-700 font-medium mb-2">Prix</label>
            <input type="number" id="prix" name="prix"
            onChange={(e)=>set_Produit({..._produit,prix:e.target.value})}
                class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required/>
        </div>
            <div>
                <Link to="/">
                    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={ajouter}>Ajouter</button>
                </Link>
            </div>

    </form>
    </div>
</div>
        </>
    )
}
export default Ajouter