import { useState } from "react";
import { Link } from "react-router-dom";

function AfficherProduits({listProduits,produit,setListProduits,setProduit}){

    const [categorieR,setCategoireR] = useState('');

    let initialListProduits = [...listProduits]; // Conserver la liste d'origine intacte

    function supprimer(id){
        let _produits = listProduits.filter(function(item){
            return item.id !== id
        })
        setListProduits(_produits)
    }



function rechercher() {
    // Vérifie que 'categorieR' n'est pas vide ou indéfini
    if (!categorieR) {
        console.error("La catégorie n'est pas définie.");
        return;
    }

    // Filtrage des produits par catégorie, en utilisant la liste initiale
    const _produits = initialListProduits.filter(item => 
        item.categorie && item.categorie.libelle && item.categorie.libelle.toLowerCase() === categorieR.toLowerCase()
    );

    // Si aucun produit n'est trouvé
    if (_produits.length === 0) {
        console.log("Aucun produit trouvé pour cette catégorie.");
    }

    // Mise à jour de la liste des produits filtrés
    setListProduits(_produits);
}


    return(
        <>
        <Link to="/ajouter">
            <button class="px-4 py-2 my-8 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Ajouter</button>
        </Link>

        

        <div class="relative">
  <input
    class="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
    id="username"
    type="text"
    placeholder="Search..."
    onChange={(e)=>setCategoireR(e.target.value)}
  />
  <div class="absolute right-0 inset-y-0 flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </div>

  <div class="absolute left-0 inset-y-0 flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
        onClick={rechercher}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  </div>
</div>



            <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
                <table class="min-w-full">
                    <thead class="border-b">
                        <tr>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">#</th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Nom produit</th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">categorie</th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Quantite Stockee</th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Prix</th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* Affichage */}
                        
                        {listProduits.map(function(item,index){
                            return(
                                <tr class="border-b" key={index}>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.libelle}</td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.categorie.libelle}</td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.quantiteStockee}</td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.prix}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <Link to="/modifie">
                                            <button class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out" onClick={()=>setProduit({...item})}>Edit</button>
                                        </Link>
                                        <button class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out" onClick={()=>supprimer(item.id)}>Delete</button>
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
export default AfficherProduits;