
import { useState } from "react"
import { Link } from "react-router-dom"

function ListProduitClient({produits,setProduits,produit,setProduit,commande,setCommande,commandes,setCommandes ,quantite,setQuantite,comId}){

    const [_commande,_setCommande] = useState({
                id:commande.id,
                nom: commande.nom,
                adress: commande.adress,
                email: commande.email,
                tel: commande.tel,
                count: commande.count,
                produit: commande.produit  
        })

   

    let url = ""

    if(_commande.length > 0){
        url = "/commande/modifierCommande"
    }else{
        url = "/commande/ajouterCommande"
    }

    


    return(
        <>
    <div class="flex flex-col mt-10">
      <div class=" overflow-x-auto">
        <div class="min-w-full inline-block align-middle">
            <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">

                <div class="relative  text-gray-500 focus-within:text-gray-900 mb-4">
                    <input class="block w-80 h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"  type="search" placeholder="Search" />
                    <button class="absolute inset-y-0 right-0 flex items-center px-4 rounded-r-md  " >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                </button>
                </div>

            </div>
            

    <div class="overflow-hidden ">
    <table className=" min-w-full rounded-xl">
        <thead>
            <tr class="bg-gray-100">
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Nom produit</th>
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Description</th>
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Prix</th>
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Catégorie</th>
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Image</th>
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Action</th>
            </tr>
        </thead>
        <tbody class="bg-white">
            {produits.map(function(item,index){
                return(
                    <tr key={index} >
                        <td className="py-2 px-4 border">{item.title}</td>
                        <td className="py-2 px-4 border">{item.description}</td>
                        <td className="py-2 px-4 border">{item.price}</td>
                        <td className="py-2 px-4 border">{item.category}</td>
                        <td className="py-2 px-4 border"><img class="h-auto w-24" src= {item.image}/></td>
                        <td class=" p-5 border">
                            <div class="flex items-center gap-1">  
                                
                                <Link to={url}>
                                    <button class="p-2 rounded-full  group transition-all duration-500  flex item-center" onClick={()=>setProduit({...item})}>
                                        <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                        </svg>
                                    </button>
                                </Link>
                                    
                            </div>
                        </td>
                    </tr>
                )
            })}
                    
                
            
            
        </tbody>
    </table>
</div>
        </div>
      </div>
      </div>

        </>
    )
}
export default ListProduitClient