import { useState } from "react";
import { Link } from "react-router-dom";

function ModifieProduits({listProduits,produit,setListProduits,setProduit,categorie,setCategoire}){

    const [_produit,set_Produit] = useState({
        id: produit.id,
        libelle:produit.libelle,
        categorie:{id:produit.categorie.id,libelle:produit.categorie.libelle},
        quantiteStockee:produit.quantiteStockee,
        prix:produit.prix
    })

    function modifie(){
        categorie.map(function(item){
            if(item.id == _produit.categorie.id){
                _produit.categorie.libelle = item.libelle
            }
            return item
        })

        const _produits = listProduits.map(function(item){
            if(item.id == _produit.id){
                item = _produit
            }
            return item
        })

        setListProduits(_produits)
    }


    return(
        <>
        <div class="flex justify-center mt-20 px-8">
    <form class="max-w-2xl">
        <div class="flex flex-wrap border shadow rounded-lg p-3 dark:bg-gray-600">
            <h2 class="text-xl text-gray-600 dark:text-gray-300 pb-2">Account settings:</h2>

            <div class="flex flex-col gap-2 w-full border-gray-400">

                <div>
                    <label class="text-gray-600 dark:text-gray-400">User
                        Nom Produit
                    </label>
                    <input
                    value={_produit.libelle}
                    onChange={(e)=>set_Produit({..._produit,libelle:e.target.value})}
                        class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                        type="text"/>
                </div>

                <div class="mb-4">
                    <label for="categorie" class="block text-gray-700 font-medium mb-2">Categorie</label>
                    <select id="categorie" name="categorie"
                    onChange={(e)=>set_Produit({..._produit,categorie:{..._produit.categorie,id:e.target.value}})}
                     class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required>

                        <option value="">Select Categorie</option>
                        {categorie.map(function(item,index){
                            return(
                                <option value={item.id} key={index}>{item.libelle}</option>
                            )
                        })}
                    </select>
                </div>

                <div>
                    <label class="text-gray-600 dark:text-gray-400">Quantite</label>
                    <input
                    value={_produit.quantiteStockee}
                    onChange={(e)=>set_Produit({..._produit,quantiteStockee:e.target.value})}
                        class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                        type="number"/>
                </div>

                <div>
                    <label class="text-gray-600 dark:text-gray-400">Prix</label>
                    <input
                    value={_produit.prix}
                    onChange={(e)=>set_Produit({..._produit,prix:e.target.value})}
                        class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                        type="number"/>
                </div>
                <div class="flex justify-end">
                    <Link to="/">
                        <button
                        onClick={modifie}
                            class="py-1.5 px-3 m-1 text-center bg-violet-700 border rounded-md text-white  hover:bg-violet-500 hover:text-gray-100 dark:text-gray-200 dark:bg-violet-700"
                            type="submit">Modifier</button>
                    </Link>
                </div>
            </div>
        </div>
    </form>
</div>
        </>
    )
}
export default ModifieProduits;