import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { modifieProduit, supprimerProduit } from "../features/counter/produitSlice";

function Afficher(){

    const produits = useSelector((state)=>state.counter.produits)
    const categorie = useSelector((state)=>state.counter.categorie)

    const [_produit,set_Produit] = useState({
        id:'',
        nom:"",
        categorie:{id:'',libelle:""},
        quantite:'',
        prix:''
    });

    const dispatch = useDispatch();

    function supprimer(id){
        dispatch(supprimerProduit(id));
    }

    function modifie(e){
        e.preventDefault();
        dispatch(modifieProduit({..._produit}))
    }

    return(
        <>
        <div class="text-gray-900 bg-gray-200">
    <div class="p-4 flex">
        <Link to="/ajouter">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                + Ajouter
            </button>
        </Link>
    </div>
    <div class="px-3 py-4 flex justify-center">
        <table class="w-full text-md bg-white shadow-md rounded mb-4">

            <tbody>
                <tr class="border-b">
                    <th class="text-left p-3 px-5">#</th>
                    <th class="text-left p-3 px-5">Nom Produit</th>
                    <th class="text-left p-3 px-5">categorie</th>
                    <th class="text-left p-3 px-5">Quantite</th>
                    <th class="text-left p-3 px-5">Prix</th>
                    <th class="text-left p-3 px-5">Action</th>
                </tr>
                {produits.map(function(item,index){
                    return (
                        <tr class="border-b hover:bg-orange-100" key={index}>
                            <td class="p-3 px-5">{item.id}</td>
                            <td class="p-3 px-5">{item.nom}</td>
                            <td class="p-3 px-5">{item.categorie.libelle}</td>
                            <td class="p-3 px-5">{item.quantite}</td>
                            <td class="p-3 px-5">{item.prix}</td>
                            <td class="p-3 px-5">
                                <button type="button" onClick={()=>set_Produit({...item})}
                                    class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Modifie</button>
                            
                                <button type="button" onClick={()=>supprimer(item.id)}
                                    class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                            </td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>

    </div>
</div>

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
                    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={modifie}>Modifie</button>
               
            </div>

    </form>
    </div>
</div>
        </>
    )
}
export default Afficher;