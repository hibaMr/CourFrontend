import { Link } from "react-router-dom"

function ListCommande({produits,setProduits,produit,setProduit,commande,setCommande,commandes,setCommandes,quantite,setQuantite,comId}){
        
    function supprimer(id){
        const _commandes = commandes.filter(function(item){
            return item.id !== id
        })
        setCommandes([..._commandes])
    }

    

    return (
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
        </div>
    </div>
</div>


<table class="min-w-full divide-y divide-gray-200 overflow-x-auto">
    <thead class="bg-gray-50">
        <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    #
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nom
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Address
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tel
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nom produit
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Prix
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Catégorie
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantité
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
            </th>
        </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
        {commandes.map(function(item,index){
            
            return(
                <>
                    <tr key={index}>
                        <td class="px-6 py-4 whitespace-nowrap">
                            {item.id}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            {item.nom}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            {item.adress}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.email}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.tel}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.produit.title}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.produit.price}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.produit.category}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.count}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <img class="h-auto w-24" src= {item.produit.image}/>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                            <Link to="/commande/modifierCommande">
                                <a href="#" class="text-indigo-600 hover:text-indigo-900" onClick={()=>setCommande({...item})}>Edit</a>
                            </Link>
                            <a href="#" class="ml-2 text-red-600 hover:text-red-900" onClick={()=>supprimer(item.id)}>Delete</a>
                        </td>
                    </tr>
                </>
            )
        })}
        
        





    </tbody>
</table>
        </>
    )
}
export default ListCommande;