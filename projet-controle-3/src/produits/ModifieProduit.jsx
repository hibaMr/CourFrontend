import { useState } from "react"
import { Link } from "react-router-dom"

function ModifieProduit({produits,setProduits,produit,setProduit}){

    const [objProduit,setObjProduit] = useState({
        id:produit.id,
        title:produit.title,
        price:produit.price,
        description:produit.description,
        category:produit.category,
        rating:{
            count:produit.rating.count
        },
        
        image:produit.image,
    })

    function modifie(){
        let _produits = produits.map(function(item){
            if(item.id == objProduit.id){
                item = objProduit
            }
            return item
        })
        setProduits([..._produits])
    }
    console.log(produit)

    return(
        <>
            <div class="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
            <div class="mt-10 text-center font-bold">Contact Us</div>
            <div class="mt-3 text-center text-4xl font-bold">Modifier Produit</div>
            <div class="p-8">
                <div class="flex gap-4">
                <input type="text" name="name" class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Full Name *" value={objProduit.title} onChange={(e)=>setObjProduit({...objProduit,title:e.target.value})}/>
                <input type="text" name="prix" class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="prix" value={objProduit.price} onChange={(e)=>setObjProduit({...objProduit,price:e.target.value})}/>
                </div>
                <div class="my-6 flex gap-4">
                    <input
                    type="file"
                    id="imageProduit"
                    name="imageProduit"
                    // value={objProduit.image}
                    onChange={(e)=>setObjProduit({...objProduit,image:e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <select name="select" id="select" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" value={objProduit.category} onChange={(e)=>setObjProduit({...objProduit,category:e.target.value})}>
                        <option value="Petit déjeuner">men's clothing</option>
                        <option value="Snacks">jewelery</option>
                        <option value="Boissons">electronics</option>
                        <option value="Boissons">women's clothing</option>
                    </select>
                </div>
                <div class="col-span-full">
                    <label for="price" class="text-sm font-medium text-gray-900 block mb-2">Quantité</label>
                    <input type="number" name="price" id="price" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="" required=""
                    onChange={(e)=>setProduit({...objProduit,rating:{...objProduit.rating,count:e.target.value}})}
                    value={objProduit.rating.count}
                    />
                </div>
                <div class="">
                <textarea name="textarea" id="text" cols="30" rows="10" class="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300" value={objProduit.description} onChange={(e)=>setObjProduit({...objProduit,description:e.target.value})}>Message</textarea>
                </div>
                <Link to="/produit/listProduits">
                    <div class="text-center" onClick={modifie}>
                    <a class="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">Modifier</a>
                    </div>
                </Link>
            </div>
            </div>
        </>
    )
}
export default ModifieProduit