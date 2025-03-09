import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function AjouterProduit({produits,setProduits,produit,setProduit,quantite,setQuantite}){


    function Ajouter(){
        setProduits([...produits,produit])
    }

    useEffect(function(){
        if(produits.length > 0){
            setProduit({
                ...produit,
                id:produits[produits.length - 1].id + 1
            })
        }else{
            setProduit({
                ...produit,
                id:1
            })
        }
    },[produits.length])

    return(
        <>
        <div class="bg-white border border-4 rounded-lg shadow relative m-10">

<div class="flex items-start justify-between p-5 border-b rounded-t">
    <h3 class="text-xl font-semibold">
        Ajouter produit
    </h3>
    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
       <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
</div>

<div class="p-6 space-y-6">
    <form action="#">
        <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
                <label for="product-name" class="text-sm font-medium text-gray-900 block mb-2">Nom Produit</label>
                <input type="text" name="product-name" id="product-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Apple Imac 27”" required=""
                onChange={(e)=>setProduit({...produit,title:e.target.value})}/>
            </div>
            <div class="col-span-6 sm:col-span-3">
                <label for="category" class="text-sm font-medium text-gray-900 block mb-2">Categorie</label>
                <select
                    id="categorieProduit"
                    name="categorieProduit"
                    onChange={(e)=>setProduit({...produit,category:e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                    <option value="Petit déjeuner">men's clothing</option>
                    <option value="Snacks">jewelery</option>
                    <option value="Boissons">electronics</option>
                    <option value="Boissons">women's clothing</option>
                </select>
            </div>
            <div class="col-span-6 sm:col-span-3">
                <label for="brand" class="text-sm font-medium text-gray-900 block mb-2">Image</label>
                <input
                type="file"
                id="imageProduit"
                name="imageProduit"
                onChange={(e)=>setProduit({...produit,image:e.target.value})}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div class="col-span-6 sm:col-span-3">
                <label for="price" class="text-sm font-medium text-gray-900 block mb-2">Prix</label>
                <input type="number" name="price" id="price" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="00DH" required=""
                onChange={(e)=>setProduit({...produit,price:e.target.value})}/>
            </div>
            <div class="col-span-full">
                <label for="price" class="text-sm font-medium text-gray-900 block mb-2">Quantité</label>
                <input type="number" name="count" id="count" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="quntité" required=""
                onChange={(e)=>setProduit({...produit,rating:{...produit.rating,count:e.target.value}})}
                />
            </div>
            <div class="col-span-full">
                <label for="product-details" class="text-sm font-medium text-gray-900 block mb-2">Description</label>
                <textarea id="product-details" rows="6" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="description"
                onChange={(e)=>setProduit({...produit,description:e.target.value})}></textarea>
            </div>
        </div>
    </form>
</div>

<div class="p-6 border-t border-gray-200 rounded-b">
    <Link to="/produit/listProduits">
        <button class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit" onClick={Ajouter}>Ajouter</button>
    </Link>
</div>

</div>
        </>
    )
}
export default AjouterProduit