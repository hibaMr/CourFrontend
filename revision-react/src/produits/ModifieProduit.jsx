import { Link } from "react-router-dom";

function ModifieProduit({produits,setProduits,categories,produit,setProduit}){

    function modifie(){
        let _produits = produits.map(function(item){
            if(item.id == produit.id){
                item = produit
            }
            return item
        })
        setProduits(_produits)
    }

    return(
        <>
            <div class="bg-blue-200 min-h-screen flex items-center">
                <div class="w-full">
                    <h2 class="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Modifie Produit</h2>
                    <div class="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                        <form action="">
                            <div class="mb-5">
                                <label for="name" class="block mb-2 font-bold text-gray-600">Nom produit</label>
                                <input type="text" id="name" name="name" placeholder="Put in your fullname." value={produit.libelle} class="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                            </div>

                            <div class="mb-5">
                                <label for="twitter" class="block mb-2 font-bold text-gray-600">Categorie</label>
                                <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" >
                                    {categories.map(function(item,index){
                                        return(
                                            <option key={index} value={item.id}>{item.libelle}</option>
                                        )
                                    })}
                                    
                                </select>
                                </div>

                            <div class="mb-5">
                                <label for="twitter" class="block mb-2 font-bold text-gray-600">Quantite</label>
                                <input type="number" id="twitter" name="twitter" placeholder="Put in your fullname." value={produit.quantiteStockee} class="border border-red-300 shadow p-3 w-full rounded mb-"/>
                                </div>

                            <div class="mb-5">
                                <label for="twitter" class="block mb-2 font-bold text-gray-600">Prix</label>
                                <input type="number" id="twitter" name="twitter" placeholder="Put in your fullname." value={produit.prix} class="border border-red-300 shadow p-3 w-full rounded mb-"/>
                                </div>
                            <Link to='/produits'>
                                <button class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg" onClick={modifie}>Valider</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ModifieProduit;